import { siteUrl } from '../lib/site-data'

export default function sitemap() {
  const routes = [
    '/',
    '/medical-weight-loss',
    '/mens-hormone-health',
    '/womens-hormone-health',
    '/peptide-therapy',
    '/how-it-works',
    '/pricing',
    '/quality-and-safety',
    '/medical-team',
    '/supplements',
    '/supplements/bundles',
    '/supplements/subscribe-and-save',
    '/supplements/order-support',
    '/faq',
    '/patient-login',
    '/check-eligibility',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
