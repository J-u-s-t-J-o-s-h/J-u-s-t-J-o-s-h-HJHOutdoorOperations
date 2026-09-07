import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/business'

type PageSeoInput = {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noIndex = false,
}: PageSeoInput): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const absolutePath = normalizedPath === '/' ? '/' : normalizedPath

  return {
    title,
    description,
    alternates: {
      canonical: absolutePath,
    },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: absolutePath,
      type: 'website',
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
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [BUSINESS.ogImagePath],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}
