import Link from 'next/link'
import BreadcrumbJsonLd from './BreadcrumbJsonLd'
import PageShell from './PageShell'
import SiteImage from './SiteImage'
import { supplements } from '../lib/site-data'
import { media } from '../lib/media'

export function generateMetadata({ params }) {
  const titles = {
    bundles: 'Supplement Bundles | Nexa Rx Shop',
    'subscribe-and-save': 'Subscribe & Save | Nexa Rx Shop',
    'order-support': 'Order Support | Nexa Rx Shop',
  }
  const descriptions = {
    bundles: 'Curated supplement bundles for everyday wellness support.',
    'subscribe-and-save': 'Subscribe and save on Nexa Rx dietary supplements with clear recurring terms.',
    'order-support': 'Order support for Nexa Rx supplement purchases, shipping, and returns.',
  }

  return {
    title: titles[params.slug],
    description: descriptions[params.slug],
    alternates: { canonical: `/supplements/${params.slug}` },
  }
}

const pageCopy = {
  bundles: {
    title: 'Supplement Bundles',
    body: 'Focused bundles tied to clear everyday needs. Each bundle is labeled as a dietary supplement and sold separately from prescription care.',
    image: media.heroProduct,
  },
  'subscribe-and-save': {
    title: 'Subscribe & Save',
    body: 'Save on recurring supplement orders. Subscription frequency, renewal amount, and cancellation method are shown before payment.',
    image: media.packaging,
  },
  'order-support': {
    title: 'Order Support',
    body: 'Questions about supplement orders, shipping, returns, or adverse events? Contact support through the paths shown at checkout.',
    image: media.careJourney,
  },
}

export default function ShopSubPage({ params }) {
  const copy = pageCopy[params.slug]

  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Supplements', path: '/supplements' },
          { name: copy.title, path: `/supplements/${params.slug}` },
        ]}
      />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">Shop</p>
            <h1>{copy.title}</h1>
            <p className="lede">{copy.body}</p>
            <div className="hero__cta">
              <Link href="/supplements" className="btn btn--primary btn--lg">
                Shop Supplements
              </Link>
              <Link href="/supplements/checkout" className="btn btn--outline btn--lg">
                View Details
              </Link>
            </div>
          </div>
          <div className="program-split__media" data-reveal="right">
            <SiteImage
              src={copy.image.src}
              alt={copy.image.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
            />
          </div>
        </section>

        {params.slug === 'bundles' && (
          <section className="container treat-grid">
            {supplements.slice(0, 3).map((item, index) => (
              <article
                key={item.slug}
                className="treat-card"
                data-reveal="up"
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="treat-card__media">
                  <SiteImage
                    src={media.packaging.src}
                    alt={`${item.name} packaging`}
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    quality={70}
                  />
                </div>
                <div className="treat-card__body">
                  <span className="pill">Dietary Supplement Bundle</span>
                  <h3>{item.name} Bundle</h3>
                  <p className="treat-card__desc">{item.description}</p>
                  <p className="treat-card__price">From {item.subscribePrice}/month</p>
                  <p className="treat-card__price-note is-empty">{'\u00A0'}</p>
                  <div className="treat-card__actions">
                    <Link href={`/supplements/${item.slug}`}>View Details</Link>
                    <Link href={`/supplements/checkout?product=${item.slug}`} className="btn btn--primary btn--sm">
                      Checkout
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {params.slug === 'subscribe-and-save' && (
          <section className="container treat-grid">
            {supplements.map((item, index) => (
              <article
                key={item.slug}
                className="treat-card"
                data-reveal="up"
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="treat-card__media">
                  <SiteImage
                    src={media.heroProduct.src}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    quality={70}
                  />
                </div>
                <div className="treat-card__body">
                  <span className="pill">Subscribe &amp; Save</span>
                  <h3>{item.name}</h3>
                  <p className="treat-card__desc">{item.description}</p>
                  <p className="treat-card__price">
                    One-time {item.oneTimePrice} · Subscribe {item.subscribePrice}
                  </p>
                  <p className="treat-card__price-note">{item.renewal}</p>
                  <div className="treat-card__actions">
                    <Link href={`/supplements/${item.slug}`}>View Details</Link>
                    <Link href={`/supplements/checkout?product=${item.slug}`} className="btn btn--primary btn--sm">
                      Checkout
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {params.slug === 'order-support' && (
          <section className="container" data-reveal="up">
            <ul className="check-list">
              <li>Shipping terms and delivery windows are shown before payment.</li>
              <li>Return policy and cancellation method are shown before enrollment or purchase.</li>
              <li>Contact support for product questions and adverse-event reporting.</li>
              <li>Supplement orders remain separate from clinical intake and prescription decisions.</li>
            </ul>
          </section>
        )}
      </main>
    </PageShell>
  )
}
