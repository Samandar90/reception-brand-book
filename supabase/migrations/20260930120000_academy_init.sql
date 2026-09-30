-- Hotel Academy — assessment platform schema
-- Roles: admin (owner) / employee. All access goes through RLS; accounts are created
-- only by the admin-users Edge Function (public sign-up is disabled in Auth settings).
-- Live final-test state changes only through SECURITY DEFINER RPCs (server time, server scoring).

-- ─── Types ───────────────────────────────────────────────────────────────────

create type public.user_role as enum ('admin', 'employee');
create type public.test_kind as enum ('knowledge', 'english', 'russian', 'final');
create type public.final_status as enum ('lobby', 'question', 'reveal', 'finished', 'cancelled');

-- ─── Profiles ────────────────────────────────────────────────────────────────

create table public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  login       text not null unique check (login ~ '^[a-z0-9][a-z0-9._-]{2,31}$'),
  full_name   text not null check (char_length(btrim(full_name)) between 1 and 120),
  role        public.user_role not null default 'employee',
  position    text check (position is null or char_length(position) <= 80),
  is_active   boolean not null default true,
  created_at  timestamptz not null default now(),
  created_by  uuid references auth.users (id) on delete set null
);

comment on table public.profiles is 'One row per account. Created by trigger from auth.users (app_metadata carries login/role).';

-- Helper predicates. SECURITY DEFINER + owned by postgres → they read profiles without
-- re-entering the profiles RLS policies (no recursion).
create or replace function public.is_admin()
returns boolean
language sql stable security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin' and p.is_active
  );
$$;

create or replace function public.is_active_user()
returns boolean
language sql stable security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.is_active
  );
$$;

create or replace function public.server_now()
returns timestamptz
language sql stable
as $$ select now(); $$;

revoke all on function public.is_admin() from public;
revoke all on function public.is_active_user() from public;
revoke all on function public.server_now() from public;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_active_user() to authenticated;
grant execute on function public.server_now() to authenticated;

-- Create the profile row when the Edge Function creates an auth user.
-- Role/login come from raw_app_meta_data, which only the service role can set.
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer
set search_path = ''
as $$
declare
  v_login text;
  v_role  public.user_role;
begin
  v_login := lower(coalesce(nullif(new.raw_app_meta_data ->> 'login', ''), split_part(new.email, '@', 1)));
  v_role  := case when new.raw_app_meta_data ->> 'role' = 'admin' then 'admin'::public.user_role
                  else 'employee'::public.user_role end;

  insert into public.profiles (id, login, full_name, role, position, created_by)
  values (
    new.id,
    v_login,
    coalesce(nullif(btrim(new.raw_user_meta_data ->> 'full_name'), ''), v_login),
    v_role,
    nullif(btrim(new.raw_user_meta_data ->> 'position'), ''),
    nullif(new.raw_app_meta_data ->> 'created_by', '')::uuid
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Service-role only: drop every session of a user (used when an account is deactivated).
create or replace function public.revoke_user_sessions(p_user_id uuid)
returns void
language plpgsql security definer
set search_path = ''
as $$
begin
  if auth.role() <> 'service_role' then
    raise exception 'service role only' using errcode = '42501';
  end if;
  delete from auth.refresh_tokens where user_id = p_user_id::text;
  delete from auth.sessions where user_id = p_user_id;
end;
$$;
revoke all on function public.revoke_user_sessions(uuid) from public, anon, authenticated;
grant execute on function public.revoke_user_sessions(uuid) to service_role;

-- Server-only settings (e.g. the first-launch bootstrap key). RLS on and no policies:
-- only the service role (Edge Functions) can read or write it.
create table public.app_config (
  key        text primary key,
  value      text not null,
  updated_at timestamptz not null default now()
);
alter table public.app_config enable row level security;
revoke all on table public.app_config from anon, authenticated;

-- ─── Learning progress ───────────────────────────────────────────────────────

-- A module counts as completed once its "check yourself" mini-quiz is passed.
create table public.module_progress (
  user_id      uuid not null references public.profiles (id) on delete cascade,
  module_slug  text not null check (module_slug ~ '^[a-z0-9-]{2,64}$'),
  completed_at timestamptz not null default now(),
  check_score  smallint check (check_score is null or check_score >= 0),
  check_total  smallint check (check_total is null or check_total > 0),
  check (check_score is null or check_total is null or check_score <= check_total),
  primary key (user_id, module_slug)
);

create table public.activity_log (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references public.profiles (id) on delete cascade,
  event      text not null check (event in ('login', 'lesson_view', 'lesson_complete', 'test_start', 'test_finish', 'final_join')),
  meta       jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index activity_log_user_created_idx on public.activity_log (user_id, created_at desc);
create index activity_log_created_idx on public.activity_log (created_at desc);

-- ─── Retake grants for language tests ────────────────────────────────────────
-- The first attempt per language is free; every retake needs a grant from the admin
-- (valid 24 h so the owner can hand it out during a shift and watch the retake).

create table public.test_grants (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references public.profiles (id) on delete cascade,
  kind               public.test_kind not null check (kind in ('english', 'russian')),
  granted_by         uuid references public.profiles (id) on delete set null,
  created_at         timestamptz not null default now(),
  expires_at         timestamptz not null default now() + interval '24 hours',
  used_by_attempt_id uuid,
  used_at            timestamptz
);
create index test_grants_user_kind_idx on public.test_grants (user_id, kind) where used_by_attempt_id is null;

-- ─── Final live test ─────────────────────────────────────────────────────────

create table public.final_sessions (
  id                  uuid primary key default gen_random_uuid(),
  title               text not null default '' check (char_length(title) <= 120),
  status              public.final_status not null default 'lobby',
  question_ids        jsonb not null default '[]'::jsonb check (jsonb_typeof(question_ids) = 'array'),
  current_index       integer not null default -1 check (current_index >= -1),
  asked_count         integer not null default 0 check (asked_count >= 0),
  current_question    jsonb,        -- localized payload for phones (no answer key)
  reveal              jsonb,        -- {questionId, correctIndex, explanation, distribution, answered, correctCount}
  question_started_at timestamptz,
  question_deadline_at timestamptz,
  settings            jsonb not null default '{"choiceSeconds": 30, "openSeconds": 120}'::jsonb,
  created_by          uuid references public.profiles (id) on delete set null,
  created_at          timestamptz not null default now(),
  finished_at         timestamptz,
  check (coalesce((settings ->> 'choiceSeconds')::integer, 30) between 10 and 600),
  check (coalesce((settings ->> 'openSeconds')::integer, 120) between 30 and 900)
);
-- Only one live session at a time.
create unique index final_sessions_one_active_idx on public.final_sessions ((true))
  where status in ('lobby', 'question', 'reveal');
create index final_sessions_created_idx on public.final_sessions (created_at desc);

-- Answer keys for choice questions, written by open_final_question(); never readable by employees.
create table public.final_question_keys (
  question_id   text primary key,
  correct_index smallint not null check (correct_index between 0 and 3),
  updated_at    timestamptz not null default now()
);

create table public.final_participants (
  session_id     uuid not null references public.final_sessions (id) on delete cascade,
  user_id        uuid not null references public.profiles (id) on delete cascade,
  display_name   text not null default '',
  joined_at      timestamptz not null default now(),
  last_seen_at   timestamptz not null default now(),
  answered_count integer not null default 0,
  score          integer not null default 0,
  rank           integer,
  primary key (session_id, user_id)
);

create table public.final_answers (
  session_id   uuid not null,
  user_id      uuid not null,
  question_id  text not null,
  answer_index smallint check (answer_index between 0 and 3),
  answer_text  text check (answer_text is null or char_length(answer_text) <= 2000),
  is_correct   boolean,
  points       integer not null default 0,
  response_ms  integer,
  open_score   smallint check (open_score is null or open_score between 0 and 5),
  answered_at  timestamptz not null default now(),
  primary key (session_id, user_id, question_id),
  foreign key (session_id, user_id) references public.final_participants (session_id, user_id) on delete cascade,
  check (answer_index is not null or answer_text is not null)
);
create index final_answers_session_question_idx on public.final_answers (session_id, question_id);

-- ─── Test attempts ───────────────────────────────────────────────────────────

create table public.test_attempts (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references public.profiles (id) on delete cascade,
  kind            public.test_kind not null,
  score           integer not null check (score >= 0),
  total           integer not null check (total > 0),
  percent         numeric(5, 2) not null default 0 check (percent between 0 and 100),
  level           text check (level is null or level in ('A0', 'A1', 'A2', 'B1', 'B2', 'C1')),
  details         jsonb not null default '{}'::jsonb,
  writing         jsonb,
  writing_rubric  jsonb,
  writing_score   smallint check (writing_score is null or writing_score between 0 and 5),
  writing_comment text check (writing_comment is null or char_length(writing_comment) <= 1000),
  graded_by       uuid references public.profiles (id) on delete set null,
  graded_at       timestamptz,
  session_id      uuid references public.final_sessions (id) on delete cascade,
  started_at      timestamptz not null default now(),
  finished_at     timestamptz not null default now(),
  duration_sec    integer check (duration_sec is null or duration_sec >= 0),
  check (score <= total),
  check (finished_at >= started_at),
  check ((kind = 'final') = (session_id is not null))
);
create index test_attempts_user_kind_idx on public.test_attempts (user_id, kind, finished_at desc);
create index test_attempts_kind_idx on public.test_attempts (kind, finished_at desc);
create index test_attempts_ungraded_idx on public.test_attempts (finished_at desc) where writing is not null and writing_score is null;
create unique index test_attempts_final_once_idx on public.test_attempts (session_id, user_id) where kind = 'final';

alter table public.test_grants
  add constraint test_grants_used_by_fk foreign key (used_by_attempt_id) references public.test_attempts (id)
  on delete set null deferrable initially deferred;

-- percent is derived for every kind except final (blended by grading, see below);
-- language retakes consume a grant.
create or replace function public.before_insert_test_attempt()
returns trigger
language plpgsql security definer
set search_path = ''
as $$
declare
  v_grant uuid;
begin
  if new.kind <> 'final' then
    new.percent := round(new.score::numeric * 100 / new.total, 2);
  end if;

  if new.kind in ('english', 'russian')
     and exists (select 1 from public.test_attempts t where t.user_id = new.user_id and t.kind = new.kind) then
    select g.id into v_grant
    from public.test_grants g
    where g.user_id = new.user_id and g.kind = new.kind
      and g.used_by_attempt_id is null and g.expires_at > now()
    order by g.created_at
    limit 1
    for update;
    if v_grant is null then
      raise exception 'retake_not_allowed' using errcode = 'P0001';
    end if;
    update public.test_grants set used_by_attempt_id = new.id, used_at = now() where id = v_grant;
  end if;
  return new;
end;
$$;

create trigger test_attempts_before_insert
  before insert on public.test_attempts
  for each row execute function public.before_insert_test_attempt();

-- Grading is stamped server-side.
create or replace function public.before_update_test_attempt()
returns trigger
language plpgsql
as $$
begin
  if new.writing_score is distinct from old.writing_score
     or new.writing_comment is distinct from old.writing_comment
     or new.writing_rubric is distinct from old.writing_rubric then
    new.graded_by := auth.uid();
    new.graded_at := now();
  end if;
  return new;
end;
$$;

create trigger test_attempts_before_update
  before update on public.test_attempts
  for each row execute function public.before_update_test_attempt();

-- ─── Live test: scoring & state machine (RPC only) ───────────────────────────

-- Keep participant totals in sync.
create or replace function public.after_insert_final_answer()
returns trigger
language plpgsql security definer
set search_path = ''
as $$
begin
  update public.final_participants
  set score = score + new.points, answered_count = answered_count + 1, last_seen_at = now()
  where session_id = new.session_id and user_id = new.user_id;
  return new;
end;
$$;

create trigger final_answers_after_insert
  after insert on public.final_answers
  for each row execute function public.after_insert_final_answer();

-- Join (idempotent) — also used as a heartbeat.
create or replace function public.join_final_session(p_session_id uuid)
returns public.final_participants
language plpgsql security definer
set search_path = ''
as $$
declare
  v_row public.final_participants;
begin
  if not public.is_active_user() then
    raise exception 'inactive' using errcode = '42501';
  end if;
  if not exists (select 1 from public.final_sessions s where s.id = p_session_id and s.status in ('lobby', 'question', 'reveal')) then
    raise exception 'session_not_open' using errcode = 'P0001';
  end if;
  insert into public.final_participants (session_id, user_id, display_name)
  select p_session_id, auth.uid(), p.full_name from public.profiles p where p.id = auth.uid()
  on conflict (session_id, user_id) do update set last_seen_at = now()
  returning * into v_row;
  return v_row;
end;
$$;

-- Submit an answer: idempotent, server-timed, server-scored.
create or replace function public.submit_final_answer(
  p_session_id uuid, p_question_id text, p_answer_index smallint default null, p_answer_text text default null
)
returns public.final_answers
language plpgsql security definer
set search_path = ''
as $$
declare
  s          public.final_sessions%rowtype;
  v_key      smallint;
  v_secs     integer;
  v_elapsed  integer;
  v_row      public.final_answers;
  v_points   integer := 0;
  v_correct  boolean;
begin
  if not public.is_active_user() then
    raise exception 'inactive' using errcode = '42501';
  end if;

  select * into v_row from public.final_answers
  where session_id = p_session_id and user_id = auth.uid() and question_id = p_question_id;
  if found then
    return v_row; -- duplicate tap / retry: same record
  end if;

  select * into s from public.final_sessions where id = p_session_id for share;
  if not found or s.status <> 'question' then
    raise exception 'not_accepting' using errcode = 'P0001';
  end if;
  if (s.question_ids ->> s.current_index) is distinct from p_question_id then
    raise exception 'not_current_question' using errcode = 'P0001';
  end if;
  if not exists (select 1 from public.final_participants p where p.session_id = p_session_id and p.user_id = auth.uid()) then
    raise exception 'not_participant' using errcode = 'P0001';
  end if;
  if now() > s.question_deadline_at + interval '3 seconds' then
    raise exception 'time_over' using errcode = 'P0001';
  end if;

  v_elapsed := greatest(0, floor(extract(epoch from (now() - s.question_started_at)) * 1000))::integer;

  if p_answer_index is not null then
    v_secs := coalesce((s.settings ->> 'choiceSeconds')::integer, 30);
    select k.correct_index into v_key from public.final_question_keys k where k.question_id = p_question_id;
    v_correct := (v_key is not null and p_answer_index = v_key);
    v_points := case when v_correct then 100 + (case when v_elapsed < v_secs * 500 then 20 else 0 end) else 0 end;
    insert into public.final_answers (session_id, user_id, question_id, answer_index, is_correct, points, response_ms)
    values (p_session_id, auth.uid(), p_question_id, p_answer_index, v_correct, v_points, v_elapsed)
    on conflict (session_id, user_id, question_id) do nothing;
  else
    if p_answer_text is null or btrim(p_answer_text) = '' then
      raise exception 'empty_answer' using errcode = 'P0001';
    end if;
    insert into public.final_answers (session_id, user_id, question_id, answer_text, is_correct, points, response_ms)
    values (p_session_id, auth.uid(), p_question_id, left(p_answer_text, 2000), null, 0, v_elapsed)
    on conflict (session_id, user_id, question_id) do nothing;
  end if;

  select * into v_row from public.final_answers
  where session_id = p_session_id and user_id = auth.uid() and question_id = p_question_id;
  return v_row;
end;
$$;

-- Admin: open the next question (lobby → question, or reveal → question).
-- The client passes the localized question payload for phones and the answer key (choice only).
create or replace function public.open_final_question(
  p_session_id uuid, p_expected_index integer, p_question jsonb, p_correct_index smallint default null
)
returns public.final_sessions
language plpgsql security definer
set search_path = ''
as $$
declare
  s        public.final_sessions%rowtype;
  v_next   integer;
  v_qid    text;
  v_secs   integer;
begin
  if not public.is_admin() then
    raise exception 'admin only' using errcode = '42501';
  end if;
  select * into s from public.final_sessions where id = p_session_id for update;
  if not found then
    raise exception 'session not found' using errcode = 'P0002';
  end if;
  if s.status not in ('lobby', 'reveal') or s.current_index <> p_expected_index then
    return s; -- stale click: no-op
  end if;
  v_next := s.current_index + 1;
  if v_next >= jsonb_array_length(s.question_ids) then
    return s;
  end if;
  v_qid := s.question_ids ->> v_next;
  if (p_question ->> 'id') is distinct from v_qid then
    raise exception 'question_mismatch' using errcode = 'P0001';
  end if;
  if p_correct_index is not null then
    insert into public.final_question_keys (question_id, correct_index, updated_at)
    values (v_qid, p_correct_index, now())
    on conflict (question_id) do update set correct_index = excluded.correct_index, updated_at = now();
    v_secs := coalesce((s.settings ->> 'choiceSeconds')::integer, 30);
  else
    v_secs := coalesce((s.settings ->> 'openSeconds')::integer, 120);
  end if;

  update public.final_sessions
  set status = 'question',
      current_index = v_next,
      asked_count = v_next + 1,
      current_question = p_question - 'correctIndex' - 'explanation' - 'rubric',
      reveal = null,
      question_started_at = now(),
      question_deadline_at = now() + make_interval(secs => v_secs)
  where id = p_session_id
  returning * into s;
  return s;
end;
$$;

-- Admin: reveal the current question (question → reveal). Distribution is computed here.
create or replace function public.reveal_final_question(p_session_id uuid, p_expected_index integer, p_explanation jsonb default null)
returns public.final_sessions
language plpgsql security definer
set search_path = ''
as $$
declare
  s        public.final_sessions%rowtype;
  v_qid    text;
  v_key    smallint;
  v_dist   jsonb;
  v_ans    integer;
  v_ok     integer;
begin
  if not public.is_admin() then
    raise exception 'admin only' using errcode = '42501';
  end if;
  select * into s from public.final_sessions where id = p_session_id for update;
  if not found then
    raise exception 'session not found' using errcode = 'P0002';
  end if;
  if s.status <> 'question' or s.current_index <> p_expected_index then
    return s;
  end if;
  v_qid := s.question_ids ->> s.current_index;
  select k.correct_index into v_key from public.final_question_keys k where k.question_id = v_qid;

  select jsonb_build_array(
           count(*) filter (where a.answer_index = 0),
           count(*) filter (where a.answer_index = 1),
           count(*) filter (where a.answer_index = 2),
           count(*) filter (where a.answer_index = 3)),
         count(*),
         count(*) filter (where a.is_correct)
  into v_dist, v_ans, v_ok
  from public.final_answers a
  where a.session_id = p_session_id and a.question_id = v_qid;

  update public.final_sessions
  set status = 'reveal',
      reveal = jsonb_build_object(
        'questionId', v_qid,
        'correctIndex', v_key,
        'explanation', p_explanation,
        'distribution', v_dist,
        'answered', v_ans,
        'correctCount', v_ok)
  where id = p_session_id
  returning * into s;
  return s;
end;
$$;

-- Admin: cancel a session that has not finished (no results are written).
create or replace function public.cancel_final_session(p_session_id uuid)
returns void
language plpgsql security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'admin only' using errcode = '42501';
  end if;
  update public.final_sessions
  set status = 'cancelled', finished_at = now(), current_question = null
  where id = p_session_id and status in ('lobby', 'question', 'reveal');
end;
$$;

-- Recompute the blended final result for one participant once open answers are graded.
create or replace function public.recompute_final_attempt(p_session_id uuid, p_user_id uuid)
returns void
language plpgsql security definer
set search_path = ''
as $$
declare
  s            public.final_sessions%rowtype;
  v_asked_open integer;
  v_open_pts   integer;
  v_pending    integer;
  v_mc_pct     numeric;
  v_open_max   integer;
  v_status     text;
  v_percent    numeric;
begin
  select * into s from public.final_sessions where id = p_session_id;
  if not found or s.status <> 'finished' then
    return;
  end if;

  select count(*) into v_asked_open
  from jsonb_array_elements_text(s.question_ids) with ordinality q(qid, ord)
  where q.ord <= s.asked_count and not exists (select 1 from public.final_question_keys k where k.question_id = q.qid);

  select coalesce(sum(a.open_score), 0), count(*) filter (where a.open_score is null)
  into v_open_pts, v_pending
  from public.final_answers a
  where a.session_id = p_session_id and a.user_id = p_user_id and a.answer_text is not null;

  v_open_max := v_asked_open * 5;
  v_status := case when v_asked_open = 0 or v_pending = 0 then 'graded' else 'pending' end;

  select t.percent into v_mc_pct from public.test_attempts t
  where t.session_id = p_session_id and t.user_id = p_user_id and t.kind = 'final';
  if not found then
    return;
  end if;
  v_mc_pct := coalesce((select (t.details ->> 'percentMc')::numeric from public.test_attempts t
                        where t.session_id = p_session_id and t.user_id = p_user_id and t.kind = 'final'), v_mc_pct);

  v_percent := case
    when v_open_max > 0 and v_status = 'graded' then round(v_mc_pct * 0.7 + (v_open_pts::numeric / v_open_max) * 30, 2)
    else v_mc_pct
  end;

  update public.test_attempts t
  set percent = v_percent,
      details = t.details || jsonb_build_object(
        'openPoints', v_open_pts, 'openMax', v_open_max, 'gradingStatus', v_status)
  where t.session_id = p_session_id and t.user_id = p_user_id and t.kind = 'final';
end;
$$;

create or replace function public.after_update_final_answer()
returns trigger
language plpgsql security definer
set search_path = ''
as $$
begin
  if new.open_score is distinct from old.open_score then
    perform public.recompute_final_attempt(new.session_id, new.user_id);
  end if;
  return new;
end;
$$;

create trigger final_answers_after_update
  after update on public.final_answers
  for each row execute function public.after_update_final_answer();

-- Admin: finish (idempotent). Denominator = choice questions actually asked; missing answers = 0.
create or replace function public.finish_final_session(p_session_id uuid)
returns void
language plpgsql security definer
set search_path = ''
as $$
declare
  s            public.final_sessions%rowtype;
  v_total_mc   integer;
  v_asked_open integer;
  r            record;
begin
  if not public.is_admin() then
    raise exception 'admin only' using errcode = '42501';
  end if;

  select * into s from public.final_sessions where id = p_session_id for update;
  if not found then
    raise exception 'session not found' using errcode = 'P0002';
  end if;
  if s.status in ('finished', 'cancelled') then
    return;
  end if;
  if s.status = 'lobby' or s.asked_count = 0 then
    update public.final_sessions set status = 'cancelled', finished_at = now(), current_question = null where id = p_session_id;
    return;
  end if;

  select
    count(*) filter (where exists (select 1 from public.final_question_keys k where k.question_id = q.qid)),
    count(*) filter (where not exists (select 1 from public.final_question_keys k where k.question_id = q.qid))
  into v_total_mc, v_asked_open
  from jsonb_array_elements_text(s.question_ids) with ordinality q(qid, ord)
  where q.ord <= s.asked_count;

  -- Ties on points are broken by total response time of correct answers (faster ranks higher).
  with totals as (
    select p.user_id, p.score, p.joined_at,
           coalesce((select sum(a.response_ms) from public.final_answers a
                     where a.session_id = p.session_id and a.user_id = p.user_id and a.is_correct), 0) as correct_ms
    from public.final_participants p where p.session_id = p_session_id
  ), ranked as (
    select user_id, rank() over (order by score desc, correct_ms asc, joined_at asc) as r from totals
  )
  update public.final_participants p
  set rank = ranked.r
  from ranked
  where p.session_id = p_session_id and p.user_id = ranked.user_id;

  for r in select * from public.final_participants p where p.session_id = p_session_id loop
    insert into public.test_attempts (user_id, kind, score, total, percent, details, session_id, started_at, finished_at, duration_sec)
    select
      r.user_id,
      'final',
      coalesce((select count(*) from public.final_answers a
                where a.session_id = p_session_id and a.user_id = r.user_id and a.is_correct), 0),
      greatest(v_total_mc, 1),
      case when v_total_mc > 0
        then round(coalesce((select count(*) from public.final_answers a
                             where a.session_id = p_session_id and a.user_id = r.user_id and a.is_correct), 0)::numeric * 100 / v_total_mc, 2)
        else 0 end,
      jsonb_build_object(
        'sessionId', p_session_id,
        'title', s.title,
        'points', r.score,
        'rank', r.rank,
        'askedChoice', v_total_mc,
        'askedOpen', v_asked_open,
        'answered', r.answered_count,
        'incomplete', r.answered_count * 2 < s.asked_count,
        'percentMc', case when v_total_mc > 0
          then round(coalesce((select count(*) from public.final_answers a
                               where a.session_id = p_session_id and a.user_id = r.user_id and a.is_correct), 0)::numeric * 100 / v_total_mc, 2)
          else 0 end,
        'openPoints', 0,
        'openMax', v_asked_open * 5,
        'gradingStatus', case when v_asked_open = 0 then 'graded' else 'pending' end,
        'answers', coalesce((
          select jsonb_agg(jsonb_build_object(
            'questionId', a.question_id, 'answerIndex', a.answer_index, 'answerText', a.answer_text,
            'isCorrect', a.is_correct, 'points', a.points, 'responseMs', a.response_ms) order by a.answered_at)
          from public.final_answers a where a.session_id = p_session_id and a.user_id = r.user_id), '[]'::jsonb)
      ),
      p_session_id,
      s.created_at,
      now(),
      extract(epoch from (now() - s.created_at))::integer
    on conflict do nothing;
  end loop;

  update public.final_sessions
  set status = 'finished', finished_at = now(), current_question = null
  where id = p_session_id;

  -- open answers may already carry grades (e.g. graded during the session)
  for r in select distinct user_id from public.final_participants p where p.session_id = p_session_id loop
    perform public.recompute_final_attempt(p_session_id, r.user_id);
  end loop;
end;
$$;

revoke all on function public.join_final_session(uuid) from public;
revoke all on function public.submit_final_answer(uuid, text, smallint, text) from public;
revoke all on function public.open_final_question(uuid, integer, jsonb, smallint) from public;
revoke all on function public.reveal_final_question(uuid, integer, jsonb) from public;
revoke all on function public.cancel_final_session(uuid) from public;
revoke all on function public.finish_final_session(uuid) from public;
revoke all on function public.recompute_final_attempt(uuid, uuid) from public, anon, authenticated;
grant execute on function public.join_final_session(uuid) to authenticated;
grant execute on function public.submit_final_answer(uuid, text, smallint, text) to authenticated;
grant execute on function public.open_final_question(uuid, integer, jsonb, smallint) to authenticated;
grant execute on function public.reveal_final_question(uuid, integer, jsonb) to authenticated;
grant execute on function public.cancel_final_session(uuid) to authenticated;
grant execute on function public.finish_final_session(uuid) to authenticated;

-- ─── Views for the admin panel ───────────────────────────────────────────────

create view public.employee_overview
with (security_invoker = true)
as
select
  p.id, p.login, p.full_name, p.role, p.position, p.is_active, p.created_at,
  (select count(*)::integer from public.module_progress mp where mp.user_id = p.id) as modules_completed,
  (select max(t.percent) from public.test_attempts t where t.user_id = p.id and t.kind = 'knowledge' and t.details ->> 'mode' = 'assessment') as knowledge_best,
  (select t.percent from public.test_attempts t where t.user_id = p.id and t.kind = 'knowledge' and t.details ->> 'mode' = 'assessment' order by t.finished_at desc limit 1) as knowledge_last,
  (select t.finished_at from public.test_attempts t where t.user_id = p.id and t.kind = 'knowledge' and t.details ->> 'mode' = 'assessment' order by t.finished_at desc limit 1) as knowledge_at,
  (select t.level from public.test_attempts t where t.user_id = p.id and t.kind = 'english' order by t.finished_at desc limit 1) as english_level,
  (select t.finished_at from public.test_attempts t where t.user_id = p.id and t.kind = 'english' order by t.finished_at desc limit 1) as english_at,
  (select count(*)::integer from public.test_attempts t where t.user_id = p.id and t.kind = 'english') as english_attempts,
  (select t.level from public.test_attempts t where t.user_id = p.id and t.kind = 'russian' order by t.finished_at desc limit 1) as russian_level,
  (select t.finished_at from public.test_attempts t where t.user_id = p.id and t.kind = 'russian' order by t.finished_at desc limit 1) as russian_at,
  (select count(*)::integer from public.test_attempts t where t.user_id = p.id and t.kind = 'russian') as russian_attempts,
  (select t.percent from public.test_attempts t where t.user_id = p.id and t.kind = 'final' order by t.finished_at desc limit 1) as final_percent,
  (select t.details ->> 'gradingStatus' from public.test_attempts t where t.user_id = p.id and t.kind = 'final' order by t.finished_at desc limit 1) as final_grading_status,
  (select t.finished_at from public.test_attempts t where t.user_id = p.id and t.kind = 'final' order by t.finished_at desc limit 1) as final_at,
  (select max(a.created_at) from public.activity_log a where a.user_id = p.id) as last_active_at,
  (select count(*)::integer from public.test_attempts t where t.user_id = p.id and t.writing is not null and t.writing_score is null) as ungraded_writing,
  (select count(*)::integer from public.test_grants g where g.user_id = p.id and g.used_by_attempt_id is null and g.expires_at > now()) as open_grants
from public.profiles p;

-- Per-question statistics across knowledge/language attempts (admin only via RLS on test_attempts).
create view public.question_stats
with (security_invoker = true)
as
select
  t.kind,
  a.answer ->> 'id' as question_id,
  count(*)::integer as answered,
  round(100.0 * count(*) filter (where (a.answer ->> 'correct')::boolean) / count(*), 1) as pct_correct
from public.test_attempts t
cross join lateral jsonb_array_elements(coalesce(t.details -> 'answers', '[]'::jsonb)) as a(answer)
where t.kind in ('knowledge', 'english', 'russian') and (a.answer ->> 'id') is not null
group by t.kind, a.answer ->> 'id';

-- ─── Row Level Security ──────────────────────────────────────────────────────

alter table public.profiles            enable row level security;
alter table public.module_progress     enable row level security;
alter table public.activity_log        enable row level security;
alter table public.test_grants         enable row level security;
alter table public.test_attempts       enable row level security;
alter table public.final_sessions      enable row level security;
alter table public.final_question_keys enable row level security;
alter table public.final_participants  enable row level security;
alter table public.final_answers       enable row level security;

-- profiles
create policy profiles_select on public.profiles for select to authenticated
  using ((id = auth.uid() and is_active) or (select public.is_admin()));
create policy profiles_update_admin on public.profiles for update to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- module_progress
create policy module_progress_select on public.module_progress for select to authenticated
  using ((user_id = auth.uid() and (select public.is_active_user())) or (select public.is_admin()));
create policy module_progress_insert on public.module_progress for insert to authenticated
  with check (user_id = auth.uid() and (select public.is_active_user()));
create policy module_progress_update on public.module_progress for update to authenticated
  using (user_id = auth.uid() and (select public.is_active_user()))
  with check (user_id = auth.uid() and (select public.is_active_user()));
create policy module_progress_delete on public.module_progress for delete to authenticated
  using ((user_id = auth.uid() and (select public.is_active_user())) or (select public.is_admin()));

-- activity_log
create policy activity_log_select on public.activity_log for select to authenticated
  using ((user_id = auth.uid() and (select public.is_active_user())) or (select public.is_admin()));
create policy activity_log_insert on public.activity_log for insert to authenticated
  with check (user_id = auth.uid() and (select public.is_active_user()));

-- test_grants: employees see their own; admins manage
create policy test_grants_select on public.test_grants for select to authenticated
  using ((user_id = auth.uid() and (select public.is_active_user())) or (select public.is_admin()));
create policy test_grants_insert_admin on public.test_grants for insert to authenticated
  with check ((select public.is_admin()) and granted_by = auth.uid());
create policy test_grants_delete_admin on public.test_grants for delete to authenticated
  using ((select public.is_admin()));

-- test_attempts: employees insert their own knowledge/language attempts (never pre-graded, never final)
create policy test_attempts_select on public.test_attempts for select to authenticated
  using ((user_id = auth.uid() and (select public.is_active_user())) or (select public.is_admin()));
create policy test_attempts_insert on public.test_attempts for insert to authenticated
  with check (
    user_id = auth.uid() and (select public.is_active_user())
    and kind in ('knowledge', 'english', 'russian')
    and session_id is null
    and writing_score is null and writing_comment is null and writing_rubric is null
    and graded_by is null and graded_at is null
  );
create policy test_attempts_update_admin on public.test_attempts for update to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy test_attempts_delete_admin on public.test_attempts for delete to authenticated
  using ((select public.is_admin()));

-- final_sessions: everyone signed in can read; admins create/delete; transitions via RPC only
create policy final_sessions_select on public.final_sessions for select to authenticated
  using ((select public.is_active_user()));
create policy final_sessions_insert_admin on public.final_sessions for insert to authenticated
  with check ((select public.is_admin()) and created_by = auth.uid() and status = 'lobby' and current_index = -1);
create policy final_sessions_delete_admin on public.final_sessions for delete to authenticated
  using ((select public.is_admin()) and status = 'cancelled');

-- final_question_keys: admin only
create policy final_question_keys_admin on public.final_question_keys for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- final_participants: visible to all signed-in users (lobby list / leaderboard); writes via RPC
create policy final_participants_select on public.final_participants for select to authenticated
  using ((select public.is_active_user()));
create policy final_participants_delete_admin on public.final_participants for delete to authenticated
  using ((select public.is_admin()));

-- final_answers: own rows (plain predicate, cheap for Realtime); admins read all and grade open answers
create policy final_answers_select on public.final_answers for select to authenticated
  using (user_id = auth.uid() or (select public.is_admin()));
create policy final_answers_update_admin on public.final_answers for update to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- ─── Realtime ────────────────────────────────────────────────────────────────

alter table public.final_sessions      replica identity full;
alter table public.final_participants  replica identity full;
alter table public.final_answers       replica identity full;

alter publication supabase_realtime add table public.final_sessions;
alter publication supabase_realtime add table public.final_participants;
alter publication supabase_realtime add table public.final_answers;
