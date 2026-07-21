import { useEffect, useMemo, useState } from 'react'

// ─── Data ───────────────────────────────────────────────────────────────────

const TREATMENTS = [
  {
    id: 'weight-loss',
    badge: 'Care Program',
    category: 'MEDICAL WEIGHT LOSS',
    title: 'Clinician-Guided Weight Management',
    blurb: 'Personalized medical evaluation with approved medication options.',
    image: '/images/treatment-weightloss.png',
    priceFrom: 249,
    path: '/medical-weight-loss',
  },
  {
    id: 'mens-hormone',
    badge: "Men's Health",
    category: "MEN'S HORMONE HEALTH",
    title: 'Testosterone Evaluation & Care',
    blurb: 'Evaluation based on symptoms, medical history, and lab results.',
    image: '/images/treatment-trt.png',
    priceFrom: 179,
    path: '/mens-hormone-health',
  },
  {
    id: 'womens-hormone',
    badge: "Women's Health",
    category: "WOMEN'S HORMONE HEALTH",
    title: 'Menopause & Hormone Care',
    blurb: 'Personalized evaluation and treatment options based on symptoms, medical history, and lab results.',
    image: '/images/treatment-hrt.png',
    priceFrom: 169,
    path: '/womens-hormone-health',
  },
  {
    id: 'peptide-therapy',
    badge: 'Prescription Therapy',
    category: 'LONGEVITY / RECOVERY THERAPY',
    title: 'Clinician-Prescribed Peptide Therapy',
    blurb: 'Online medical evaluation for select peptide therapies. When prescribed, treatment is fulfilled by a qualified U.S. compounding pharmacy or outsourcing facility, as applicable. Availability varies by therapy and state.',
    image: '/images/treatment-peptides.png',
    priceFrom: null,
    path: '/peptide-therapy',
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Choose a care program',
    text: "Select medical weight management, men's hormone health, women's hormone health, or peptide therapy.",
  },
  {
    n: '02',
    title: 'Complete secure intake',
    text: 'Provide medical information inside the secure clinical portal — not on the public marketing site.',
  },
  {
    n: '03',
    title: 'Meet a licensed clinician',
    text: 'The clinician reviews medical history, symptoms, labs when required, and treatment eligibility.',
  },
  {
    n: '04',
    title: 'Receive a clinical decision',
    text: 'A prescription is issued only when medically appropriate. Treatment is not guaranteed.',
  },
  {
    n: '05',
    title: 'Pharmacy fulfillment',
    text: 'When prescribed, medication is dispensed by the applicable licensed pharmacy and shipped where legally available.',
  },
  {
    n: '06',
    title: 'Ongoing care',
    text: 'Follow-up, clinical messaging, refill support, and lab cadence as included in your program.',
  },
]

const FAQS = [
  {
    q: 'How does the process work?',
    a: "Choose a care program and complete a short eligibility check. Then provide medical information inside our secure clinical portal. A licensed clinician reviews your medical history, symptoms, and labs when required. If a prescription is appropriate, medication is dispensed by a licensed pharmacy and shipped to your door. Ongoing follow-up, messaging, and refill support are included as part of your program.",
  },
  {
    q: 'Do I need insurance?',
    a: "No. Nexa Rx is a self-pay platform. Pricing is shown before you continue — all charges and recurring terms are displayed before enrollment. Review the pricing page for a full program breakdown.",
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
    q: "What if I'm not approved?",
    a: "If a clinician determines treatment isn't appropriate, you won't be charged for medication. We'll explain next steps clearly.",
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes. Cancellation terms, timing, and any non-refundable fees are shown before enrollment. Your Patient Center and care team can help with changes.',
  },
  {
    q: 'Are Nexa Rx peptide therapies prescription-only?',
    a: 'Yes. Peptide therapies offered through the Nexa Rx clinical program require a medical evaluation and a valid prescription from a licensed clinician.',
  },
  {
    q: 'Does Nexa Rx sell research-use-only peptides?',
    a: 'No. Nexa Rx does not sell research-use-only products. Peptide therapies offered through the clinical program require a medical evaluation and prescription and are dispensed for eligible patients through the applicable pharmacy channel.',
  },
  {
    q: 'Are compounded peptide therapies FDA-approved?',
    a: 'Compounded medications are not FDA-approved as finished branded products. They are prepared by licensed U.S. compounding pharmacies or outsourcing facilities under applicable federal standards.',
  },
  {
    q: 'What is the difference between a 503A compounding pharmacy and a 503B outsourcing facility?',
    a: '503A pharmacies compound medications for individual patient prescriptions. 503B outsourcing facilities operate under stricter FDA oversight and can produce larger quantities. The applicable pharmacy channel depends on your prescribed therapy.',
  },
  {
    q: 'Which treatments use FDA-approved medications?',
    a: 'Our clinicians may prescribe both FDA-approved medications and, where appropriate, compounded therapies. Your clinician will explain the status of any medication prescribed to you.',
  },
  {
    q: 'Which costs are included in the monthly price?',
    a: 'The pricing page shows a full breakdown for each program: consultation fee, medication cost, lab fees if required, supplies, shipping, follow-up visits, clinical messaging, and refill support. All charges are shown before enrollment.',
  },
  {
    q: 'Is a prescription guaranteed?',
    a: 'No. Prescription treatment is not guaranteed. Eligibility and treatment decisions are made solely by a licensed clinician based on your medical evaluation.',
  },
  {
    q: 'Which states are currently supported for each program?',
    a: 'State availability varies by program and treatment. You will see availability for your state during the eligibility check.',
  },
  {
    q: 'Are supplements part of my prescription treatment plan?',
    a: 'No. Dietary supplements are non-prescription products sold separately from medical treatment. Purchasing supplements does not affect your clinical eligibility or prescribing decisions.',
  },
  {
    q: 'Can I buy supplements without becoming a Nexa Rx patient?',
    a: 'Yes. Supplements are available through our Shop without a clinical intake or prescription.',
  },
  {
    q: 'How do I cancel a recurring treatment or supplement order?',
    a: 'You can cancel through your Patient Center or by contacting our support team. Cancellation terms, timing, and any non-refundable fees are shown before enrollment or purchase.',
  },
  {
    q: 'Where is my medical information collected and stored?',
    a: 'All medical intake occurs inside a secure clinical portal — not on the public marketing website. Health information is not shared with advertising platforms.',
  },
]

const INTAKE_QUESTIONS = [
  {
    id: 'goal',
    q: 'What is your primary goal?',
    options: ['Lose weight', 'Optimize hormones', 'Improve energy & recovery', 'Longevity support'],
  },
  {
    id: 'bmi',
    q: 'Which best describes you?',
    options: ['BMI 30+', 'BMI 27–29.9 with a related condition', 'Exploring hormone care', 'Not sure — help me decide'],
  },
  {
    id: 'meds',
    q: 'Are you currently on GLP-1 or hormone therapy?',
    options: ['No — starting fresh', 'Yes — GLP-1', 'Yes — TRT / HRT', 'Yes — peptides / other'],
  },
]

// ─── Routing ────────────────────────────────────────────────────────────────

function getRoute() {
  const path = window.location.pathname
  
  if (!path || path === '/' || path === '/home') {
    return { name: 'home', treatmentId: null, section: null }
  }
  
  if (path === '/how-it-works') return { name: 'home', treatmentId: null, section: 'how' }
  if (path === '/quality-and-safety') return { name: 'home', treatmentId: null, section: 'quality' }
  if (path === '/faq') return { name: 'home', treatmentId: null, section: 'faq' }
  if (path === '/supplements' || path === '/shop') return { name: 'home', treatmentId: null, section: 'shop' }
  
  if (path === '/medical-weight-loss') return { name: 'start', treatmentId: 'weight-loss', section: null }
  if (path === '/mens-hormone-health') return { name: 'start', treatmentId: 'mens-hormone', section: null }
  if (path === '/womens-hormone-health') return { name: 'start', treatmentId: 'womens-hormone', section: null }
  if (path === '/peptide-therapy') return { name: 'start', treatmentId: 'peptide-therapy', section: null }
  
  if (path === '/check-eligibility' || path === '/start') {
    return { name: 'start', treatmentId: null, section: null }
  }
  
  if (path === '/pricing') {
    return { name: 'pricing', treatmentId: null, section: null }
  }
  
  if (path === '/patient-login' || path === '/signin') {
    return { name: 'signin', treatmentId: null, section: null }
  }
  
  if (path === '/patient-center' || path === '/portal') {
    return { name: 'portal', treatmentId: null, section: null }
  }
  
  return { name: 'home', treatmentId: null, section: null }
}

// ─── Logo ────────────────────────────────────────────────────────────────────

function LogoMark({ variant = 'light', navigate }) {
  const onDark = variant === 'dark'
  
  const handleClick = (e) => {
    e.preventDefault()
    navigate('/')
  }
  
  return (
    <a href="/" onClick={handleClick} className={`logo ${onDark ? 'logo--on-dark' : ''}`} aria-label="Nexa Rx home">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="34" height="34">
          <rect width="40" height="40" rx="10" fill={onDark ? '#0B1220' : '#0F1722'} />
          <path d="M11 9h5.2v14.8L26.8 9H32v24h-5.2V18.2L16.2 33H11V9z" fill="#F2F4F7" />
          <path d="M13.5 30.5L29.5 12" stroke="#4DAA9A" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="12.6" cy="31.2" r="1.8" fill="#4DAA9A" />
        </svg>
      </span>
      <span className="logo__word">
        Nexa <span className="logo__rx">Rx</span>
      </span>
    </a>
  )
}

// ─── Site Header ─────────────────────────────────────────────────────────────

function SiteHeader({ scrolled, menuOpen, setMenuOpen, navigate }) {
  const closeMenu = () => setMenuOpen(false)
  
  const goSection = (e, path) => {
    e.preventDefault()
    closeMenu()
    navigate(path)
  }

  return (
    <div className={`site-top ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="trust-bar" aria-hidden="true">
        <div className="trust-bar__track">
          <span>Licensed clinical care</span>
          <span className="dot" />
          <span>Clear pricing</span>
          <span className="dot" />
          <span>No insurance required</span>
          <span className="dot" />
          <span>Discreet delivery</span>
          <span className="dot trust-bar__dup" />
          <span className="trust-bar__dup">Licensed clinical care</span>
          <span className="dot trust-bar__dup" />
          <span className="trust-bar__dup">Clear pricing</span>
          <span className="dot trust-bar__dup" />
          <span className="trust-bar__dup">No insurance required</span>
          <span className="dot trust-bar__dup" />
          <span className="trust-bar__dup">Discreet delivery</span>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <LogoMark navigate={navigate} />
          <nav className="nav" aria-label="Primary">
            <a href="/" onClick={(e) => goSection(e, '/#treatments')}>Treatments</a>
            <a href="/how-it-works" onClick={(e) => goSection(e, '/how-it-works')}>How It Works</a>
            <a href="/pricing" onClick={(e) => goSection(e, '/pricing')}>Pricing</a>
            <a href="/quality-and-safety" onClick={(e) => goSection(e, '/quality-and-safety')}>Quality &amp; Safety</a>
            <a href="/shop" onClick={(e) => goSection(e, '/shop')}>Shop</a>
            <a href="/faq" onClick={(e) => goSection(e, '/faq')}>FAQ</a>
          </nav>
          <div className="header__actions">
            <a href="/patient-login" onClick={(e) => goSection(e, '/patient-login')} className="btn btn--ghost header__signin">Patient Login</a>
            <a href="/check-eligibility" onClick={(e) => goSection(e, '/check-eligibility')} className="btn btn--primary header__cta">Check Eligibility</a>
            <button
              type="button"
              className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <button type="button" className="mobile-nav__scrim" aria-label="Close menu" onClick={closeMenu} />
        <div className="mobile-nav__sheet">
          <p className="mobile-nav__label">Explore</p>
          <nav className="mobile-nav__links">
            <a href="/" onClick={(e) => goSection(e, '/#treatments')}>Treatments</a>
            <a href="/how-it-works" onClick={(e) => goSection(e, '/how-it-works')}>How It Works</a>
            <a href="/pricing" onClick={(e) => goSection(e, '/pricing')}>Pricing</a>
            <a href="/quality-and-safety" onClick={(e) => goSection(e, '/quality-and-safety')}>Quality &amp; Safety</a>
            <a href="/shop" onClick={(e) => goSection(e, '/shop')}>Shop</a>
            <a href="/faq" onClick={(e) => goSection(e, '/faq')}>FAQ</a>
            <a href="/patient-center" onClick={(e) => goSection(e, '/patient-center')}>Patient Center</a>
          </nav>
          <div className="mobile-nav__actions">
            <a href="/patient-login" className="btn btn--outline btn--lg" onClick={(e) => goSection(e, '/patient-login')}>Patient Login</a>
            <a href="/check-eligibility" className="btn btn--primary btn--lg" onClick={(e) => goSection(e, '/check-eligibility')}>Check Eligibility</a>
          </div>
          <p className="mobile-nav__tag">Licensed clinical care. Clear pricing.</p>
        </div>
      </div>
    </div>
  )
}

// ─── Reveal hook ─────────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!nodes.length) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-in')
          else entry.target.classList.remove('is-in')
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -6% 0px' },
    )
    nodes.forEach((n) => {
      const rect = n.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) n.classList.add('is-in')
      io.observe(n)
    })
    return () => io.disconnect()
  }, [])
}

// ─── Home Page ───────────────────────────────────────────────────────────────

function HomePage({ navigate }) {
  const [openFaq, setOpenFaq] = useState(0)
  useReveal()

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy" data-reveal="left">
            <p className="eyebrow">PERSONALIZED CARE. CLINICIAN-GUIDED OPTIONS.</p>
            <h1>
              Your care.<br />
              <em>Your way.</em>
            </h1>
            <p className="lede">
              Connect online with a licensed clinician for medical weight management, hormone health, and select
              prescription therapies. See your options and costs before treatment begins.
            </p>
            <div className="hero__cta">
              <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="btn btn--primary btn--lg">
                Check Eligibility
              </a>
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/#treatments'); }} className="btn btn--outline btn--lg">
                View Treatments
              </a>
            </div>
            <p className="hero__disclosure">
              Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed
              clinician. Availability varies by state and treatment.
            </p>
            <ul className="hero__stats">
              <li><strong>2 min</strong><span>Eligibility check</span></li>
              <li><strong>Within 24h*</strong><span>Typical clinical review</span></li>
              <li><strong>No insurance</strong><span>Simple self-pay care.</span></li>
            </ul>
            <p className="hero__stats-note">*Timing not guaranteed. Availability varies by state and treatment.</p>
          </div>

          <div className="hero__visual" data-reveal="right">
            <article className="hero-card">
              <div className="hero-card__media" style={{ backgroundImage: 'url(/images/treatment-weightloss.png)' }} />
              <div className="hero-card__body">
                <span className="pill">Featured Program</span>
                <p className="hero-card__cat">Medical Weight Loss</p>
                <h2>Clinician-Guided Weight Management</h2>
                <p>Personalized treatment options, ongoing clinical support, and discreet delivery.</p>
                <div className="hero-card__actions">
                  <a href="/medical-weight-loss" onClick={(e) => { e.preventDefault(); navigate('/medical-weight-loss'); }}>View Details</a>
                  <a href="/medical-weight-loss" onClick={(e) => { e.preventDefault(); navigate('/medical-weight-loss'); }} className="btn btn--primary btn--sm">Check Eligibility</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Positioning / Proof */}
      <section className="proof">
        <div className="container proof__inner">
          <h2>
            Modern care should be <em>personal, clear, and clinically guided.</em>
          </h2>
          <p>
            Nexa Rx connects eligible adults with licensed clinicians for medical weight management,
            hormone health, and select prescription therapies—with transparent pricing and ongoing support.
          </p>
          <div className="proof__metrics">
            <div><strong>Medical Weight Loss</strong><span>Clinician-guided weight management</span></div>
            <div><strong>Men&rsquo;s Hormone Health</strong><span>Testosterone evaluation &amp; care</span></div>
            <div><strong>Women&rsquo;s Hormone Health</strong><span>Menopause &amp; hormone care</span></div>
            <div><strong>Peptide Therapy</strong><span>Clinician-prescribed prescription therapy</span></div>
          </div>
        </div>
      </section>

      {/* Explore Care Programs */}
      <section id="treatments" className="section treatments">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">PERSONALIZED CARE PROGRAMS</p>
            <h2>Explore care programs</h2>
            <p className="section__sub">Ongoing clinical support. Clear pricing before enrollment.</p>
          </div>
          <div className="treat-grid">
            {TREATMENTS.map((t, i) => {
              const isPeptide = t.id === 'peptide-therapy'
              return (
                <article
                  key={t.id}
                  className="treat-card"
                  data-reveal="up"
                  style={{ '--delay': `${i * 70}ms` }}
                >
                  <div className="treat-card__media" style={{ backgroundImage: `url(${t.image})` }} />
                  <div className="treat-card__body">
                    <span className="pill">{isPeptide ? 'PRESCRIPTION THERAPY' : t.badge}</span>
                    <p className="treat-card__cat">{t.category}</p>
                    <h3>{t.title}</h3>
                    <p>{t.blurb}</p>
                    {isPeptide ? (
                      <>
                        <p className="treat-card__price">Starting at $[VERIFIED]/month*</p>
                        <p className="treat-card__price-note">
                          *Final price depends on the prescribed therapy, dosage, pharmacy, shipping, and state.
                          All charges and recurring terms are shown before enrollment.
                        </p>
                      </>
                    ) : (
                      <p className="treat-card__price">From ${t.priceFrom}/mo</p>
                    )}
                    <div className="treat-card__actions">
                      <a href={t.path} onClick={(e) => { e.preventDefault(); navigate(t.path); }}>
                        {isPeptide ? 'View Peptide Therapy' : 'View Details'}
                      </a>
                      <a href={t.path} onClick={(e) => { e.preventDefault(); navigate(t.path); }} className="btn btn--primary btn--sm">Check Eligibility</a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Supplements */}
      <section className="supplements" id="shop">
        <div className="container supplements__inner" data-reveal="up">
          <p className="eyebrow">NON-PRESCRIPTION SUPPORT</p>
          <h2>Support your health between visits.</h2>
          <p className="lede">
            Shop a focused collection of dietary supplements for everyday wellness. No prescription required.
          </p>
          <a href="/shop" onClick={(e) => { e.preventDefault(); navigate('/shop'); }} className="btn btn--primary btn--lg">Shop Supplements</a>
          <p className="supplements__disclaimer">
            These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* Quality & Safety */}
      <section id="quality" className="section quality">
        <div className="container quality__grid">
          <div data-reveal="left">
            <p className="eyebrow">Quality &amp; Safety</p>
            <h2>Clear standards for every part of care.</h2>
            <p className="lede">
              Nexa Rx connects patients with licensed clinicians and qualified U.S. pharmacy partners,
              and we explain pricing and next steps before enrollment.
            </p>
            <ul className="check-list">
              <li>Prescriptions sent to appropriately licensed U.S. pharmacies</li>
              <li>Sterility standards (USP-aligned pharmacy partners)</li>
              <li>Endotoxin screening where applicable</li>
              <li>Medical intake collected in secure clinical portal only</li>
            </ul>
            <p className="quality__supplement-note">
              Dietary supplements are non-prescription products and are sold separately from medical treatment.
              Product claims, ingredients, directions, warnings, and recurring terms are shown on each product page.
            </p>
          </div>
          <div className="stat-grid" data-reveal="right">
            <div className="stat-card">
              <strong>2 min</strong>
              <span>To complete eligibility check</span>
            </div>
            <div className="stat-card">
              <strong>Within 24h</strong>
              <span>Typical clinical review*</span>
            </div>
            <div className="stat-card">
              <strong>U.S.</strong>
              <span>Licensed pharmacy partners</span>
            </div>
            <div className="stat-card stat-card--brand">
              <img src="/images/hero-product.png" alt="Nexa Rx packaging" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="section how">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="up">
            <p className="eyebrow">How It Works</p>
            <h2>Your care path, step by step.</h2>
            <p className="section__sub">Transparent process. Clinical decisions made by licensed clinicians.</p>
            <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="btn btn--primary">Check Eligibility</a>
          </div>
          <div className="how__visual" data-reveal="up">
            <img src="/images/care-journey.png" alt="Nexa Rx care journey" />
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <article key={s.n} className="step" data-reveal="up" style={{ '--delay': `${i * 80}ms` }}>
                <span className="step__n">Step {s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Band */}
      <section className="brand-band">
        <div className="container brand-band__grid">
          <div data-reveal="left">
            <p className="eyebrow eyebrow--teal">Care that connects. Support that stays.</p>
            <h2>Built for modern wellness.</h2>
            <p>
              Nexa Rx connects eligible patients with licensed clinicians and qualified U.S. pharmacy partners —
              with transparent pricing and clinical support built in.
            </p>
            <div className="brand-actions">
              <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="brand-action"><span>◎</span> Check Eligibility</a>
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/#treatments'); }} className="brand-action"><span>○</span> View care programs</a>
              <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="brand-action"><span>♡</span> Start your eligibility check</a>
            </div>
          </div>
          <div className="brand-band__visual" data-reveal="right">
            <img src="/images/hero-lifestyle.png" alt="Modern wellness lifestyle" />
          </div>
        </div>
      </section>

      {/* Start Now */}
      <section className="start-now" id="start-now">
        <div className="container start-now__grid">
          <div className="start-now__media" data-reveal="left">
            <img
              src="/images/care-starts-products.png"
              alt="Nexa Rx treatment packaging"
            />
          </div>
          <div className="start-now__copy" data-reveal="right">
            <h2>
              Your care.<br />
              <em>Starts now.</em>
            </h2>
            <hr className="start-now__rule" />
            <p>
              Connect with a licensed clinician and see your options and costs before treatment begins.
              No insurance required.
            </p>
            <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="btn btn--primary btn--lg btn--square">
              Check Eligibility <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section faq">
        <div className="container faq__grid">
          <div data-reveal="left">
            <p className="eyebrow">Support</p>
            <h2>Common questions regarding your care.</h2>
            <p className="section__sub">
              We believe in transparency — treatments, process, and our commitment to your health.
            </p>
          </div>
          <div className="faq__list" data-reveal="right">
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

      {/* Final CTA */}
      <section className="cta">
        <div className="container cta__inner" data-reveal="up">
          <p className="eyebrow eyebrow--teal">Your health, prioritized.</p>
          <h2>Ready when you are.</h2>
          <p>
            Start with a short eligibility check. A licensed clinician reviews your case — typically within 24 hours.*
          </p>
          <div className="cta__actions">
            <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="btn btn--primary btn--lg">Check Eligibility</a>
            <a href="/how-it-works" onClick={(e) => { e.preventDefault(); navigate('/how-it-works'); }} className="btn btn--on-dark btn--lg">How It Works</a>
          </div>
        </div>
      </section>
    </main>
  )
}

// ─── Pricing Page Component ─────────────────────────────────────────────────

function PricingPage({ navigate }) {
  useReveal()

  const pricingPrograms = [
    {
      title: 'Weight Management Program',
      subtitle: 'Semaglutide & Tirzepatide approved options',
      dueToday: '$0',
      consultationFee: '$0 membership evaluation fee if prescribed. A non-refundable consultation evaluation fee of $49 applies only if clinician determines not eligible.',
      medicationCost: 'Starts at $249/month. Dosage changes do not change membership pricing unless high-strength tier is clinically customized.',
      labCost: '$0 — Included in membership evaluation if required labs are ordered through our partner clinical network.',
      shippingCost: '$0 — Free temperature-controlled shipping & priority cold-chain supplies.',
      supportInclusions: 'Ongoing follow-up visits, clinical titration planning, unlimited messaging, and monthly refill support.',
      cancellation: 'Cancel anytime via the Patient Center prior to your next recurring billing cycle.',
      limitations: 'Availability varies by state regulations, clinical evaluation outcome, and compounding pharmacy guidelines.',
    },
    {
      title: "Men's Hormone Health",
      subtitle: 'Testosterone replacement & clinical monitoring',
      dueToday: '$0',
      consultationFee: 'Included in active monthly care plan. A $49 fee applies if evaluated as not eligible.',
      medicationCost: 'Starts at $179/month.',
      labCost: 'Lab diagnostics required. Ordered locally or home kit options available.',
      shippingCost: '$0 — Discreet delivery and necessary administrative/medical supplies (syringes/pads) included.',
      supportInclusions: 'Ongoing lab evaluation monitoring, physician dosing adjustments, and unlimited chat support.',
      cancellation: 'No long-term contracts. Cancel prior to the next billing cycle.',
      limitations: 'State regulations apply. Patient must be 18+ and display clinical indication on baseline lab reports.',
    },
    {
      title: "Women's Hormone Health",
      subtitle: 'Menopause & symptom balance therapies',
      dueToday: '$0',
      consultationFee: 'Included in active monthly care plan. A $49 fee applies if evaluated as not eligible.',
      medicationCost: 'Starts at $169/month.',
      labCost: 'Diagnostic check ordered if clinically indicated.',
      shippingCost: '$0 — Discreet delivery of prescription options.',
      supportInclusions: 'Symptom-based titration review, physician support, and messaging.',
      cancellation: 'Cancel anytime prior to next recurring batch formulation.',
      limitations: 'Subject to clinical eligibility and state pharmacy delivery rules.',
    },
    {
      title: 'Peptide Therapy',
      subtitle: 'Compounded Peptide formulations',
      dueToday: '$0',
      consultationFee: 'Included in membership. A $49 fee applies if evaluated as not eligible.',
      medicationCost: 'Starting at $[VERIFIED]/month* (final price depends on dosage and prescription selection).',
      labCost: 'Lab work checked if clinically indicated.',
      shippingCost: '$0 — Free expedited shipping & application supplies.',
      supportInclusions: 'Clinician support, treatment monitoring, and refill coordinator services.',
      cancellation: 'Cancel subscription before next recurring compound preparation begins.',
      limitations: 'State availability varies by specific compound formulation.',
    },
  ]

  return (
    <main className="pricing-page">
      <section className="container pricing-page__hero" data-reveal="up">
        <p className="eyebrow">Clear Pricing</p>
        <h1>Understand your program costs.</h1>
        <p className="lede">
          Transparent pricing with no surprise medical fees. Review all charges before starting your check.
        </p>
      </section>

      <section className="container pricing-grid">
        {pricingPrograms.map((p, i) => (
          <article key={p.title} className="pricing-card" data-reveal="up" style={{ '--delay': `${i * 100}ms` }}>
            <div className="pricing-card__header">
              <h2>{p.title}</h2>
              <p className="subtitle">{p.subtitle}</p>
            </div>
            
            <div className="pricing-card__row">
              <span className="label">Due Today</span>
              <strong className="value highlighted">{p.dueToday}</strong>
            </div>

            <div className="pricing-card__row">
              <span className="label">Clinical Evaluation / Consultation</span>
              <span className="value">{p.consultationFee}</span>
            </div>

            <div className="pricing-card__row">
              <span className="label">Prescription Cost</span>
              <span className="value">{p.medicationCost}</span>
            </div>

            <div className="pricing-card__row">
              <span className="label">Lab Diagnostic Fees</span>
              <span className="value">{p.labCost}</span>
            </div>

            <div className="pricing-card__row">
              <span className="label">Supplies &amp; Shipping</span>
              <span className="value">{p.shippingCost}</span>
            </div>

            <div className="pricing-card__row">
              <span className="label">Follow-up Care &amp; Messaging</span>
              <span className="value">{p.supportInclusions}</span>
            </div>

            <div className="pricing-card__row">
              <span className="label">Cancellation Policy</span>
              <span className="value">{p.cancellation}</span>
            </div>

            <div className="pricing-card__row limitation-row">
              <span className="label">Limitations &amp; Availability</span>
              <span className="value">{p.limitations}</span>
            </div>

            <div className="pricing-card__footer">
              <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="btn btn--primary btn--lg">
                Check Eligibility
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

// ─── Start Flow ──────────────────────────────────────────────────────────────

function StartFlow({ treatmentId, onDone, navigate }) {
  const preselected = TREATMENTS.find((t) => t.id === treatmentId) || null
  const [step, setStep] = useState(preselected ? 1 : 0)
  const [selected, setSelected] = useState(preselected)
  const [answers, setAnswers] = useState({})
  const [qIndex, setQIndex] = useState(0)
  const [contact, setContact] = useState({ name: '', email: '', phone: '' })
  const [error, setError] = useState('')

  const progress = useMemo(() => ((step + 1) / 4) * 100, [step])
  const question = INTAKE_QUESTIONS[qIndex]

  const continueTreatment = () => {
    if (!selected) {
      setError('Select a care program to continue.')
      return
    }
    setError('')
    setStep(1)
  }

  const continueIntake = () => {
    if (!answers[question.id]) {
      setError('Please choose an option.')
      return
    }
    setError('')
    if (qIndex < INTAKE_QUESTIONS.length - 1) {
      setQIndex((i) => i + 1)
      return
    }
    setStep(2)
  }

  const continueContact = (e) => {
    e.preventDefault()
    if (!contact.name.trim() || !contact.email.trim()) {
      setError('Enter your name and email to continue.')
      return
    }
    setError('')
    const draft = { selected, answers, contact, at: new Date().toISOString() }
    localStorage.setItem('nexa_intake_draft_v1', JSON.stringify(draft))
    setStep(3)
  }

  return (
    <div className="flow">
      <div className="flow__top">
        <div className="container flow__top-inner">
          <LogoMark navigate={navigate} />
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="flow__exit">Exit</a>
        </div>
        <div className="container">
          <div className="flow__progress"><div style={{ width: `${progress}%` }} /></div>
          <p className="flow__step-label">Step {step + 1} of 4</p>
        </div>
      </div>

      <div className="container flow__main">
        {step === 0 && (
          <section className="flow-panel">
            <p className="eyebrow">Check Eligibility</p>
            <h1>Choose your care program</h1>
            <p className="flow-lede">No account needed yet — pick a program and complete a short eligibility check.</p>
            <div className="flow-treats">
              {TREATMENTS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`flow-treat ${selected?.id === t.id ? 'is-active' : ''}`}
                  onClick={() => setSelected(t)}
                >
                  <span className="flow-treat__img" style={{ backgroundImage: `url(${t.image})` }} />
                  <span className="flow-treat__body">
                    <span className="pill">{t.badge}</span>
                    <strong>{t.title}</strong>
                    <em>{t.category}</em>
                    <span>
                      {t.priceFrom ? `From $${t.priceFrom}/mo` : 'Starting at $[VERIFIED]/month*'}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            {error && <p className="flow-error">{error}</p>}
            <button type="button" className="btn btn--primary btn--lg flow-cta" onClick={continueTreatment}>
              Continue →
            </button>
          </section>
        )}

        {step === 1 && (
          <section className="flow-panel flow-panel--narrow">
            <p className="eyebrow">{selected?.title}</p>
            <h1>{question.q}</h1>
            <p className="flow-lede">Takes about 2 minutes. A licensed clinician reviews within 24 hours.*</p>
            <div className="flow-choices">
              {question.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`flow-choice ${answers[question.id] === opt ? 'is-active' : ''}`}
                  onClick={() => setAnswers({ ...answers, [question.id]: opt })}
                >
                  {opt}
                </button>
              ))}
            </div>
            {error && <p className="flow-error">{error}</p>}
            <div className="flow-nav">
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => {
                  setError('')
                  if (qIndex === 0) setStep(0)
                  else setQIndex((i) => i - 1)
                }}
              >
                Back
              </button>
              <button type="button" className="btn btn--primary" onClick={continueIntake}>Continue →</button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="flow-panel flow-panel--narrow">
            <p className="eyebrow">Almost there</p>
            <h1>Where should we send your review update?</h1>
            <p className="flow-lede">We&rsquo;ll use this to confirm eligibility — no charge until a clinician prescribes.</p>
            <form className="flow-form" onSubmit={continueContact}>
              <label>
                Full name
                <input
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  placeholder="Alex Rivera"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  placeholder="you@email.com"
                  required
                />
              </label>
              <label>
                Phone <span>(optional)</span>
                <input
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  placeholder="(305) 555-0142"
                />
              </label>
              {error && <p className="flow-error">{error}</p>}
              <div className="flow-nav">
                <button type="button" className="btn btn--outline" onClick={() => setStep(1)}>Back</button>
                <button type="submit" className="btn btn--primary">Submit for review →</button>
              </div>
            </form>
          </section>
        )}

        {step === 3 && (
          <section className="flow-panel flow-panel--narrow flow-success">
            <p className="eyebrow">Submitted</p>
            <h1>You&rsquo;re in review, {contact.name.split(' ')[0]}.</h1>
            <p className="flow-lede">
              A licensed clinician typically reviews within 24 hours.* We&rsquo;ll email {contact.email} with next steps.
            </p>
            <div className="flow-summary">
              <div>
                <span>Program</span>
                <strong>{selected?.title}</strong>
              </div>
              <div>
                <span>Goal</span>
                <strong>{answers.goal}</strong>
              </div>
            </div>
            <p className="flow-lede" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
              *Timing not guaranteed. Prescription treatment is not guaranteed. Eligibility and treatment decisions
              are made by a licensed clinician. Availability varies by state and treatment.
            </p>
            <div className="flow-nav">
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="btn btn--outline">Back to home</a>
              <button type="button" className="btn btn--primary" onClick={onDone}>Open Patient Center →</button>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

// ─── Patient Login ────────────────────────────────────────────────────────────

function SignIn({ onSuccess, navigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!email.trim() || password.length < 4) {
      setError('Enter email and a password (4+ characters).')
      return
    }
    localStorage.setItem('nexa_session_v1', JSON.stringify({ email, at: new Date().toISOString() }))
    onSuccess()
  }

  return (
    <div className="auth">
      <div className="auth__visual" style={{ backgroundImage: 'url(/images/hero-lifestyle.png)' }}>
        <div className="auth__overlay">
          <LogoMark variant="dark" navigate={navigate} />
          <h1>Your care, in one place.</h1>
          <p>Track treatment, message your care team, and manage refills.</p>
        </div>
      </div>
      <div className="auth__panel">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="auth__back">← Back to Nexa Rx</a>
        <h2>Patient Login</h2>
        <p className="auth__hint">New here? <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }}>Check eligibility first</a> — no account before enrollment.</p>
        <form className="flow-form" onSubmit={submit}>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={4} required />
          </label>
          {error && <p className="flow-error">{error}</p>}
          <button type="submit" className="btn btn--primary btn--lg flow-cta">Patient Login</button>
        </form>
      </div>
    </div>
  )
}

// ─── Patient Portal ───────────────────────────────────────────────────────────

function Portal({ navigate }) {
  const session = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('nexa_session_v1') || 'null')
    } catch {
      return null
    }
  }, [])
  const draft = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('nexa_intake_draft_v1') || 'null')
    } catch {
      return null
    }
  }, [])

  if (!session && !draft) {
    return (
      <div className="portal-empty">
        <LogoMark navigate={navigate} />
        <h1>Patient Center</h1>
        <p>Complete eligibility check or log in to continue.</p>
        <div className="flow-nav">
          <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="btn btn--primary">Check Eligibility</a>
          <a href="/patient-login" onClick={(e) => { e.preventDefault(); navigate('/patient-login'); }} className="btn btn--outline">Patient Login</a>
        </div>
      </div>
    )
  }

  const name = draft?.contact?.name?.split(' ')[0] || session?.email?.split('@')[0] || 'Member'
  const program = draft?.selected?.title || 'Your care plan'

  return (
    <div className="portal">
      <header className="portal__top">
        <div className="container portal__top-inner">
          <LogoMark navigate={navigate} />
          <div className="portal__actions">
            <span>Hi, {name}</span>
            <a href="/" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); localStorage.removeItem('nexa_session_v1'); navigate('/'); }}>Sign out</a>
          </div>
        </div>
      </header>
      <main className="container portal__main">
        <section className="portal-hero">
          <p className="eyebrow">Patient Center</p>
          <h1>Welcome back, {name}.</h1>
          <p>Your clinician review status and next steps live here.</p>
        </section>
        <div className="portal-grid">
          <article className="portal-card">
            <h2>Current program</h2>
            <p className="portal-stat">{program}</p>
            <span className="pill">Pending clinician review</span>
          </article>
          <article className="portal-card">
            <h2>Next step</h2>
            <p>Watch your email for review updates. Typical review window is within 24 hours.*</p>
            <a href="/check-eligibility" onClick={(e) => { e.preventDefault(); navigate('/check-eligibility'); }} className="btn btn--primary btn--sm">Check another eligibility</a>
          </article>
          <article className="portal-card portal-card--wide">
            <h2>Care team</h2>
            <p>Message support will unlock after clinician approval. For now, reply to your confirmation email with questions.</p>
          </article>
        </div>
      </main>
    </div>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer({ navigate }) {
  const goLink = (e, path) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <LogoMark variant="dark" navigate={navigate} />
          <p className="footer__tag">Licensed clinical care. Clear pricing.</p>
        </div>
        <div>
          <h4>Care</h4>
          <a href="/" onClick={(e) => goLink(e, '/#treatments')}>Treatments</a>
          <a href="/how-it-works" onClick={(e) => goLink(e, '/how-it-works')}>How It Works</a>
          <a href="/pricing" onClick={(e) => goLink(e, '/pricing')}>Pricing</a>
          <a href="/quality-and-safety" onClick={(e) => goLink(e, '/quality-and-safety')}>Quality &amp; Safety</a>
          <a href="/faq" onClick={(e) => goLink(e, '/faq')}>FAQ</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="/quality-and-safety" onClick={(e) => goLink(e, '/quality-and-safety')}>Quality &amp; Safety</a>
          <a href="/check-eligibility" onClick={(e) => goLink(e, '/check-eligibility')}>Check Eligibility</a>
          <a href="/patient-login" onClick={(e) => goLink(e, '/patient-login')}>Patient Login</a>
          <a href="/patient-center" onClick={(e) => goLink(e, '/patient-center')}>Patient Center</a>
          <a href="/shop" onClick={(e) => goLink(e, '/shop')}>Shop</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Nexa Rx. All rights reserved.</p>
        <p className="footer__legal">
          Nexa Rx is a telehealth platform connecting eligible patients with licensed clinicians and qualified U.S.
          pharmacy partners. Compounded medications are not FDA-approved as finished branded products. Prescription
          treatment is not guaranteed; eligibility and treatment decisions are made by a licensed clinician.
          Availability varies by state and treatment. Dietary supplements are non-prescription products and are sold
          separately from clinical care. *Timing not guaranteed. State, pharmacy, product, and eligibility limitations apply.
        </p>
      </div>
    </footer>
  )
}

// ─── App Root ────────────────────────────────────────────────────────────────

export default function App() {
  const [route, setRoute] = useState(getRoute)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (path) => {
    window.history.pushState(null, '', path)
    const next = getRoute()
    setRoute(next)
    setMenuOpen(false)
    
    if (next.name === 'home' && next.section) {
      window.setTimeout(() => {
        document.getElementById(next.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    } else {
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    const onPopState = () => {
      const next = getRoute()
      setRoute(next)
      setMenuOpen(false)
      
      if (next.name === 'home' && next.section) {
        window.setTimeout(() => {
          document.getElementById(next.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
      } else {
        window.scrollTo(0, 0)
      }
    }
    
    window.addEventListener('popstate', onPopState)
    
    // Honor initial URL path & section parameters on load
    const initial = getRoute()
    if (initial.name === 'home' && initial.section) {
      window.setTimeout(() => {
        document.getElementById(initial.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
    
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

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

  if (route.name === 'start') {
    return (
      <StartFlow
        treatmentId={route.treatmentId}
        onDone={() => { navigate('/patient-center'); }}
        navigate={navigate}
      />
    )
  }

  if (route.name === 'signin') {
    return <SignIn onSuccess={() => { navigate('/patient-center'); }} navigate={navigate} />
  }

  if (route.name === 'portal') {
    return <Portal navigate={navigate} />
  }

  if (route.name === 'pricing') {
    return (
      <div className="page">
        <SiteHeader
          scrolled={scrolled}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navigate={navigate}
        />
        <PricingPage navigate={navigate} />
        <Footer navigate={navigate} />
      </div>
    )
  }

  return (
    <div id="top" className="page">
      <SiteHeader
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navigate={navigate}
      />
      <HomePage navigate={navigate} />
      <Footer navigate={navigate} />
    </div>
  )
}
