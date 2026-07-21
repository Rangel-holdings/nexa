'use client'

import { useState } from 'react'
import { faqItems } from '../lib/site-data'

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="section faq">
      <div className="container faq__grid">
        <div>
          <p className="eyebrow">Support</p>
          <h2>Common questions regarding your care.</h2>
          <p className="section__sub">
            We believe in transparency — treatments, process, and our commitment to your health.
          </p>
        </div>
        <div className="faq__list">
          {faqItems.map((item, index) => (
            <div key={item.q} className={`faq__item ${openFaq === index ? 'is-open' : ''}`}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <span>{item.q}</span>
                <span className="faq__icon">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && <p>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
