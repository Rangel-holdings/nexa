'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
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

function NavDropdown({ label, href, items, align = 'left' }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const menuId = useId()
  const closeTimer = useRef(null)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openMenu = () => {
    clearCloseTimer()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  useEffect(() => () => clearCloseTimer(), [])

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      className={`nav-dropdown ${align === 'right' ? 'nav-dropdown--right' : ''} ${open ? 'is-open' : ''}`}
      ref={rootRef}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        href={href}
        className="nav-dropdown__trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(false)}
        onFocus={openMenu}
      >
        <span>{label}</span>
        <span className="nav-dropdown__chevron" aria-hidden="true" />
      </Link>
      <div id={menuId} className="nav-dropdown__menu" role="menu">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            onFocus={openMenu}
          >
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
            <span className="logo__mark" aria-hidden="true">
              <svg width="30" height="20" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6H16C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26H22" stroke="#4DAA9A" strokeWidth="4.5" strokeLinecap="round"/>
                <path d="M32 6H38C43.5228 6 48 10.4772 48 16C48 21.5228 43.5228 26 38 26H32" stroke="#0F1722" strokeWidth="4.5" strokeLinecap="round"/>
                <circle cx="27" cy="16" r="4.5" fill="#4DAA9A" />
              </svg>
            </span>
            <div className="logo__text-group">
              <span className="logo__word">
                Nexa <span className="logo__rx">Rx</span>
              </span>
              <span className="logo__subline">PERSONAL CARE. REAL RESULTS.</span>
            </div>
          </Link>

          <nav className="nav" aria-label="Primary">
            <NavDropdown label="Treatments" href="/#treatments" items={treatmentLinks} />
            {midLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <NavDropdown label="Shop" href="/supplements" items={shopLinks} align="right" />
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
            <Link href="/supplements" onClick={() => setMenuOpen(false)}>
              All Supplements
            </Link>
            {shopLinks
              .filter((item) => item.href !== '/supplements')
              .map((item) => (
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
