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
        <section className="container program-split">
          <div className="program-split__copy">
            <p className="eyebrow">NON-PRESCRIPTION SUPPORT</p>
            <h1>Shop Supplements</h1>
            <p className="lede">
              Dietary supplements are sold separately from medical treatment and do not affect prescribing decisions.
            </p>
            <div className="hero__cta">
              <Link href="/supplements/checkout" className="btn btn--primary btn--lg">
                Shop Supplements
              </Link>
              <Link href="/supplements/bundles" className="btn btn--outline btn--lg">
                View Details
              </Link>
            </div>
          </div>
          <div className="program-split__media" data-reveal="right">
            <SiteImage
              src={media.heroProduct.src}
              alt={media.heroProduct.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
            />
          </div>
        </section>
        <section className="container treat-grid">
          {supplements.map((item, index) => (
            <article
              key={item.slug}
              className="treat-card"
              data-reveal="up"
              style={{ '--delay': `${index * 70}ms` }}
            >
              <div className="treat-card__media">
                <SiteImage
                  src={media.packaging.src}
                  alt={`${item.name} packaging`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  quality={70}
                />
              </div>
              <div className="treat-card__body">
                <span className="pill">Dietary Supplement</span>
                <h3>{item.name}</h3>
                <p className="treat-card__desc">{item.description}</p>
                <p className="treat-card__price">
                  One-time {item.oneTimePrice} · Subscribe {item.subscribePrice}
                </p>
                <p className="treat-card__price-note">{item.renewal}</p>
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
