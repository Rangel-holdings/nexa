import { Manrope, Cormorant_Garamond } from 'next/font/google'
import '../src/index.css'
import { siteUrl } from '../lib/site-data'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-face',
  weight: ['400', '500', '600', '700', '800'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-face',
  weight: ['500', '600'],
  style: ['normal', 'italic'],
})

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
    images: [
      {
        url: '/images/hero-lifestyle.png',
        width: 1600,
        height: 1200,
        alt: 'Nexa Rx telehealth care',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  authors: [{ name: 'Ombaye' }],
  creator: 'Ombaye',
  publisher: 'Nexa Rx',
  robots: isPreview ? { index: false, follow: true } : { index: true, follow: true },
}

export const viewport = {
  themeColor: '#0F1722',
  width: 'device-width',
  initialScale: 1,
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
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
