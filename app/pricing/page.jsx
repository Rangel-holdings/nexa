import Link from 'next/link'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PageShell from '../../components/PageShell'

export const metadata = {
  title: 'Pricing | Nexa Rx',
  description: 'Transparent pricing for every Nexa Rx program, including recurring terms, labs, support, and limitations.',
  alternates: { canonical: '/pricing' },
}

const cards = [
  {
    title: 'Weight Management Program',
    rows: [
      ['Charge due today', '$0'],
      ['Recurring amount and billing frequency', 'Starts at $249/month (program dependent)'],
      ['Consultation fee', '$49 if not eligible; disclosed before submission'],
      ['Medication cost and dosage impact', 'Included by program tier; final details shown before enrollment'],
      ['Lab cost and frequency', 'Shown before enrollment when required'],
      ['Supplies and shipping', 'Included; discreet delivery'],
      ['Follow-up visits and messaging', 'Included in active care program'],
      ['Cancellation', 'Cancel before next billing cycle'],
      ['State/pharmacy/product/eligibility limitations', 'Availability varies by state and treatment'],
    ],
  },
  {
    title: 'Men’s Hormone Health',
    rows: [
      ['Charge due today', '$0'],
      ['Recurring amount and billing frequency', 'Starts at $179/month'],
      ['Consultation fee', '$49 if not eligible; disclosed before submission'],
      ['Medication cost and dosage impact', 'Shown before enrollment'],
      ['Lab cost and frequency', 'Required where clinically indicated'],
      ['Supplies and shipping', 'Included'],
      ['Follow-up visits and messaging', 'Included in active care program'],
      ['Cancellation', 'Cancel before next billing cycle'],
      ['State/pharmacy/product/eligibility limitations', 'Availability varies by state and treatment'],
    ],
  },
]

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }]} />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">Clear Pricing</p>
          <h1>Understand your program costs.</h1>
          <p className="lede">All charges and recurring terms are shown before enrollment.</p>
        </section>
        <section className="container pricing-grid">
          {cards.map((card) => (
            <article key={card.title} className="pricing-card">
              <div className="pricing-card__header">
                <h2>{card.title}</h2>
              </div>
              {card.rows.map((row) => (
                <div className="pricing-card__row" key={row[0]}>
                  <span className="label">{row[0]}</span>
                  <span className="value">{row[1]}</span>
                </div>
              ))}
              <div className="pricing-card__footer">
                <Link href="/check-eligibility" className="btn btn--primary btn--lg">
                  Check Eligibility
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  )
}
