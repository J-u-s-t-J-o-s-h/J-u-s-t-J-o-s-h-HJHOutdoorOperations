import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Free Estimate',
  description:
    'Request a free estimate for storm shelter installation, backhoe work, or excavation in Oklahoma. Call (405) 756-7304 or (580) 458-0087.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
