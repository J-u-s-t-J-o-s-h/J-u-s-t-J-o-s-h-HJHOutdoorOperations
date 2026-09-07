import type { Metadata } from 'next'
import { LocationLandingPage } from '@/components/location-landing-page'
import { getLocationLanding } from '@/lib/location-landings'

const landing = getLocationLanding('/ada/backhoe-service')

export const metadata: Metadata = {
  title: { absolute: landing.title },
  description: landing.description,
  alternates: { canonical: landing.path },
  openGraph: {
    title: landing.title,
    description: landing.description,
    url: landing.path,
  },
}

export default function AdaBackhoeServicePage() {
  return <LocationLandingPage landing={landing} />
}
