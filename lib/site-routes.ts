/** Canonical public paths. Keep in sync with app page.tsx files. Never include redirects or 404s. */
export const PUBLIC_ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/excavation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/storm-shelter', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/financing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/okc/backhoe-service', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/bartlesville/backhoe-excavation', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/elk-city/backhoe-service', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blanchard/storm-shelter-installation', changeFrequency: 'monthly', priority: 0.7 },
] as const

export const RETIRED_PATHS = [
  '/bookonline',
  '/book-online',
] as const
