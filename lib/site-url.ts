const PRODUCTION_SITE_URL = 'https://www.hjhoutdoorops.com'

function normalizeSiteUrl(value: string): string {
  const trimmed = value.trim()

  if (!trimmed) {
    return PRODUCTION_SITE_URL
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed.replace(/\/+$/, '')
  }

  return `https://${trimmed}`.replace(/\/+$/, '')
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_SITE_URL)
}
