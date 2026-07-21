import Link from 'next/link'
import PageShell from './PageShell'
import BreadcrumbJsonLd from './BreadcrumbJsonLd'

export default function ProgramPage({ program }) {
  const isPeptide = program.slug === 'peptide-therapy'

  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Treatments', path: '/medical-weight-loss' },
          { name: program.navLabel, path: `/${program.slug}` },
        ]}
      />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">{program.category}</p>
          <h1>{program.title}</h1>
          <p className="lede">{program.description}</p>
          <p className="treat-card__price">{program.price}</p>
          {program.priceNote && <p className="treat-card__price-note">{program.priceNote}</p>}
          <p className="hero__disclosure">
            Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed
            clinician. Availability varies by state and treatment.
          </p>
          <div className="hero__cta">
            <Link className="btn btn--primary btn--lg" href="/check-eligibility">
              Check Eligibility
            </Link>
            <Link className="btn btn--outline btn--lg" href="/pricing">
              View Pricing
            </Link>
          </div>
        </section>

        <section className="container">
          <ul className="check-list">
            {program.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {isPeptide && (
            <p className="quality__supplement-note">
              Nexa Rx offers prescription therapies for eligible patients and does not sell research-use-only products.
              Compounded medications are not FDA-approved as finished branded products.
            </p>
          )}
        </section>
      </main>
    </PageShell>
  )
}
