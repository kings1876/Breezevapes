import { SITE, CATEGORIES, PRODUCTS, POSTS } from '@/config/site'

export default function sitemap() {
  const now = new Date()
  const staticRoutes = [
    '',
    'shop',
    'blog',
    'about',
    'contact',
    'faq',
    'order',
    'search',
    'shipping',
    'refund',
    'privacy',
    'terms',
  ].map((route) => ({
    url: `${SITE.url}/${route}${route ? '/' : ''}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))

  const categoryRoutes = CATEGORIES.map((c) => ({
    url: `${SITE.url}/shop/${c.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${SITE.url}/product/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const postRoutes = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}/`,
    lastModified: p.date,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...postRoutes]
}
