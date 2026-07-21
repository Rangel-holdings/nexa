import Link from 'next/link'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PageShell from '../../components/PageShell'
import PricingGrid from '../../components/PricingGrid'
import SiteImage from '../../components/SiteImage'
import { media } from '../../lib/media'

export const metadata = {
  title: 'Pricing | Nexa Rx',
  description: 'Transparent pricing for every Nexa Rx program, including recurring terms, labs, support, and limitations.',
  alternates: { canonical: '/pricing' },
}

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }]} />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">Clear Pricing</p>
            <h1>Understand your program costs.</h1>
            <p className="lede">
              Transparent pricing with clear inclusions before enrollment. Review charges, recurring terms, and
              limitations for each care program.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary btn--lg" href="/check-eligibility">
                Check Eligibility
              </Link>
              <Link className="btn btn--outline btn--lg" href="/#treatments">
                View Treatments
              </Link>
            </div>
          </div>
          <div className="program-split__media">
            <SiteImage
              src={media.careStarts.src}
              alt={media.careStarts.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
        </section>
        <PricingGrid />
        <p className="container hero__stats-note" style={{ marginTop: '1.25rem', marginBottom: '2rem' }}>
          *Peptide therapy pricing is confirmed before enrollment based on prescribed therapy, dosage, pharmacy,
          shipping, and state. Prescription treatment is not guaranteed.
        </p>
      </main>
    </PageShell>
  )
}
