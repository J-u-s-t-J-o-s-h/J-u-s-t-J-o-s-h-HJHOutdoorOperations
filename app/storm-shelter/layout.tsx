import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/json-ld'

export const metadata: Metadata = {
  title: 'Storm Shelter Installation in Oklahoma',
  description:
    'Residential storm shelter installation across Oklahoma. Underground and walk-in saferooms, most jobs done in a day. Free estimate. Call (405) 756-7304.',
  alternates: { canonical: '/storm-shelter' },
}

export default function StormShelterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: 'Storm shelter installation',
            description:
              'Underground storm shelters and outdoor walk-in saferooms installed for Oklahoma homeowners.',
            path: '/storm-shelter',
            areaServed: 'Oklahoma',
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Storm Shelters', path: '/storm-shelter' },
          ]),
        ]}
      />
      {children}
    </>
  )
}
