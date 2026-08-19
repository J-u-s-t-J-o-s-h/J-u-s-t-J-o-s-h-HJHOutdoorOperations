import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'Storm shelter, excavation, land clearing, and site prep projects completed by HJH Outdoor Operations across Oklahoma.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
