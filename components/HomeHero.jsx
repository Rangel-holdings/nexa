import Link from 'next/link'
import SiteImage from './SiteImage'
import { media } from '../lib/media'

export default function HomeHero() {
  return (
    <section className="hero hero--home">
      <div className="hero--home__backdrop" aria-hidden="true" />
      <div className="container hero__shell">
        <div className="hero__copy">
          <p className="eyebrow hero-anim" style={{ '--hero-delay': '0ms' }}>
            PERSONALIZED CARE. CLINICIAN-GUIDED OPTIONS.
          </p>
          <h1 className="hero-anim" style={{ '--hero-delay': '80ms' }}>
            Your care.
            <br />
            <em>Your way.</em>
          </h1>
          <p className="lede hero-anim" style={{ '--hero-delay': '150ms' }}>
            Connect online with a licensed clinician for medical weight management, hormone health, and select
            prescription therapies. See your options and costs before treatment begins.
          </p>
          <div className="hero__cta hero-anim" style={{ '--hero-delay': '220ms' }}>
            <Link href="/check-eligibility" className="btn btn--primary btn--lg btn--lift">
              Check Eligibility
            </Link>
            <Link href="/#treatments" className="btn btn--outline btn--lg btn--lift">
              View Treatments
            </Link>
          </div>
          <p className="hero__disclosure hero-anim" style={{ '--hero-delay': '280ms' }}>
            Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed
            clinician. Availability varies by state and treatment.
          </p>
          <ul className="hero__stats hero-anim" style={{ '--hero-delay': '340ms' }}>
            <li>
              <strong>2 min</strong>
              <span>Eligibility check</span>
            </li>
            <li>
              <strong>Within 24 hours*</strong>
              <span>Typical clinical review</span>
            </li>
            <li>
              <strong>No insurance required</strong>
              <span>Simple self-pay care.</span>
            </li>
          </ul>
          <p className="hero__stats-note hero-anim" style={{ '--hero-delay': '400ms' }}>
            *Timing not guaranteed. Availability varies by state and treatment.
          </p>
        </div>

        <div className="hero__media-col" data-reveal="right">
          <div className="hero__media-frame hero__media-frame--desktop">
            <SiteImage
              src={media.heroHomeDesktop.src}
              alt={media.heroHomeDesktop.alt}
              fill
              priority
              sizes="(max-width: 1023px) 0px, min(50vw, 800px)"
              quality={70}
              className="hero__media-image"
            />
          </div>
          <div className="hero__media-frame hero__media-frame--mobile">
            <SiteImage
              src={media.heroHomeMobile.src}
              alt={media.heroHomeMobile.alt}
              fill
              priority
              sizes="(max-width: 1023px) min(100vw, 460px), 0px"
              quality={68}
              className="hero__media-image"
            />
          </div>

          <article className="hero-feature">
            <span className="pill">Featured Program</span>
            <p className="hero-feature__cat">Medical Weight Loss</p>
            <h2>Clinician-Guided Weight Management</h2>
            <p className="hero-feature__blurb">
              Personalized treatment options, ongoing clinical support, and discreet delivery.
            </p>
            <div className="hero-feature__actions">
              <Link href="/medical-weight-loss">View Details</Link>
              <Link href="/check-eligibility" className="btn btn--primary btn--sm">
                Check Eligibility
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
