import Link from 'next/link'
import PageShell from '../components/PageShell'
import FaqAccordion from '../components/FaqAccordion'
import { careSteps, programs } from '../lib/site-data'

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
              <ul className="hero__stats">
                <li>
                  <strong>2 min</strong>
                  <span>Eligibility check</span>
                </li>
                <li>
                  <strong>Within 24h*</strong>
                  <span>Typical clinical review</span>
                </li>
                <li>
                  <strong>No insurance</strong>
                  <span>Simple self-pay care.</span>
                </li>
              </ul>
              <p className="hero__stats-note">*Timing not guaranteed. Availability varies by state and treatment.</p>
            </div>

            <div className="hero__visual">
              <article className="hero-card">
                <div className="hero-card__body">
                  <span className="pill">Featured Program</span>
                  <p className="hero-card__cat">Medical Weight Loss</p>
                  <h2>Clinician-Guided Weight Management</h2>
                  <p>Personalized treatment options, ongoing clinical support, and discreet delivery.</p>
                  <div className="hero-card__actions">
                    <Link href="/medical-weight-loss">View Details</Link>
                    <Link href="/check-eligibility" className="btn btn--primary btn--sm">
                      Check Eligibility
                    </Link>
                  </div>
                </div>
              </article>
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
            <div className="proof__metrics">
              <div>
                <strong>Medical Weight Loss</strong>
                <span>Clinician-guided weight management</span>
              </div>
              <div>
                <strong>Men&rsquo;s Hormone Health</strong>
                <span>Testosterone evaluation &amp; care</span>
              </div>
              <div>
                <strong>Women&rsquo;s Hormone Health</strong>
                <span>Menopause &amp; hormone care</span>
              </div>
              <div>
                <strong>Peptide Therapy</strong>
                <span>Clinician-prescribed prescription therapy</span>
              </div>
            </div>
          </div>
        </section>

        <section id="treatments" className="section treatments">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">PERSONALIZED CARE PROGRAMS</p>
              <h2>Explore care programs</h2>
              <p className="section__sub">Ongoing clinical support. Clear pricing before enrollment.</p>
            </div>
            <div className="treat-grid">
              {programs.map((program) => {
                const isPeptide = program.slug === 'peptide-therapy'
                return (
                  <article key={program.slug} className="treat-card">
                    <div className="treat-card__body">
                      <span className="pill">{isPeptide ? 'PRESCRIPTION THERAPY' : 'Care Program'}</span>
                      <p className="treat-card__cat">{program.category}</p>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                      <p className="treat-card__price">{program.price}</p>
                      {program.priceNote && <p className="treat-card__price-note">{program.priceNote}</p>}
                      <div className="treat-card__actions">
                        <Link href={`/${program.slug}`}>
                          {isPeptide ? 'View Peptide Therapy' : 'View Details'}
                        </Link>
                        <Link href="/check-eligibility" className="btn btn--primary btn--sm">
                          Check Eligibility
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="supplements" id="shop">
          <div className="container supplements__inner">
            <p className="eyebrow">NON-PRESCRIPTION SUPPORT</p>
            <h2>Support your health between visits.</h2>
            <p className="lede">
              Shop a focused collection of dietary supplements for everyday wellness. No prescription required.
            </p>
            <Link href="/supplements" className="btn btn--primary btn--lg">
              Shop Supplements
            </Link>
            <p className="supplements__disclaimer">
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended
              to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </section>

        <section className="section quality">
          <div className="container quality__grid">
            <div>
              <p className="eyebrow">Quality &amp; Safety</p>
              <h2>Clear standards for every part of care.</h2>
              <p className="lede">
                Nexa Rx connects patients with licensed clinicians and qualified U.S. pharmacy partners, and we explain
                pricing and next steps before enrollment.
              </p>
              <ul className="check-list">
                <li>Prescriptions sent to appropriately licensed U.S. pharmacies</li>
                <li>Sterility standards (USP-aligned pharmacy partners)</li>
                <li>Endotoxin screening where applicable</li>
                <li>Medical intake collected in secure clinical portal only</li>
              </ul>
              <p className="quality__supplement-note">
                Dietary supplements are non-prescription products and are sold separately from medical treatment. Product
                claims, ingredients, directions, warnings, and recurring terms are shown on each product page.
              </p>
            </div>
            <div className="stat-grid">
              <div className="stat-card">
                <strong>2 min</strong>
                <span>To complete eligibility check</span>
              </div>
              <div className="stat-card">
                <strong>Within 24h</strong>
                <span>Typical clinical review*</span>
              </div>
              <div className="stat-card">
                <strong>U.S.</strong>
                <span>Licensed pharmacy partners</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section how">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="eyebrow">How It Works</p>
              <h2>Your care path, step by step.</h2>
              <p className="section__sub">Transparent process. Clinical decisions made by licensed clinicians.</p>
              <Link href="/check-eligibility" className="btn btn--primary">
                Check Eligibility
              </Link>
            </div>
            <div className="steps">
              {careSteps.map((step) => (
                <article key={step.n} className="step">
                  <span className="step__n">Step {step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="start-now">
          <div className="container start-now__grid">
            <div className="start-now__copy">
              <h2>
                Your care.<br />
                <em>Starts now.</em>
              </h2>
              <hr className="start-now__rule" />
              <p>
                Connect with a licensed clinician and see your options and costs before treatment begins. No insurance
                required.
              </p>
              <Link href="/check-eligibility" className="btn btn--primary btn--lg btn--square">
                Check Eligibility <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <FaqAccordion />

        <section className="cta">
          <div className="container cta__inner">
            <p className="eyebrow eyebrow--teal">Your health, prioritized.</p>
            <h2>Ready when you are.</h2>
            <p>
              Start with a short eligibility check. A licensed clinician reviews your case — typically within 24
              hours.*
            </p>
            <div className="cta__actions">
              <Link href="/check-eligibility" className="btn btn--primary btn--lg">
                Check Eligibility
              </Link>
              <Link href="/how-it-works" className="btn btn--on-dark btn--lg">
                How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
