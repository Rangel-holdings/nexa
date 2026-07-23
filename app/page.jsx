import Link from 'next/link'
import PageShell from '../components/PageShell'
import FaqAccordion from '../components/FaqAccordion'
import HomeHero from '../components/HomeHero'
import SiteImage from '../components/SiteImage'
import MediaFrame from '../components/MediaFrame'
import { careSteps, programs } from '../lib/site-data'
import { media, programImages } from '../lib/media'
import { pageMetadata } from '../lib/seo'

export const metadata = pageMetadata({
  title: 'Nexa Rx | Personalized Telehealth Care',
  description:
    'Connect online with licensed clinicians for medical weight management, hormone health, and select prescription therapies. Availability varies by state.',
  path: '/',
})

export default function HomePage() {
  return (
    <PageShell stickyMode="eligibility" headerVariant="home">
      <main>
        <HomeHero />

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
              {programs.map((program, index) => {
                const isPeptide = program.slug === 'peptide-therapy'
                const image = programImages[program.slug]
                return (
                  <article
                    key={program.slug}
                    className="treat-card"
                    data-reveal="up"
                    data-product-card="true"
                    data-product-slug={program.slug}
                    data-product-name={program.title}
                    data-product-price={program.price}
                    data-product-image={image?.src || ''}
                    data-product-alt={image?.alt || program.title}
                    data-product-checkout="/check-eligibility"
                    data-product-details={`/${program.slug}`}
                    style={{ '--delay': `${index * 70}ms` }}
                  >
                    {image && (
                      <div className="treat-card__media">
                        <SiteImage
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                          quality={70}
                        />
                      </div>
                    )}
                    <div className="treat-card__body">
                      <span className="pill">Care Program</span>
                      <p className="treat-card__cat">{program.category}</p>
                      <h3>{program.title}</h3>
                      <p className="treat-card__desc">{program.description}</p>
                      <p className="treat-card__price">{program.price}</p>
                      <p className={`treat-card__price-note ${program.priceSubline ? '' : 'is-empty'}`}>
                        {program.priceSubline || program.priceNote || '\u00A0'}
                      </p>
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
          <div className="container supplements__grid">
            <div className="supplements__media" data-reveal="left">
              <MediaFrame
                src={media.heroProduct.src}
                alt={media.heroProduct.alt}
                ratio="1 / 1"
                caption="Non-prescription support"
                sizes="(max-width: 768px) 100vw, 480px"
                className="media-frame--flush"
              />
            </div>
            <div className="supplements__inner">
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
                <li>Pricing and recurring terms shown before enrollment</li>
                <li>Medical intake collected in a secure clinical portal only</li>
                <li>Dietary supplements sold separately from prescription care</li>
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
              <div className="stat-card stat-card--brand">
                <SiteImage
                  src={media.packaging.src}
                  alt={media.packaging.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  quality={70}
                />
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
            <div className="how__visual" data-reveal="up">
              <MediaFrame
                src={media.careJourney.src}
                alt={media.careJourney.alt}
                ratio="16 / 9"
                caption="Your care path"
                sizes="(max-width: 880px) 100vw, 880px"
                className="media-frame--flush"
              />
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
            <div className="start-now__media" data-reveal="left">
              <MediaFrame
                src={media.careStarts.src}
                alt={media.careStarts.alt}
                ratio="16 / 10"
                caption="Care starts with clarity"
                sizes="(max-width: 768px) 100vw, 520px"
                className="media-frame--flush"
              />
            </div>
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

        <section className="brand-band">
          <div className="container brand-band__grid">
            <div>
              <p className="eyebrow eyebrow--teal">Care that connects.</p>
              <h2>Personal, clear, and clinically guided.</h2>
              <p>
                Licensed clinicians, transparent pricing, and qualified U.S. pharmacy fulfillment — so you can
                understand your options before treatment begins.
              </p>
              <div className="brand-actions">
                <Link href="/check-eligibility" className="brand-action">
                  <span>→</span> Check Eligibility
                </Link>
                <Link href="/#treatments" className="brand-action">
                  <span>→</span> View Treatments
                </Link>
              </div>
            </div>
            <div className="brand-band__visual" data-reveal="right">
              <MediaFrame
                src={media.brandLifestyle.src}
                alt={media.brandLifestyle.alt}
                tone="dark"
                caption="Clinically guided care"
                sizes="(max-width: 768px) 100vw, 520px"
                className="media-frame--flush"
              />
            </div>
          </div>
        </section>

        <section className="section shop-home">
          <div className="container start-now__grid">
            <div className="start-now__copy">
              <p className="eyebrow">NON-PRESCRIPTION SUPPORT</p>
              <h2>Support your health between visits.</h2>
              <hr className="start-now__rule" />
              <p>Shop a focused collection of dietary supplements for everyday wellness. No prescription required.</p>
              <Link href="/supplements" className="btn btn--primary btn--lg btn--square">
                Shop Supplements <span aria-hidden="true">→</span>
              </Link>
              <p className="supplements__disclaimer" style={{ marginTop: '1.5rem' }}>
                These statements have not been evaluated by the Food and Drug Administration. This product is not
                intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
            <div className="start-now__media" data-reveal="right">
              <MediaFrame
                src={media.shopProduct.src}
                alt="Dietary supplements collection"
                ratio="16 / 10"
                sizes="(max-width: 768px) 100vw, 520px"
                className="media-frame--flush"
              />
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
              <Link href="/#treatments" className="btn btn--on-dark btn--lg">
                View Treatments
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
