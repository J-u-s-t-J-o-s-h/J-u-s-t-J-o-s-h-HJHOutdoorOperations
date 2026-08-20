import type { Metadata, Viewport } from 'next'
import { Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { StickyCallButton } from '@/components/sticky-call-button'
import { SkipLink } from '@/components/skip-link'
import { JsonLd } from '@/components/json-ld'
import { localBusinessJsonLd } from '@/lib/json-ld'
import { getSiteUrl } from '@/lib/site-url'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-barlow',
  display: 'optional',
  preload: false,
})

const defaultMetadataBase = getSiteUrl()

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9F9F9' },
    { media: '(prefers-color-scheme: dark)', color: '#2D3436' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(defaultMetadataBase),
  title: {
    default: 'HJH Outdoor Operations LLC | Storm Shelter Installation & Excavation | Oklahoma',
    template: '%s | HJH Outdoor Operations',
  },
  description:
    'Oklahoma storm shelter installation, backhoe service, excavation, dirt work, land clearing, and septic systems. Licensed crew. Free estimates. Call (405) 756-7304.',
  keywords: [
    'storm shelter installation Oklahoma',
    'backhoe service Oklahoma',
    'excavation contractor Oklahoma',
    'dirt work Oklahoma',
    'land clearing Oklahoma',
    'site grading contractor',
    'septic system installation Oklahoma',
    'HJH Outdoor Operations',
  ],
  manifest: '/brand/site.webmanifest',
  appleWebApp: {
    title: 'HJH Outdoor',
  },
  icons: {
    icon: [
      { url: '/brand/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/brand/favicon.svg',
  },
  openGraph: {
    title: 'HJH Outdoor Operations LLC',
    description: 'Storm shelter installation, backhoe service, excavation, and outdoor site work in Oklahoma.',
    type: 'website',
    images: [
      {
        url: '/brand/LogoV-B.svg',
        width: 1200,
        height: 630,
        alt: 'HJH Outdoor Operations LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HJH Outdoor Operations LLC',
    description: 'Storm shelter installation, backhoe service, excavation, and outdoor site work in Oklahoma.',
    images: ['/brand/LogoV-B.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={barlow.variable}
      suppressHydrationWarning
    >
      <head />
      <body
        className="font-sans antialiased min-h-dvh overflow-x-clip pb-[env(safe-area-inset-bottom)]"
        suppressHydrationWarning
      >
        <JsonLd data={localBusinessJsonLd()} />
        <SkipLink />
        {children}
        <StickyCallButton />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-XDCL7C9K1E" />
    </html>
  )
}
