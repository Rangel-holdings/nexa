import { faqItems } from '../lib/site-data'

export default function FaqList() {
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
          {faqItems.map((item) => (
            <details key={item.q} className="faq__item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
