import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'

export const metadata = {
  title: 'Quality & Safety | Nexa Rx',
  description:
    'Clear standards for licensed clinical care, pharmacy fulfillment, secure portal intake, and supplement separation.',
  alternates: { canonical: '/quality-and-safety' },
}

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Quality & Safety', path: '/quality-and-safety' }]} />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">Quality &amp; Safety</p>
          <h1>Clear standards for every part of care.</h1>
          <p className="lede">
            Nexa Rx connects patients with licensed clinicians and qualified U.S. pharmacy partners, and we explain
            pricing and next steps before enrollment.
          </p>
        </section>
        <section className="container">
          <ul className="check-list">
            <li>Prescriptions are sent to appropriately licensed U.S. pharmacies.</li>
            <li>Compounded medications are not FDA-approved as finished branded products.</li>
            <li>Medical intake is collected in a secure clinical portal, not the public marketing website.</li>
            <li>Health-related selections and patient data should not be sent to ad platforms.</li>
            <li>Dietary supplements are sold separately from medical treatment.</li>
          </ul>
          <p className="quality__supplement-note">
            Dietary supplements are non-prescription products and are sold separately from medical treatment. Product
            claims, ingredients, directions, warnings, and recurring terms are shown on each product page.
          </p>
        </section>
      </main>
    </PageShell>
  )
}
