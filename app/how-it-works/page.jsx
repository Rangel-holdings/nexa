import Link from 'next/link'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PageShell from '../../components/PageShell'
import SiteImage from '../../components/SiteImage'
import { careSteps } from '../../lib/site-data'
import { media } from '../../lib/media'

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
          <div className="how__visual" style={{ marginTop: '1.5rem' }}>
            <SiteImage
              src={media.careJourney.src}
              alt={media.careJourney.alt}
              width={media.careJourney.width}
              height={media.careJourney.height}
              priority
              sizes="(max-width: 880px) 100vw, 880px"
            />
          </div>
          <Link href="/check-eligibility" className="btn btn--primary" style={{ marginTop: '1.25rem' }}>
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
