import Link from 'next/link'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PageShell from '../../components/PageShell'
import { careSteps } from '../../lib/site-data'

export const metadata = {
  title: 'How It Works | Nexa Rx',
  description: 'See the six-step Nexa Rx care path from eligibility to pharmacy fulfillment and ongoing support.',
  alternates: { canonical: '/how-it-works' },
}

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
            {careSteps.map((step) => (
              <article key={step.n} className="step">
                <span className="step__n">Step {step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
