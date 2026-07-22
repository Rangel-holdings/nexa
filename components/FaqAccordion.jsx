'use client'

import { useState } from 'react'
import { faqItems } from '../lib/site-data'

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="section faq">
      <div className="container faq__grid">
        <div data-reveal="up">
          <p className="eyebrow">Support</p>
          <h2>Common questions regarding your care.</h2>
          <p className="section__sub">
            We believe in transparency — care programs, pricing, pharmacy fulfillment, and your privacy.
          </p>
        </div>
        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index
            return (
              <div
                key={item.q}
                className={`faq__item ${isOpen ? 'is-open' : ''}`}
                data-reveal="up"
                style={{ '--delay': `${Math.min(index, 5) * 50}ms` }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq__panel ${isOpen ? 'is-open' : ''}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
