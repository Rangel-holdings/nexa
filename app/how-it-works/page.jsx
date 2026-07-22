import Link from 'next/link'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PageShell from '../../components/PageShell'
import SiteImage from '../../components/SiteImage'
import MediaFrame from '../../components/MediaFrame'
import { careSteps } from '../../lib/site-data'
import { media, howItWorksStepImages } from '../../lib/media'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'How It Works | Nexa Rx',
  description: 'See the six-step Nexa Rx care path from eligibility to pharmacy fulfillment and ongoing support.',
  path: '/how-it-works',
  image: media.howItWorksHero.src,
})

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'How It Works', path: '/how-it-works' }]} />
      <main className="pricing-page">
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">How It Works</p>
            <h1>Your care path, step by step.</h1>
            <p className="lede">Transparent process. Clinical decisions made by licensed clinicians.</p>
            <div className="hero__cta">
              <Link href="/check-eligibility" className="btn btn--primary btn--lg">
                Check Eligibility
              </Link>
              <Link href="/#treatments" className="btn btn--outline btn--lg">
                View Treatments
              </Link>
            </div>
          </div>
          <MediaFrame
            src={media.howItWorksHero.src}
            alt={media.howItWorksHero.alt}
            priority
            quality={74}
            caption="Step-by-step care"
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
            reveal="right"
          />
        </section>

        <section className="container how-steps-section">
          <div className="how-steps-rail" aria-hidden="true" />
          <div className="steps how-steps">
            {careSteps.map((step, index) => {
              const image = howItWorksStepImages[index]
              const shape = `how-step-card--shape-${(index % 6) + 1}`
              return (
                <article
                  key={step.n}
                  className={`step how-step-card ${shape}`}
                  data-reveal="up"
                  style={{ '--delay': `${index * 70}ms` }}
                >
                  <div className="how-step-card__media">
                    <SiteImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      quality={72}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 180px"
                    />
                    <span className="how-step-card__badge">Step {step.n}</span>
                  </div>
                  <div className="how-step-card__body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
