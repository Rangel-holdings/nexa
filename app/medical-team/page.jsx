import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import MediaFrame from '../../components/MediaFrame'
import { medicalTeamRoles } from '../../lib/site-data'
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
                How It Works
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

        <section className="container program-detail-grid">
          {medicalTeamRoles.map((role) => (
            <article key={role.title} className="program-detail-card">
              <h2>{role.title}</h2>
              <p>{role.text}</p>
            </article>
          ))}
        </section>

        <section className="container quality__supplement-note" style={{ marginTop: '2rem' }}>
          <p>
            Prescription treatment is not guaranteed. Eligibility and treatment decisions are made solely by a licensed
            clinician based on your medical evaluation. Nexa Rx is a care platform — not a pharmacy.
          </p>
        </section>
      </main>
    </PageShell>
  )
}
