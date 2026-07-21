'use client'

import Link from 'next/link'
import { useState } from 'react'
import { shopLinks, treatmentLinks } from '../lib/site-data'

const topLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/quality-and-safety', label: 'Quality & Safety' },
  { href: '/faq', label: 'FAQ' },
  { href: '/medical-team', label: 'Medical Team' },
]

function NavDropdown({ label, items }) {
  return (
    <div className="nav-dropdown">
      <button type="button" className="nav-dropdown__trigger" aria-haspopup="true">
        {label}
      </button>
      <div className="nav-dropdown__menu" role="menu">
        {items.map((item) => (
          <Link key={item.href} href={item.href} role="menuitem">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`site-top is-scrolled ${menuOpen ? 'is-menu-open' : ''}`}>
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
            <NavDropdown label="Treatments" items={treatmentLinks} />
            {topLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <NavDropdown label="Shop" items={shopLinks} />
          </nav>

          <div className="header__actions">
            <Link href="/patient-login" className="btn btn--ghost header__signin">
              Patient Login
            </Link>
            <Link href="/check-eligibility" className="btn btn--primary header__cta">
              Check Eligibility
            </Link>
            <button
              type="button"
              className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <button type="button" className="mobile-nav__scrim" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
        <div className="mobile-nav__sheet">
          <p className="mobile-nav__label">Treatments</p>
          <nav className="mobile-nav__links">
            {treatmentLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mobile-nav__label">Shop</p>
          <nav className="mobile-nav__links">
            {shopLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mobile-nav__label">Explore</p>
          <nav className="mobile-nav__links">
            {topLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/patient-center" onClick={() => setMenuOpen(false)}>
              Patient Center
            </Link>
          </nav>
          <div className="mobile-nav__actions">
            <Link href="/patient-login" className="btn btn--outline btn--lg" onClick={() => setMenuOpen(false)}>
              Patient Login
            </Link>
            <Link href="/check-eligibility" className="btn btn--primary btn--lg" onClick={() => setMenuOpen(false)}>
              Check Eligibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
