import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import MediaFrame from '../../components/MediaFrame'
import { media } from '../../lib/media'

export const metadata = {
  title: 'Medical Team | Nexa Rx',
  description: 'Meet the licensed clinical team and understand how medical decisions are made at Nexa Rx.',
  alternates: { canonical: '/medical-team' },
}

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Medical Team', path: '/medical-team' }]} />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">Medical Team</p>
            <h1>Licensed clinicians, patient-first standards.</h1>
            <p className="lede">
              Nexa Rx connects eligible adults with licensed clinicians who evaluate symptoms, history, and labs when
              required before making treatment decisions.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary btn--lg" href="/check-eligibility">
                Check Eligibility
              </Link>
              <Link className="btn btn--outline btn--lg" href="/how-it-works">
                View Details
              </Link>
            </div>
          </div>
          <MediaFrame
            src={media.medicalTeamHero.src}
            alt={media.medicalTeamHero.alt}
            priority
            caption="Licensed clinical care"
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
            reveal="right"
          />
        </section>

        <section className="container proof__metrics" style={{ marginTop: '2rem' }}>
          <div>
            <strong>Clinical leadership</strong>
            <span>Licensed clinician oversight for evaluation and care decisions.</span>
          </div>
          <div>
            <strong>Licensure &amp; state rules</strong>
            <span>Care availability varies by clinician licensure and state law.</span>
          </div>
          <div>
            <strong>Evidence-led decisions</strong>
            <span>Prescription treatment is never guaranteed and is based on evaluation.</span>
          </div>
          <div>
            <strong>Ongoing support</strong>
            <span>Follow-up cadence, messaging, and refill support are program-specific.</span>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
