import '../src/index.css'
import { siteUrl } from '../lib/site-data'

const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nexa Rx | Personalized Telehealth Care',
  description:
    'Connect online with licensed clinicians for medical weight management, hormone health, and select prescription therapies. Availability varies by state.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Nexa Rx | Personalized Telehealth Care',
    description: 'Licensed clinical care. Clear pricing. Qualified U.S. pharmacy fulfillment.',
    url: siteUrl,
    siteName: 'Nexa Rx',
    type: 'website',
  },
  robots: isPreview ? { index: false, follow: true } : { index: true, follow: true },
}

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexa Rx',
    url: siteUrl,
    description:
      'Personalized telehealth for medical weight management, hormone health, and select prescription therapies.',
  }

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
