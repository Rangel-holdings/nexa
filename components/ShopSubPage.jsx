import Link from 'next/link'
import BreadcrumbJsonLd from './BreadcrumbJsonLd'
import PageShell from './PageShell'
import { supplements } from '../lib/site-data'

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
  },
  'subscribe-and-save': {
    title: 'Subscribe & Save',
    body: 'Save on recurring supplement orders. Subscription frequency, renewal amount, and cancellation method are shown before payment.',
  },
  'order-support': {
    title: 'Order Support',
    body: 'Questions about supplement orders, shipping, returns, or adverse events? Contact support through the paths shown at checkout.',
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
        <section className="container pricing-page__hero">
          <p className="eyebrow">Shop</p>
          <h1>{copy.title}</h1>
          <p className="lede">{copy.body}</p>
        </section>
        {params.slug === 'bundles' && (
          <section className="container treat-grid">
            {supplements.slice(0, 3).map((item) => (
              <article key={item.slug} className="treat-card">
                <div className="treat-card__body">
                  <span className="pill">Dietary Supplement Bundle</span>
                  <h3>{item.name} Bundle</h3>
                  <p>{item.description}</p>
                  <p className="treat-card__price">From {item.subscribePrice}/month</p>
                  <div className="treat-card__actions">
                    <Link href={`/supplements/${item.slug}`}>View Details</Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
        {params.slug === 'subscribe-and-save' && (
          <section className="container pricing-grid">
            {supplements.map((item) => (
              <article key={item.slug} className="pricing-card">
                <div className="pricing-card__header">
                  <h2>{item.name}</h2>
                </div>
                <div className="pricing-card__row">
                  <span className="label">One-time price</span>
                  <span className="value">{item.oneTimePrice}</span>
                </div>
                <div className="pricing-card__row">
                  <span className="label">Subscribe price</span>
                  <span className="value">{item.subscribePrice}</span>
                </div>
                <div className="pricing-card__row">
                  <span className="label">Renewal frequency</span>
                  <span className="value">{item.renewal}</span>
                </div>
                <div className="pricing-card__footer">
                  <Link href={`/supplements/checkout?product=${item.slug}`} className="btn btn--primary btn--lg">
                    Checkout
                  </Link>
                </div>
              </article>
            ))}
          </section>
        )}
        {params.slug === 'order-support' && (
          <section className="container">
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
