import Link from 'next/link'

const links = [
  { href: '/medical-weight-loss', label: 'Treatments' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/quality-and-safety', label: 'Quality & Safety' },
  { href: '/supplements', label: 'Shop' },
  { href: '/faq', label: 'FAQ' },
  { href: '/medical-team', label: 'Medical Team' },
]

export default function SiteHeader() {
  return (
    <div className="site-top is-scrolled">
      <div className="trust-bar" aria-hidden="true">
        <div className="trust-bar__track">
          <span>Licensed clinical care</span>
          <span className="dot" />
          <span>Clear pricing</span>
          <span className="dot" />
          <span>No insurance required</span>
          <span className="dot" />
          <span>Discreet delivery</span>
        </div>
      </div>
      <header className="header">
        <div className="container header__inner">
          <Link href="/" className="logo" aria-label="Nexa Rx home">
            <span className="logo__word">
              Nexa <span className="logo__rx">Rx</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Primary">
            {links.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header__actions">
            <Link href="/patient-login" className="btn btn--ghost header__signin">
              Patient Login
            </Link>
            <Link href="/check-eligibility" className="btn btn--primary header__cta">
              Check Eligibility
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
