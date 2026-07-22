import PageShell from '../../components/PageShell'
import FaqAccordion from '../../components/FaqAccordion'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import MediaFrame from '../../components/MediaFrame'
import { media } from '../../lib/media'

export const metadata = {
  title: 'FAQ | Nexa Rx',
  description: 'Answers to peptide, pricing, eligibility, supplement, and privacy questions for Nexa Rx care programs.',
  alternates: { canonical: '/faq' },
}

export default function Page() {
  return (
    <PageShell stickyMode="eligibility">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />
      <main className="pricing-page">
        <section className="container program-split program-split--compact">
          <div className="program-split__copy">
            <p className="eyebrow">FAQ</p>
            <h1>Clear answers before you enroll.</h1>
            <p className="lede">
              Peptide disclosures, pricing inclusions, eligibility, supplements, and privacy — explained before you
              start.
            </p>
          </div>
          <MediaFrame
            src={media.faqHero.src}
            alt={media.faqHero.alt}
            priority
            caption="Clear answers first"
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 90vw, 520px"
            reveal="right"
          />
        </section>
        <FaqAccordion />
      </main>
    </PageShell>
  )
}
