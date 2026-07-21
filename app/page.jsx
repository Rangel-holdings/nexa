import Link from 'next/link'
import PageShell from '../components/PageShell'
import { programs } from '../lib/site-data'

export default function HomePage() {
  return (
    <PageShell stickyMode="eligibility">
      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">PERSONALIZED CARE. CLINICIAN-GUIDED OPTIONS.</p>
              <h1>
                Your care.<br />
                <em>Your way.</em>
              </h1>
              <p className="lede">
                Connect online with a licensed clinician for medical weight management, hormone health, and select
                prescription therapies. See your options and costs before treatment begins.
              </p>
              <div className="hero__cta">
                <Link href="/check-eligibility" className="btn btn--primary btn--lg">
                  Check Eligibility
                </Link>
                <Link href="/medical-weight-loss" className="btn btn--outline btn--lg">
                  View Treatments
                </Link>
              </div>
              <p className="hero__disclosure">
                Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed
                clinician. Availability varies by state and treatment.
              </p>
            </div>
          </div>
        </section>

        <section className="proof">
          <div className="container proof__inner">
            <h2>
              Modern care should be <em>personal, clear, and clinically guided.</em>
            </h2>
            <p>
              Nexa Rx connects eligible adults with licensed clinicians for medical weight management, hormone health,
              and select prescription therapies—with transparent pricing and ongoing support.
            </p>
          </div>
        </section>

        <section className="section treatments">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">PERSONALIZED CARE PROGRAMS</p>
              <h2>Explore care programs</h2>
              <p className="section__sub">Ongoing clinical support. Clear pricing before enrollment.</p>
            </div>
            <div className="treat-grid">
              {programs.map((program) => (
                <article key={program.slug} className="treat-card">
                  <div className="treat-card__body">
                    <span className="pill">{program.slug === 'peptide-therapy' ? 'PRESCRIPTION THERAPY' : 'Care Program'}</span>
                    <p className="treat-card__cat">{program.category}</p>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <p className="treat-card__price">{program.price}</p>
                    <div className="treat-card__actions">
                      <Link href={`/${program.slug}`}>{program.slug === 'peptide-therapy' ? 'View Peptide Therapy' : 'View Details'}</Link>
                      <Link href="/check-eligibility" className="btn btn--primary btn--sm">
                        Check Eligibility
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="supplements">
          <div className="container supplements__inner">
            <p className="eyebrow">NON-PRESCRIPTION SUPPORT</p>
            <h2>Support your health between visits.</h2>
            <p className="lede">Shop a focused collection of dietary supplements for everyday wellness. No prescription required.</p>
            <Link href="/supplements" className="btn btn--primary btn--lg">
              Shop Supplements
            </Link>
            <p className="supplements__disclaimer">
              These statements have not been evaluated by the Food and Drug Administration. This product is not
              intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
