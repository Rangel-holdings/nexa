import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import Link from 'next/link'

export const metadata = {
  title: 'How It Works | Nexa Rx',
  description: 'See the six-step Nexa Rx care path from eligibility to pharmacy fulfillment and ongoing support.',
  alternates: { canonical: '/how-it-works' },
}

const steps = [
  'Choose a care program — Select medical weight management, men’s hormone health, women’s hormone health, or peptide therapy.',
  'Complete secure intake — Provide medical information inside the secure clinical portal, not on the public marketing site.',
  'Meet a licensed clinician — The clinician reviews medical history, symptoms, labs when required, and treatment eligibility.',
  'Receive a clinical decision — A prescription is issued only when medically appropriate. Treatment is not guaranteed.',
  'Pharmacy fulfillment — When prescribed, medication is dispensed by the applicable licensed pharmacy and shipped where legally available.',
  'Ongoing care — Follow-up, messaging, refill support, and lab cadence are included by program.',
]

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'How It Works', path: '/how-it-works' }]} />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">How It Works</p>
          <h1>Your care path, step by step.</h1>
          <p className="lede">Transparent process. Clinical decisions made by licensed clinicians.</p>
          <Link href="/check-eligibility" className="btn btn--primary">
            Check Eligibility
          </Link>
        </section>
        <section className="container">
          <div className="steps">
            {steps.map((text, idx) => (
              <article key={text} className="step">
                <span className="step__n">Step {String(idx + 1).padStart(2, '0')}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
