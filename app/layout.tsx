import type { Metadata, Viewport } from 'next'
import { Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { StickyCallButton } from '@/components/sticky-call-button'
import { SkipLink } from '@/components/skip-link'
import { JsonLd } from '@/components/json-ld'
import { localBusinessJsonLd } from '@/lib/json-ld'
import { BUSINESS } from '@/lib/business'
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
    default: `${BUSINESS.legalName} | Storm Shelter Installation & Excavation | Oklahoma`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    'Oklahoma storm shelter installation, backhoe service, excavation, dirt work, land clearing, and septic systems. Licensed crew. Free estimates. Call (405) 756-7304.',
  keywords: [
    'HJH Outdoor Operations',
    'HJH Outdoor',
    'HJH',
    'outdoor operations Oklahoma',
    'storm shelter installation Oklahoma',
    'backhoe service Oklahoma',
    'residential storm shelter installer',
    'excavation contractor Oklahoma',
    'dirt work Oklahoma',
    'land clearing Oklahoma',
    'site grading contractor',
    'septic system installation Oklahoma',
  ],
  authors: [{ name: BUSINESS.legalName }],
  creator: BUSINESS.legalName,
  publisher: BUSINESS.legalName,
  manifest: '/brand/site.webmanifest',
  appleWebApp: {
    title: BUSINESS.shortName,
  },
  icons: {
    icon: [
      { url: '/brand/favicon.svg', type: 'image/svg+xml' },
      { url: '/brand/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: BUSINESS.legalName,
    description: 'Storm shelter installation, backhoe service, excavation, and outdoor site work in Oklahoma.',
    type: 'website',
    url: '/',
    siteName: BUSINESS.legalName,
    locale: 'en_US',
    images: [
      {
        url: BUSINESS.ogImagePath,
        width: 1200,
        height: 630,
        alt: BUSINESS.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: BUSINESS.legalName,
    description: 'Storm shelter installation, backhoe service, excavation, and outdoor site work in Oklahoma.',
    images: [BUSINESS.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
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
