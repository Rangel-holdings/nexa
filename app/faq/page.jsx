import PageShell from '../../components/PageShell'
import FaqAccordion from '../../components/FaqAccordion'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'

export const metadata = {
  title: 'FAQ | Nexa Rx',
  description: 'Answers to peptide, pricing, eligibility, supplement, and privacy questions for Nexa Rx care programs.',
  alternates: { canonical: '/faq' },
}

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />
      <main>
        <FaqAccordion />
      </main>
    </PageShell>
  )
}
