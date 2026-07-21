import PageShell from '../../../components/PageShell'
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd'

export const metadata = {
  title: 'Supplements Checkout | Nexa Rx',
  description: 'Mock checkout flow for Nexa Rx supplements with recurring billing disclosures.',
  alternates: { canonical: '/supplements/checkout' },
}

export default function Page() {
  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Supplements', path: '/supplements' },
          { name: 'Checkout', path: '/supplements/checkout' },
        ]}
      />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">Checkout (Mock)</p>
          <h1>Review recurring terms before purchase.</h1>
          <p className="lede">
            This demo checkout shows one-time price, subscription price, renewal frequency, cancellation method,
            return policy, and shipping terms before payment.
          </p>
        </section>
        <section className="container pricing-grid">
          <article className="pricing-card">
            <div className="pricing-card__row">
              <span className="label">One-time purchase</span>
              <span className="value">Displayed per product before payment</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Subscription price</span>
              <span className="value">Displayed per product before payment</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Renewal frequency</span>
              <span className="value">Every 30 days unless changed at checkout</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Cancellation method</span>
              <span className="value">Cancel from account settings or support prior to renewal</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Return and shipping terms</span>
              <span className="value">Policies shown before order placement</span>
            </div>
          </article>
        </section>
      </main>
    </PageShell>
  )
}
