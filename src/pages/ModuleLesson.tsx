import { useParams, Navigate } from 'react-router-dom'
import { LessonLayout } from '@/components/shared/LessonLayout'
import { getModuleBySlug } from '@/data/modules'

export default function ModuleLesson() {
  const { slug } = useParams<{ slug: string }>()
  const module = slug ? getModuleBySlug(slug) : undefined

  if (!module) return <Navigate to="/modules" replace />

  return <LessonLayout module={module} />
}
