import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageShell from '../../../components/PageShell'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'
import SiteImage from '../../../components/SiteImage'
import { supplements, siteUrl } from '../../../lib/site-data'
import { media } from '../../../lib/media'

export function generateStaticParams() {
  return supplements.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }) {
  const product = supplements.find((item) => item.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} | Nexa Rx Supplements`,
    description: `${product.name} dietary supplement details, pricing, and recurring terms.`,
    alternates: { canonical: `/supplements/${product.slug}` },
  }
}

export default function Page({ params }) {
  const product = supplements.find((item) => item.slug === params.slug)
  if (!product) notFound()

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    category: product.category,
    description: product.description,
    image: `${siteUrl}${media.packaging.src}`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: product.subscribePrice.replace('$', ''),
      highPrice: product.oneTimePrice.replace('$', ''),
      offerCount: 2,
      url: `${siteUrl}/supplements/${product.slug}`,
    },
  }

  return (
    <PageShell stickyMode="shop">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Supplements', path: '/supplements' },
          { name: product.name, path: `/supplements/${product.slug}` },
        ]}
      />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">Dietary Supplement</p>
          <h1>{product.name}</h1>
          <p className="lede">{product.description}</p>
          <div className="program-hero-media">
            <SiteImage
              src={media.packaging.src}
              alt={`${product.name} packaging`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          <p className="supplements__disclaimer">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended
            to diagnose, treat, cure, or prevent any disease.
          </p>
        </section>
        <section className="container pricing-grid">
          <article className="pricing-card">
            <div className="pricing-card__row">
              <span className="label">One-time price</span>
              <span className="value">{product.oneTimePrice}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Subscription price</span>
              <span className="value">{product.subscribePrice}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Renewal frequency</span>
              <span className="value">{product.renewal}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Supplement facts</span>
              <span className="value">{product.facts.join(' · ')}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Cancellation method</span>
              <span className="value">Cancel anytime in Order Support or before the next renewal date.</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Purchase options</span>
              <span className="value">One-time purchase or Subscribe &amp; Save available before payment.</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Warnings and allergens</span>
              <span className="value">Shown on label and final checkout before payment.</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Manufacturer/distributor</span>
              <span className="value">Nexa Rx partner manufacturer details shown on product label.</span>
            </div>
            <div className="pricing-card__footer">
              <Link href={`/supplements/checkout?product=${product.slug}`} className="btn btn--primary btn--lg">
                Continue to Checkout
              </Link>
            </div>
          </article>
        </section>
      </main>
    </PageShell>
  )
}
