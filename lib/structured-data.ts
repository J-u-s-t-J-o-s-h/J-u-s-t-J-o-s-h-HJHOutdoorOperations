import { BUSINESS, primaryPhone } from '@/lib/business'
import { getSiteUrl } from '@/lib/site-url'

function absoluteUrl(path = '/'): string {
  return new URL(path, `${getSiteUrl()}/`).toString()
}

export function organizationGraph() {
  const phone = primaryPhone()
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${siteUrl}/#business`,
        name: BUSINESS.legalName,
        alternateName: [...BUSINESS.alternateNames],
        description: BUSINESS.description,
        url: siteUrl,
        image: absoluteUrl(BUSINESS.ogImagePath),
        telephone: phone.tel,
        email: BUSINESS.email,
        areaServed: [
          {
            '@type': 'State',
            name: 'Oklahoma',
          },
          ...BUSINESS.serviceCities.map((city) => ({
            '@type': 'City',
            name: city,
            containedInPlace: {
              '@type': 'State',
              name: 'Oklahoma',
            },
          })),
        ],
        openingHoursSpecification: BUSINESS.hours.map((block) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: block.days,
          opens: block.opens,
          closes: block.closes,
        })),
        sameAs: [BUSINESS.social.facebook],
        knowsAbout: BUSINESS.services.map((service) => service.name),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Outdoor construction and site services',
          itemListElement: BUSINESS.services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              url: absoluteUrl(service.path.split('#')[0]),
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: BUSINESS.legalName,
        alternateName: BUSINESS.alternateNames,
        description: BUSINESS.description,
        publisher: {
          '@id': `${siteUrl}/#business`,
        },
        inLanguage: 'en-US',
      },
    ],
  }
}

export function breadcrumbList(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqPageSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function servicePageSchema(input: {
  name: string
  description: string
  path: string
}) {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      '@id': `${siteUrl}/#business`,
    },
    areaServed: {
      '@type': 'State',
      name: 'Oklahoma',
    },
  }
}
