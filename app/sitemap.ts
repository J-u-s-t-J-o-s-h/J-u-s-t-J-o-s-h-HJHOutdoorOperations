import type { MetadataRoute } from 'next'
import { PUBLIC_ROUTES } from '@/lib/site-routes'
import { getSiteUrl } from '@/lib/site-url'

const baseUrl = new URL(getSiteUrl())

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: new URL(route.path === '/' ? '/' : route.path, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
