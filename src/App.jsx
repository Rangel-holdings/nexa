import { useEffect, useState } from 'react'

const TREATMENTS = [
  {
    id: 'glp1',
    badge: 'Most requested',
    title: 'Tirzepatide',
    category: 'Weight Loss',
    blurb: 'Clinician-guided GLP-1 / GIP care with custom titration — delivered discreetly to your door.',
    image: '/brand/brand-guide-offers.png',
  },
  {
    id: 'trt',
    badge: 'Men’s health',
    title: 'TRT',
    category: 'Hormone Optimization',
    blurb: 'Evidence-based testosterone protocols with ongoing physician oversight and lab-informed dosing.',
    image: '/brand/brand-guide-light.png',
  },
  {
    id: 'hrt',
    badge: 'Women’s health',
    title: 'HRT',
    category: 'Hormone Balance',
    blurb: 'Personalized hormone replacement designed around your symptoms, goals, and biology.',
    image: '/brand/logo-suite-light.png',
  },
  {
    id: 'peptides',
    badge: 'Longevity',
    title: 'Peptide Care',
    category: 'Recovery & Wellness',
    blurb: 'Premium peptide protocols for recovery, metabolic support, and modern wellness — on your terms.',
    image: '/brand/digital-icons.png',
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Select program',
    text: 'Choose the care path you’re interested in and begin a short eligibility questionnaire.',
  },
  {
    n: '02',
    title: 'Medical review',
    text: 'A licensed clinician reviews your intake — typically within 24 hours. No insurance required.',
  },
  {
    n: '03',
    title: 'Fast shipping',
    text: 'Approved prescriptions ship free with discreet, temperature-aware packaging to your door.',
  },
  {
    n: '04',
    title: 'Ongoing care',
    text: 'Unlimited chat with your care team, dose adjustments, and progress support included.',
  },
]

const FAQS = [
  {
    q: 'How does the process work?',
    a: 'Select a program, complete a short online intake, verify identity, and a licensed clinician reviews your case. If prescribed, medication ships to your door and your Patient Center stays open for ongoing support.',
  },
  {
    q: 'Do I need insurance?',
    a: 'No. Nexa Rx is designed for cash-pay clarity — no insurance headaches, no surprise bills. You’ll see pricing before you continue.',
  },
  {
    q: 'Is this safe and legitimate?',
    a: 'Care is clinician-guided. Medications are fulfilled through licensed U.S. pharmacy partners. Compounded medications are prepared under applicable federal pharmacy standards and are not FDA-approved as finished branded products.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Most approved orders ship with expedited, discreet delivery. Cold-chain packaging is used when clinically appropriate.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No hidden fees. Your plan pricing is shown up front. Cancel anytime according to your care plan terms.',
  },
  {
    q: 'What if I’m not approved?',
    a: 'If a clinician determines treatment isn’t appropriate, you won’t be charged for medication. We’ll explain next steps clearly.',
  },
]

function LogoMark({ variant = 'light' }) {
  const onDark = variant === 'dark'
  return (
    <a href="#top" className={`logo ${onDark ? 'logo--on-dark' : ''}`} aria-label="Nexa Rx home">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="36" height="36">
          <rect x="2" y="16" width="22" height="16" rx="8" fill="currentColor" className="logo__pill-a" />
          <rect x="24" y="16" width="22" height="16" rx="8" fill="#4DAA9A" />
        </svg>
      </span>
      <span className="logo__word">
        Nexa <span className="logo__rx">Rx</span>
      </span>
    </a>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div id="top" className="page">
      <div className="trust-bar">
        <span>Clinician-guided care</span>
        <span className="dot" />
        <span>Discreet nationwide delivery</span>
        <span className="dot" />
        <span>No insurance required</span>
        <span className="dot" />
        <span>Free consultation pathway</span>
      </div>

      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header__inner">
          <LogoMark />
          <nav className="nav">
            <a href="#treatments">Treatments</a>
            <a href="#how">How it works</a>
            <a href="#quality">Quality</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="header__actions">
            <a href="#start" className="btn btn--ghost">Sign in</a>
            <a href="#start" className="btn btn--primary">Get started</a>
            <button
              type="button"
              className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-nav">
          <a href="#treatments" onClick={() => setMenuOpen(false)}>Treatments</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#quality" onClick={() => setMenuOpen(false)}>Quality</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#start" className="btn btn--primary" onClick={() => setMenuOpen(false)}>Get started</a>
        </div>
      )}

      <main>
        {/* HERO — mycare.md structure */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Personal care. Real results.</p>
              <h1>
                Your care.<br />
                <em>Your way.</em>
              </h1>
              <p className="lede">
                Clinically guided longevity, metabolic, and hormone protocols — MD-overseen and delivered to your door.
                No hidden fees. Ever.
              </p>
              <div className="hero__cta">
                <a href="#treatments" className="btn btn--primary btn--lg">View treatments</a>
                <a href="#how" className="btn btn--outline btn--lg">See how it works</a>
              </div>
              <ul className="hero__stats">
                <li><strong>2 min</strong><span>Online assessment</span></li>
                <li><strong>24h</strong><span>Typical clinician review</span></li>
                <li><strong>0</strong><span>Insurance required</span></li>
              </ul>
            </div>

            <div className="hero__visual">
              <div className="hero-card">
                <div className="hero-card__media" style={{ backgroundImage: 'url(/brand/brand-guide-offers.png)' }} />
                <div className="hero-card__body">
                  <span className="pill">Most potent</span>
                  <p className="hero-card__cat">Weight loss</p>
                  <h2>Tirzepatide</h2>
                  <p>Custom titration. Unlimited physician access. Discreet delivery.</p>
                  <div className="hero-card__actions">
                    <a href="#treatments">Learn more</a>
                    <a href="#start" className="btn btn--primary btn--sm">Get started</a>
                  </div>
                </div>
              </div>
              <div className="hero-float">
                <img src="/brand/digital-icons.png" alt="Nexa Rx brand system" />
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF STRIP */}
        <section className="proof">
          <div className="container proof__inner">
            <h2>
              It’s time to move from sick care to <em>healthcare</em>.
            </h2>
            <p>
              Patients nationwide choose bio-individualized care because personalized medicine matters —
              evidence-based protocols, premium medications, and support that stays with you.
            </p>
            <div className="proof__metrics">
              <div><strong>GLP-1</strong><span>Weight & metabolic</span></div>
              <div><strong>TRT / HRT</strong><span>Hormone health</span></div>
              <div><strong>Peptides</strong><span>Recovery & longevity</span></div>
              <div><strong>MD-led</strong><span>Clinician oversight</span></div>
            </div>
          </div>
        </section>

        {/* TREATMENTS */}
        <section id="treatments" className="section treatments">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">Weight loss & metabolic health</p>
              <h2>Treatments available</h2>
              <p className="section__sub">Unlimited physician access. No hidden fees.</p>
            </div>
            <div className="treat-grid">
              {TREATMENTS.map((t) => (
                <article key={t.id} className="treat-card">
                  <div className="treat-card__media" style={{ backgroundImage: `url(${t.image})` }} />
                  <div className="treat-card__body">
                    <span className="pill">{t.badge}</span>
                    <p className="treat-card__cat">{t.category}</p>
                    <h3>{t.title}</h3>
                    <p>{t.blurb}</p>
                    <div className="treat-card__actions">
                      <a href="#start">Learn more</a>
                      <a href="#start" className="btn btn--primary btn--sm">Get started</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTOR-LED + STATS */}
        <section id="quality" className="section quality">
          <div className="container quality__grid">
            <div>
              <p className="eyebrow">Doctor-led</p>
              <h2>Rx prescribed treatment protocols.</h2>
              <p className="lede">
                Custom titration and dosages designed around your biology — not a one-size protocol.
              </p>
              <ul className="check-list">
                <li>Potency verified (+/− 10%)</li>
                <li>Sterility standards (USP-aligned partners)</li>
                <li>Endotoxin screening where applicable</li>
                <li>Nationwide discreet shipping</li>
              </ul>
            </div>
            <div className="stat-grid">
              <div className="stat-card">
                <strong>15%</strong>
                <span>Average weight loss in 3 months*</span>
              </div>
              <div className="stat-card">
                <strong>98%</strong>
                <span>Member satisfaction goal</span>
              </div>
              <div className="stat-card">
                <strong>2 min</strong>
                <span>To complete eligibility assessment</span>
              </div>
              <div className="stat-card stat-card--brand">
                <img src="/brand/logo-suite-dark.png" alt="Nexa Rx" />
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section how">
          <div className="container">
            <div className="section__head section__head--center">
              <p className="eyebrow">Nationwide shipping</p>
              <h2>Custom care, simplified.</h2>
              <p className="section__sub">No insurance headaches. Just results.</p>
              <a href="#start" className="btn btn--primary">Start your journey</a>
            </div>
            <div className="steps">
              {STEPS.map((s) => (
                <article key={s.n} className="step">
                  <span className="step__n">Step {s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND STORY BAND */}
        <section className="brand-band">
          <div className="container brand-band__grid">
            <div>
              <p className="eyebrow eyebrow--teal">Care that connects. Results that last.</p>
              <h2>Built for modern wellness.</h2>
              <p>
                Nexa Rx delivers evidence-based care and premium medications — online, discreetly, and on your terms.
                Clear. Confident. Supportive. Human.
              </p>
              <div className="brand-actions">
                <a href="#start" className="brand-action">
                  <span>◎</span> Start your consultation
                </a>
                <a href="#start" className="brand-action">
                  <span>○</span> See if you qualify
                </a>
                <a href="#start" className="brand-action">
                  <span>♡</span> Begin your care plan
                </a>
              </div>
            </div>
            <div className="brand-band__visual">
              <img src="/brand/brand-guide-dark.png" alt="Nexa Rx brand identity" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq">
          <div className="container faq__grid">
            <div>
              <p className="eyebrow">Support</p>
              <h2>Common questions regarding your care.</h2>
              <p className="section__sub">
                We believe in transparency — treatments, process, and our commitment to your health.
              </p>
            </div>
            <div className="faq__list">
              {FAQS.map((item, i) => (
                <div key={item.q} className={`faq__item ${openFaq === i ? 'is-open' : ''}`}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    <span>{item.q}</span>
                    <span className="faq__icon">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <p>{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="start" className="cta">
          <div className="container cta__inner">
            <p className="eyebrow eyebrow--teal">Your health, optimized.</p>
            <h2>Your care. Starts now.</h2>
            <p>
              Join members building a root-cause approach to health with personalized, clinician-guided treatments.
            </p>
            <div className="cta__actions">
              <a href="#treatments" className="btn btn--primary btn--lg">Browse products</a>
              <a href="#how" className="btn btn--on-dark btn--lg">How it works</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <LogoMark variant="dark" />
            <p className="footer__tag">Personal care. Real results.</p>
          </div>
          <div>
            <h4>Care</h4>
            <a href="#treatments">Treatments</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#quality">Quality</a>
            <a href="#start">Get started</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} Nexa Rx. All rights reserved.</p>
          <p className="footer__legal">
            Nexa Rx is a telehealth technology experience connecting patients with licensed clinicians and pharmacy partners.
            Compounded medications are prepared by licensed pharmacies and are not FDA-approved as finished branded products.
            Individual results vary. *Illustrative outcomes for mockup purposes.
          </p>
        </div>
      </footer>
    </div>
  )
}
