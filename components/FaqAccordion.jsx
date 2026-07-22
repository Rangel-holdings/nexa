'use client'

import Link from 'next/link'
import { useState } from 'react'
import { faqItems } from '../lib/site-data'

function ChevronIcon({ open }) {
  return (
    <svg className="faq__chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={open ? 'is-open' : undefined}
      />
    </svg>
  )
}

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="section faq" id="support">
      <div className="faq__atmosphere" aria-hidden="true" />
      <div className="container faq__grid">
        <div className="faq__intro" data-reveal="up">
          <p className="eyebrow">Support</p>
          <h2>Common questions regarding your care.</h2>
          <p className="section__sub">
            We believe in transparency — care programs, pricing, pharmacy fulfillment, and your privacy.
          </p>
          <div className="faq__intro-actions">
            <Link href="/check-eligibility" className="btn btn--primary">
              Check Eligibility
            </Link>
            <Link href="/patient-login" className="faq__text-link">
              Patient Login
            </Link>
          </div>
        </div>

        <div className="faq__list" data-reveal="up" style={{ '--delay': '80ms' }}>
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <article
                key={item.q}
                className={`faq__item ${isOpen ? 'is-open' : ''}`}
                style={{ '--delay': `${Math.min(index, 6) * 45}ms` }}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span className="faq__question">{item.q}</span>
                  <span className="faq__toggle" aria-hidden="true">
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq__panel ${isOpen ? 'is-open' : ''}`}
                >
                  <p>{item.a}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
