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
            sizes="(max-width: 1023px) 0px, 100vw"
            quality={68}
            className="hero--cover__image"
          />
        </div>
        <div className="hero--cover__frame hero--cover__frame--mobile">
          <SiteImage
            src={media.heroHomeMobile.src}
            alt={media.heroHomeMobile.alt}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 0px"
            quality={66}
            className="hero--cover__image"
          />
        </div>
        <div className="hero--cover__shade" aria-hidden="true" />
        <div className="hero--cover__glow" aria-hidden="true" />
      </div>

      <div className="container hero--cover__content">
        <div className="hero--cover__copy">
          <p className="eyebrow hero-anim" style={{ '--hero-delay': '0ms' }}>
            PERSONALIZED CARE. CLINICIAN-GUIDED OPTIONS.
          </p>
          <h1 className="hero-anim" style={{ '--hero-delay': '90ms' }}>
            Your care.
            <br />
            <em>Your way.</em>
          </h1>
          <p className="lede hero-anim" style={{ '--hero-delay': '180ms' }}>
            Connect online with a licensed clinician for medical weight management, hormone health, and select
            prescription therapies. See your options and costs before treatment begins.
          </p>
          <div className="hero__cta hero-anim" style={{ '--hero-delay': '270ms' }}>
            <Link href="/check-eligibility" className="btn btn--primary btn--lg btn--lift">
              Check Eligibility
            </Link>
            <Link href="/#treatments" className="btn btn--outline btn--lg btn--on-cover btn--lift">
              View Treatments
            </Link>
          </div>
          <p className="hero__disclosure hero__disclosure--on-cover hero-anim" style={{ '--hero-delay': '360ms' }}>
            Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed
            clinician. Availability varies by state and treatment.
          </p>
        </div>
      </div>
    </section>
  )
}
