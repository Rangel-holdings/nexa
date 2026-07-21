import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'

export const metadata = {
  title: 'Medical Team | Nexa Rx',
  description: 'Meet the licensed clinical team and understand how medical decisions are made at Nexa Rx.',
  alternates: { canonical: '/medical-team' },
}

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Medical Team', path: '/medical-team' }]} />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">Medical Team</p>
          <h1>Licensed clinicians, patient-first standards.</h1>
          <p className="lede">
            Nexa Rx connects eligible adults with licensed clinicians who evaluate symptoms, history, and labs when
            required before making treatment decisions.
          </p>
        </section>
        <section className="container proof__metrics">
          <div>
            <strong>Clinical leadership</strong>
            <span>Board-certified physician oversight and treatment protocols.</span>
          </div>
          <div>
            <strong>Licensure & state rules</strong>
            <span>Care availability varies by clinician licensure and state law.</span>
          </div>
          <div>
            <strong>Evidence-led decisions</strong>
            <span>Prescription treatment is never guaranteed and is based on evaluation.</span>
          </div>
          <div>
            <strong>Ongoing support</strong>
            <span>Follow-up cadence, messaging, and refill support are program-specific.</span>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
