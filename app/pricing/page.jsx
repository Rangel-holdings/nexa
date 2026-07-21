import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import PageShell from '../../components/PageShell'
import PricingGrid from '../../components/PricingGrid'

export const metadata = {
  title: 'Pricing | Nexa Rx',
  description: 'Transparent pricing for every Nexa Rx program, including recurring terms, labs, support, and limitations.',
  alternates: { canonical: '/pricing' },
}

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }]} />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">Clear Pricing</p>
          <h1>Understand your program costs.</h1>
          <p className="lede">Transparent pricing with no surprise medical fees. Review all charges before starting your check.</p>
        </section>
        <PricingGrid />
      </main>
    </PageShell>
  )
}
