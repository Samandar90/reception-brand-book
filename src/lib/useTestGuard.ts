import { useEffect } from 'react'

/**
 * Anti-cheating guard for timed tests.
 *
 * While `active`:
 * - leaving the page (another tab, another app, another window, locked screen) plays a loud two-tone siren so
 *   whoever supervises the test hears it; a shorter signal plays again when the page comes back, because phones
 *   may mute audio of a hidden page;
 * - copying, cutting, dragging text, the context menu and text selection are disabled, so question texts cannot be
 *   pasted into a translator or a search engine (typing in the answer box keeps working; pasting there is blocked
 *   by the pages themselves).
 *
 * The siren is synthesised with the Web Audio API, so no sound file is needed. Browsers only allow audio after the
 * user has interacted with the page; tests always start with a tap on a button, and the guard also unlocks audio on
 * the first pointer/keyboard event, so the siren works on phones too.
 */

let audio: AudioContext | null = null

function audioContext(): AudioContext | null {
  try {
    const Ctor =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    if (!audio) audio = new Ctor()
    if (audio.state === 'suspended') void audio.resume()
    return audio
  } catch {
    return null
  }
}

/** Creates (or resumes) the audio context; call from a user gesture to unlock sound on strict browsers. */
export function armAlarm(): void {
  audioContext()
}

/** Loud alternating 880/1320 Hz square-wave siren for `seconds`. Best effort: a hidden page may be muted. */
export function playLeaveAlarm(seconds = 3): void {
  const ac = audioContext()
  if (!ac) return
  try {
    const t0 = ac.currentTime
    const gain = ac.createGain()
    gain.gain.setValueAtTime(0.5, t0)
    gain.gain.setValueAtTime(0.5, t0 + seconds - 0.05)
    gain.gain.linearRampToValueAtTime(0.0001, t0 + seconds)
    gain.connect(ac.destination)
    const osc = ac.createOscillator()
    osc.type = 'square'
    const step = 0.25
    for (let t = 0; t < seconds; t += step) osc.frequency.setValueAtTime(Math.round(t / step) % 2 ? 1320 : 880, t0 + t)
    osc.connect(gain)
    osc.onended = () => {
      osc.disconnect()
      gain.disconnect()
    }
    osc.start(t0)
    osc.stop(t0 + seconds)
  } catch {
    // audio is best effort
  }
}

const EDITABLE = 'input, textarea, [contenteditable="true"]'

function insideEditable(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(EDITABLE) !== null
}

export function useTestGuard(active: boolean): void {
  useEffect(() => {
    if (!active) return
    armAlarm()

    let lastAlarm = 0
    let away = false
    const alarm = (seconds: number) => {
      const now = Date.now()
      if (now - lastAlarm < 1500) return
      lastAlarm = now
      playLeaveAlarm(seconds)
    }
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        away = true
        alarm(3)
        return
      }
      if (!away) return
      away = false
      alarm(1.5)
    }
    // Another window (or the browser's own UI) got the focus: the page stays visible, so visibilitychange is silent.
    const onBlur = () => alarm(3)
    const unlock = () => armAlarm()

    const block = (e: Event) => e.preventDefault()
    const blockOutsideEditable = (e: Event) => {
      if (!insideEditable(e.target)) e.preventDefault()
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return
      const key = e.key.toLowerCase()
      // copy, cut, select all, print, save page, view source, find (find highlights text to copy)
      if (['c', 'x', 'a', 'p', 's', 'u', 'f'].includes(key)) e.preventDefault()
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('blur', onBlur)
    document.addEventListener('pointerdown', unlock, true)
    document.addEventListener('keydown', unlock, true)
    document.addEventListener('copy', block)
    document.addEventListener('cut', block)
    document.addEventListener('dragstart', block)
    document.addEventListener('contextmenu', blockOutsideEditable)
    document.addEventListener('selectstart', blockOutsideEditable)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('blur', onBlur)
      document.removeEventListener('pointerdown', unlock, true)
      document.removeEventListener('keydown', unlock, true)
      document.removeEventListener('copy', block)
      document.removeEventListener('cut', block)
      document.removeEventListener('dragstart', block)
      document.removeEventListener('contextmenu', blockOutsideEditable)
      document.removeEventListener('selectstart', blockOutsideEditable)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [active])
}
