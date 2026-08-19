import { BUSINESS } from '@/lib/business'
import { getSiteUrl } from '@/lib/site-url'

type JsonLdNode = Record<string, unknown>

function siteUrl(path = '/'): string {
  return new URL(path, `${getSiteUrl()}/`).toString()
}

export function localBusinessJsonLd(): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteUrl()}#business`,
    name: BUSINESS.name,
    url: siteUrl(),
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: siteUrl('/brand/LogoV-B.svg'),
    logo: siteUrl('/brand/LogoV-B.svg'),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'State',
      name: 'Oklahoma',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
    sameAs: [...BUSINESS.sameAs],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Outdoor operations services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Storm shelter installation',
            url: siteUrl('/storm-shelter'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Backhoe and excavation',
            url: siteUrl('/excavation'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Land clearing',
            url: siteUrl('/services#land-clearing'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Septic system installation',
            url: siteUrl('/services#septic'),
          },
        },
      ],
    },
  }
}

export function serviceJsonLd({
  name,
  description,
  path,
  areaServed,
}: {
  name: string
  description: string
  path: string
  areaServed: string
}): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: siteUrl(path),
    provider: { '@id': `${siteUrl()}#business` },
    areaServed: {
      '@type': areaServed === 'Oklahoma' ? 'State' : 'City',
      name: areaServed,
    },
    brand: BUSINESS.name,
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: siteUrl(item.path),
    })),
  }
}
