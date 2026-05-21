import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

const baseUrl = new URL(getSiteUrl())

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/projects', '/contact', '/storm-shelter', '/financing']

  return routes.map((route) => ({
    url: new URL(route || '/', baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
