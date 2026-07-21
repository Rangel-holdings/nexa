import Link from 'next/link'
import { pricingPrograms } from '../lib/site-data'
import { programImages } from '../lib/media'
import SiteImage from './SiteImage'

const imageByTitle = {
  'Weight Management Program': programImages['medical-weight-loss'],
  "Men's Hormone Health": programImages['mens-hormone-health'],
  "Women's Hormone Health": programImages['womens-hormone-health'],
  'Peptide Therapy': programImages['peptide-therapy'],
}

export default function PricingGrid() {
  return (
    <section className="container pricing-grid">
      {pricingPrograms.map((program) => {
        const image = imageByTitle[program.title]
        return (
          <article key={program.title} className="pricing-card">
            {image && (
              <div className="pricing-card__media">
                <SiteImage src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 420px" />
              </div>
            )}
            <div className="pricing-card__header">
              <h2>{program.title}</h2>
              <p className="subtitle">{program.subtitle}</p>
            </div>
            <div className="pricing-card__row">
              <span className="label">Due Today</span>
              <strong className="value highlighted">{program.dueToday}</strong>
            </div>
            <div className="pricing-card__row">
              <span className="label">Recurring Amount</span>
              <span className="value">{program.recurring}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Clinical Evaluation / Consultation</span>
              <span className="value">{program.consultationFee}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Prescription Cost</span>
              <span className="value">{program.medicationCost}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Lab Diagnostic Fees</span>
              <span className="value">{program.labCost}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Supplies &amp; Shipping</span>
              <span className="value">{program.shippingCost}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Follow-up Care &amp; Messaging</span>
              <span className="value">{program.supportInclusions}</span>
            </div>
            <div className="pricing-card__row">
              <span className="label">Cancellation Policy</span>
              <span className="value">{program.cancellation}</span>
            </div>
            <div className="pricing-card__row limitation-row">
              <span className="label">Limitations &amp; Availability</span>
              <span className="value">{program.limitations}</span>
            </div>
            <div className="pricing-card__footer">
              <Link href="/check-eligibility" className="btn btn--primary btn--lg">
                Check Eligibility
              </Link>
              <Link href="/#treatments" className="btn btn--outline btn--lg">
                View Treatments
              </Link>
            </div>
          </article>
        )
      })}
    </section>
  )
}
