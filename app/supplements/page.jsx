import Link from 'next/link'
import PageShell from '../../components/PageShell'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import SiteImage from '../../components/SiteImage'
import { supplements } from '../../lib/site-data'
import { media } from '../../lib/media'

export const metadata = {
  title: 'Supplements Shop | Nexa Rx',
  description: 'Shop Nexa Rx dietary supplements in a separate non-prescription lane with transparent recurring terms.',
  alternates: { canonical: '/supplements' },
}

export default function Page() {
  return (
    <PageShell stickyMode="shop">
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Supplements', path: '/supplements' }]} />
      <main className="pricing-page">
        <section className="container pricing-page__hero">
          <p className="eyebrow">NON-PRESCRIPTION SUPPORT</p>
          <h1>Shop Supplements</h1>
          <p className="lede">
            Dietary supplements are sold separately from medical treatment and do not affect prescribing decisions.
          </p>
          <div className="program-hero-media">
            <SiteImage
              src={media.heroProduct.src}
              alt={media.heroProduct.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
        </section>
        <section className="container treat-grid">
          {supplements.map((item) => (
            <article key={item.slug} className="treat-card">
              <div className="treat-card__media">
                <SiteImage
                  src={media.packaging.src}
                  alt={`${item.name} packaging`}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <div className="treat-card__body">
                <span className="pill">Dietary Supplement</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="treat-card__price">
                  One-time {item.oneTimePrice} · Subscribe {item.subscribePrice} ({item.renewal})
                </p>
                <div className="treat-card__actions">
                  <Link href={`/supplements/${item.slug}`}>View Details</Link>
                  <Link href={`/supplements/checkout?product=${item.slug}`} className="btn btn--primary btn--sm">
                    Checkout
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  )
}
