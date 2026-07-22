import Link from 'next/link'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PageShell from '../../components/PageShell'
import PricingGrid from '../../components/PricingGrid'
import MediaFrame from '../../components/MediaFrame'
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
          <MediaFrame
            src={media.pricingHero.src}
            alt={media.pricingHero.alt}
            priority
            caption="Clear costs before enrollment"
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
            reveal="right"
          />
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
