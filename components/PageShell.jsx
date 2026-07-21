import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import Link from 'next/link'

export default function PageShell({ children, stickyMode = 'eligibility' }) {
  return (
    <div className="page">
      <SiteHeader />
      {children}
      <SiteFooter />
      <div className="mobile-sticky-cta">
        {stickyMode === 'shop' ? (
          <Link href="/supplements/checkout" className="btn btn--primary btn--lg">
            Shop Supplements
          </Link>
        ) : (
          <Link href="/check-eligibility" className="btn btn--primary btn--lg">
            Check Eligibility
          </Link>
        )}
      </div>
    </div>
  )
}
