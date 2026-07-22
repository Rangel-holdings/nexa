import Link from 'next/link'
import SiteImage from './SiteImage'
import { media } from '../lib/media'

export default function HomeHero() {
  return (
    <section className="hero hero--home hero--cover">
      <div className="hero--cover__media">
        <div className="hero--cover__frame hero--cover__frame--desktop">
          <SiteImage
            src={media.heroHomeDesktop.src}
            alt={media.heroHomeDesktop.alt}
            fill
            priority
            sizes="100vw"
            quality={80}
            className="hero--cover__image"
          />
        </div>
        <div className="hero--cover__frame hero--cover__frame--mobile">
          <SiteImage
            src={media.heroHomeMobile.src}
            alt={media.heroHomeMobile.alt}
            fill
            priority
            sizes="100vw"
            quality={78}
            className="hero--cover__image"
          />
        </div>
        <div className="hero--cover__shade" aria-hidden="true" />
      </div>

      <div className="container hero--cover__content">
        <div className="hero--cover__copy">
          <p className="eyebrow">PERSONALIZED CARE. CLINICIAN-GUIDED OPTIONS.</p>
          <h1>
            Your care.
            <br />
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
            <Link href="/#treatments" className="btn btn--outline btn--lg btn--on-cover">
              View Treatments
            </Link>
          </div>
          <p className="hero__disclosure hero__disclosure--on-cover">
            Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed
            clinician. Availability varies by state and treatment.
          </p>
        </div>
      </div>
    </section>
  )
}
