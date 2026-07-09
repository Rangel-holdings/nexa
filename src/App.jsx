import { useEffect, useMemo, useState } from 'react'

const TREATMENTS = [
  {
    id: 'glp1',
    badge: 'Most requested',
    title: 'Tirzepatide',
    category: 'Weight Loss',
    blurb: 'Clinician-guided GLP-1 / GIP care with custom titration — delivered discreetly to your door.',
    image: '/images/treatment-weightloss.png',
    priceFrom: 249,
  },
  {
    id: 'trt',
    badge: "Men's health",
    title: 'TRT',
    category: 'Hormone Optimization',
    blurb: 'Evidence-based testosterone protocols with ongoing physician oversight and lab-informed dosing.',
    image: '/images/treatment-trt.png',
    priceFrom: 179,
  },
  {
    id: 'hrt',
    badge: "Women's health",
    title: 'HRT',
    category: 'Hormone Balance',
    blurb: 'Personalized hormone replacement designed around your symptoms, goals, and biology.',
    image: '/images/treatment-hrt.png',
    priceFrom: 169,
  },
  {
    id: 'peptides',
    badge: 'Longevity',
    title: 'Peptide Care',
    category: 'Recovery & Wellness',
    blurb: 'Premium peptide protocols for recovery, metabolic support, and modern wellness — on your terms.',
    image: '/images/treatment-peptides.png',
    priceFrom: 189,
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
    a: 'Select a program, complete a short online intake, verify identity, and a licensed clinician reviews your case. If prescribed, medication ships to your door and your care team stays available for ongoing support.',
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
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes. You can cancel according to your care plan terms — no long-term lock-in. Your Patient Center and care team can help with changes.',
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

const SECTION_IDS = new Set(['treatments', 'how', 'quality', 'faq'])

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  if (!hash || hash === 'top' || hash === '/') return { name: 'home', treatmentId: null, section: null }
  if (SECTION_IDS.has(hash)) return { name: 'home', treatmentId: null, section: hash }
  if (hash.startsWith('start')) {
    const parts = hash.split('/')
    return { name: 'start', treatmentId: parts[1] || null, section: null }
  }
  if (hash === 'portal' || hash.startsWith('portal/')) return { name: 'portal', treatmentId: null, section: null }
  if (hash === 'signin') return { name: 'signin', treatmentId: null, section: null }
  return { name: 'home', treatmentId: null, section: null }
}

function LogoMark({ variant = 'light', href = '#/' }) {
  const onDark = variant === 'dark'
  return (
    <a href={href} className={`logo ${onDark ? 'logo--on-dark' : ''}`} aria-label="Nexa Rx home">
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

function SiteHeader({ scrolled, menuOpen, setMenuOpen, onNavigate }) {
  return (
    <>
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
          <LogoMark href="#/" />
          <nav className="nav">
            <a href="#/treatments" onClick={(e) => onNavigate(e, 'treatments')}>Treatments</a>
            <a href="#/how" onClick={(e) => onNavigate(e, 'how')}>How it works</a>
            <a href="#/quality" onClick={(e) => onNavigate(e, 'quality')}>Quality</a>
            <a href="#/faq" onClick={(e) => onNavigate(e, 'faq')}>FAQ</a>
          </nav>
          <div className="header__actions">
            <a href="#/signin" className="btn btn--ghost">Sign in</a>
            <a href="#/start" className="btn btn--primary">Get started</a>
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
          <a href="#/treatments" onClick={(e) => { setMenuOpen(false); onNavigate(e, 'treatments') }}>Treatments</a>
          <a href="#/how" onClick={(e) => { setMenuOpen(false); onNavigate(e, 'how') }}>How it works</a>
          <a href="#/quality" onClick={(e) => { setMenuOpen(false); onNavigate(e, 'quality') }}>Quality</a>
          <a href="#/faq" onClick={(e) => { setMenuOpen(false); onNavigate(e, 'faq') }}>FAQ</a>
          <a href="#/signin" className="btn btn--outline" onClick={() => setMenuOpen(false)}>Sign in</a>
          <a href="#/start" className="btn btn--primary" onClick={() => setMenuOpen(false)}>Get started</a>
        </div>
      )}
    </>
  )
}

function HomePage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main>
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
              <a href="#/treatments" className="btn btn--primary btn--lg" onClick={(e) => onNavigate(e, 'treatments')}>
                View treatments
              </a>
              <a href="#/start" className="btn btn--outline btn--lg">See if you qualify</a>
            </div>
            <ul className="hero__stats">
              <li><strong>2 min</strong><span>Online assessment</span></li>
              <li><strong>24h</strong><span>Typical clinician review</span></li>
              <li><strong>0</strong><span>Insurance required</span></li>
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__stage" style={{ backgroundImage: 'url(/images/hero-lifestyle.png)' }} aria-hidden="true" />
            <div className="hero-card">
              <div className="hero-card__media" style={{ backgroundImage: 'url(/images/treatment-weightloss.png)' }} />
              <div className="hero-card__body">
                <span className="pill">Most potent</span>
                <p className="hero-card__cat">Weight loss</p>
                <h2>Tirzepatide</h2>
                <p>Custom titration. Unlimited physician access. Discreet delivery.</p>
                <div className="hero-card__actions">
                  <a href="#/start/glp1">Learn more</a>
                  <a href="#/start/glp1" className="btn btn--primary btn--sm">Get started</a>
                </div>
              </div>
            </div>
            <div className="hero-float">
              <img src="/images/product-packaging.png" alt="Nexa Rx discreet packaging" />
            </div>
          </div>
        </div>
      </section>

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
                  <p className="treat-card__price">From ${t.priceFrom}/mo</p>
                  <div className="treat-card__actions">
                    <a href={`#/start/${t.id}`}>Learn more</a>
                    <a href={`#/start/${t.id}`} className="btn btn--primary btn--sm">Get started</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              <img src="/images/product-packaging.png" alt="Premium packaging" />
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section how">
        <div className="container">
          <div className="section__head section__head--center">
            <p className="eyebrow">Nationwide shipping</p>
            <h2>Custom care, simplified.</h2>
            <p className="section__sub">No insurance headaches. Just results.</p>
            <a href="#/start" className="btn btn--primary">Start your journey</a>
          </div>
          <div className="how__visual">
            <img src="/images/care-journey.png" alt="Nexa Rx care journey" />
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
              <a href="#/start" className="brand-action"><span>◎</span> Start your consultation</a>
              <a href="#/start" className="brand-action"><span>○</span> See if you qualify</a>
              <a href="#/start" className="brand-action"><span>♡</span> Begin your care plan</a>
            </div>
          </div>
          <div className="brand-band__visual">
            <img src="/images/hero-lifestyle.png" alt="Modern wellness lifestyle" />
          </div>
        </div>
      </section>

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

      <section className="cta">
        <div className="container cta__inner">
          <p className="eyebrow eyebrow--teal">Your health, optimized.</p>
          <h2>Your care. Starts now.</h2>
          <p>
            Join members building a root-cause approach to health with personalized, clinician-guided treatments.
          </p>
          <div className="cta__actions">
            <a href="#/start" className="btn btn--primary btn--lg">Browse products</a>
            <a href="#/how" className="btn btn--on-dark btn--lg" onClick={(e) => onNavigate(e, 'how')}>How it works</a>
          </div>
        </div>
      </section>
    </main>
  )
}

function StartFlow({ treatmentId, onDone }) {
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
      setError('Select a treatment to continue.')
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
          <LogoMark href="#/" />
          <a href="#/" className="flow__exit">Exit</a>
        </div>
        <div className="container">
          <div className="flow__progress"><div style={{ width: `${progress}%` }} /></div>
          <p className="flow__step-label">Step {step + 1} of 4</p>
        </div>
      </div>

      <div className="container flow__main">
        {step === 0 && (
          <section className="flow-panel">
            <p className="eyebrow">Get started</p>
            <h1>Choose your care path</h1>
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
                    <span>From ${t.priceFrom}/mo</span>
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
            <p className="flow-lede">Takes about 2 minutes. A licensed clinician reviews within 24 hours.</p>
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
            <p className="flow-lede">We’ll use this to confirm eligibility — no charge until a clinician prescribes.</p>
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
            <h1>You’re in review, {contact.name.split(' ')[0]}.</h1>
            <p className="flow-lede">
              A licensed clinician typically reviews within 24 hours. We’ll email {contact.email} with next steps.
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
            <div className="flow-nav">
              <a href="#/" className="btn btn--outline">Back to home</a>
              <button type="button" className="btn btn--primary" onClick={onDone}>Open Patient Center →</button>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function SignIn({ onSuccess }) {
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
          <LogoMark variant="dark" href="#/" />
          <h1>Your care, in one place.</h1>
          <p>Track treatment, message your care team, and manage refills.</p>
        </div>
      </div>
      <div className="auth__panel">
        <a href="#/" className="auth__back">← Back to Nexa</a>
        <h2>Member sign in</h2>
        <p className="auth__hint">New here? <a href="#/start">Start treatment first</a> — no account before checkout.</p>
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
          <button type="submit" className="btn btn--primary btn--lg flow-cta">Sign in</button>
        </form>
      </div>
    </div>
  )
}

function Portal() {
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
        <LogoMark href="#/" />
        <h1>Patient Center</h1>
        <p>Complete eligibility or sign in to continue.</p>
        <div className="flow-nav">
          <a href="#/start" className="btn btn--primary">Get started</a>
          <a href="#/signin" className="btn btn--outline">Sign in</a>
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
          <LogoMark href="#/" />
          <div className="portal__actions">
            <span>Hi, {name}</span>
            <a href="#/" className="btn btn--ghost" onClick={() => localStorage.removeItem('nexa_session_v1')}>Sign out</a>
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
            <p>Watch your email for approval updates. Typical review window is within 24 hours.</p>
            <a href="#/start" className="btn btn--primary btn--sm">Start another assessment</a>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <LogoMark variant="dark" href="#/" />
          <p className="footer__tag">Personal care. Real results.</p>
        </div>
        <div>
          <h4>Care</h4>
          <a href="#/treatments">Treatments</a>
          <a href="#/how">How it works</a>
          <a href="#/faq">FAQ</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#/quality">Quality</a>
          <a href="#/start">Get started</a>
          <a href="#/signin">Sign in</a>
          <a href="#/portal">Patient Center</a>
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
  )
}

export default function App() {
  const [route, setRoute] = useState(getRoute)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHash = () => {
      const next = getRoute()
      setRoute(next)
      setMenuOpen(false)
      if (next.name === 'home' && next.section) {
        window.setTimeout(() => {
          document.getElementById(next.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 40)
      } else {
        window.scrollTo(0, 0)
      }
    }
    window.addEventListener('hashchange', onHash)
    // honor deep-link section on first load
    if (route.name === 'home' && route.section) {
      window.setTimeout(() => {
        document.getElementById(route.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
    return () => window.removeEventListener('hashchange', onHash)
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

  const onNavigate = (e, sectionId) => {
    e.preventDefault()
    const targetHash = `#/${sectionId}`
    if (route.name !== 'home') {
      window.location.hash = targetHash
      return
    }
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash
      return
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (route.name === 'start') {
    return (
      <StartFlow
        treatmentId={route.treatmentId}
        onDone={() => { window.location.hash = '#/portal' }}
      />
    )
  }

  if (route.name === 'signin') {
    return <SignIn onSuccess={() => { window.location.hash = '#/portal' }} />
  }

  if (route.name === 'portal') {
    return <Portal />
  }

  return (
    <div id="top" className="page">
      <SiteHeader
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={onNavigate}
      />
      <HomePage onNavigate={onNavigate} />
      <Footer />
    </div>
  )
}
