import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import RevealObserver from './RevealObserver'
import ScrollHighlightBar from './ScrollHighlightBar'

export default function PageShell({ children, stickyMode = 'eligibility', headerVariant = 'default' }) {
  return (
    <div className="page">
      <SiteHeader variant={headerVariant} />
      {children}
      <SiteFooter />
      <RevealObserver />
      <ScrollHighlightBar stickyMode={stickyMode} />
    </div>
  )
}

