'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { shopLinks, treatmentLinks } from '../lib/site-data'

const midLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/quality-and-safety', label: 'Quality & Safety' },
]

const endLinks = [{ href: '/faq', label: 'FAQ' }]

const mobileExploreLinks = [
  ...midLinks,
  ...endLinks,
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

export default function SiteHeader({ variant = 'default' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = body.style.overflow

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'

    return () => {
      html.style.overflow = prevHtmlOverflow
      body.style.overflow = prevBodyOverflow
    }
  }, [menuOpen])

  return (
    <div
      className={`site-top site-top--${variant} ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}
    >
      <div className="trust-bar" aria-hidden="true">
        <div className="trust-bar__track">
          <span>LICENSED CLINICAL CARE</span>
          <span className="dot" />
          <span>CLEAR PRICING</span>
          <span className="dot" />
          <span>NO INSURANCE REQUIRED</span>
          <span className="dot" />
          <span>DISCREET DELIVERY</span>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Link href="/" className="logo" aria-label="Nexa Rx home" onClick={() => setMenuOpen(false)}>
            <span className="logo__word">
              Nexa <span className="logo__rx">Rx</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <NavDropdown label="Treatments" items={treatmentLinks} />
            {midLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <NavDropdown label="Shop" items={shopLinks} />
            {endLinks.map((item) => (
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
            <button
              type="button"
              className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav-panel"
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
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
            {mobileExploreLinks.map((item) => (
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
