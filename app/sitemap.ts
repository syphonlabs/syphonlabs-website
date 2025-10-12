import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000'

const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/draft',
  '/recruiter',
  '/contact',
  '/careers',
  '/how-it-works',
  '/demo',
  '/trial',
  '/explorer',
  '/draft-demo',
]

const blogSlugs = [
  'ai-powered-file-management',
  'how-ai-is-transforming-workplace-productivity',
  'smart-file-organization-beyond-traditional-folders',
  'the-future-of-developer-tools-with-ai',
  'the-rise-of-contextual-ai-in-software',
  'building-scalable-ai-solutions-lessons-learned',
  'ai-trends-to-watch-in-2025',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: route === '/' ? 1 : 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]

  return pages
}


