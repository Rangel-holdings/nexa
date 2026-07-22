import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageShell from '../../../components/PageShell'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'
import SupplementFactsPanel from '../../../components/SupplementFactsPanel'
import SiteImage from '../../../components/SiteImage'
import { supplements, siteUrl } from '../../../lib/site-data'
import { media, supplementImages } from '../../../lib/media'
import { pageMetadata } from '../../../lib/seo'

export function generateStaticParams() {
  return supplements.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }) {
  const product = supplements.find((item) => item.slug === params.slug)
  if (!product) return {}
  const image = supplementImages[product.slug] || media.shopProduct
  return pageMetadata({
    title: `${product.name} | Nexa Rx Supplements`,
    description: `${product.name} dietary supplement details, pricing, and recurring terms.`,
    path: `/supplements/${product.slug}`,
    image: image.src,
  })
}

export default function Page({ params }) {
  const product = supplements.find((item) => item.slug === params.slug)
  if (!product) notFound()

  const image = supplementImages[product.slug] || media.shopProduct

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    category: product.category,
    description: product.description,
    image: `${siteUrl}${image.src}`,
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
          <div className="program-hero-media" data-reveal="up">
            <SiteImage
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 720px"
              quality={74}
            />
          </div>
          <p className="supplements__disclaimer">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended
            to diagnose, treat, cure, or prevent any disease.
          </p>
        </section>

        <section className="container supplement-pdp-grid">
          <article className="pricing-card">
            <div className="pricing-card__header">
              <h2>Pricing &amp; purchase options</h2>
            </div>
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
              <span className="label">Cancellation method</span>
              <span className="value">Cancel anytime in Order Support or before the next renewal date.</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Return policy</span>
              <span className="value">{product.returnPolicy}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Shipping terms</span>
              <span className="value">{product.shippingTerms}</span>
            </div>
            <div className="pricing-card__footer">
              <Link href={`/supplements/checkout?product=${product.slug}`} className="btn btn--primary btn--lg">
                Continue to Checkout
              </Link>
            </div>
          </article>

          <article className="pricing-card">
            <div className="pricing-card__header">
              <h2>Product information</h2>
            </div>
            <SupplementFactsPanel product={product} />
            <div className="pricing-card__row">
              <span className="label">Directions</span>
              <span className="value">{product.directions}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Warnings</span>
              <span className="value">{product.warnings}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Allergens</span>
              <span className="value">{product.allergens}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Storage</span>
              <span className="value">{product.storage}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Age restriction</span>
              <span className="value">{product.ageRestriction}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Manufacturer</span>
              <span className="value">
                {product.manufacturer.name}, {product.manufacturer.address}
              </span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Distributor</span>
              <span className="value">
                {product.distributor.name}, {product.distributor.address}
              </span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Product questions</span>
              <span className="value">{product.contact.questions}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Adverse event reporting</span>
              <span className="value">
                {product.contact.adverseEvents} · {product.contact.phone}
              </span>
            </div>
          </article>
        </section>
      </main>
    </PageShell>
  )
}
