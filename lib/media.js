/** Central media map - keep paths in one place for cache-friendly reuse. */

export const media = {
  heroLifestyle: {
    src: '/images/hero-lifestyle.png',
    alt: 'Modern wellness lifestyle',
    width: 1600,
    height: 1200,
  },
  heroProduct: {
    src: '/images/hero-product.png',
    alt: 'Nexa Rx premium packaging',
    width: 1200,
    height: 1200,
  },
  packaging: {
    src: '/images/product-packaging.png',
    alt: 'Nexa Rx discreet packaging',
    width: 1200,
    height: 1200,
  },
  careJourney: {
    src: '/images/care-journey.png',
    alt: 'Nexa Rx care journey overview',
    width: 1600,
    height: 900,
  },
  careStarts: {
    src: '/images/care-starts-products.png',
    alt: 'Nexa Rx treatment packaging',
    width: 1600,
    height: 1000,
  },
  weightLoss: {
    src: '/images/treatment-weightloss.png',
    alt: 'Medical weight loss care',
    width: 1200,
    height: 900,
  },
  trt: {
    src: '/images/treatment-trt.png',
    alt: "Men's hormone health care",
    width: 1200,
    height: 900,
  },
  hrt: {
    src: '/images/treatment-hrt.png',
    alt: "Women's hormone health care",
    width: 1200,
    height: 900,
  },
  peptides: {
    src: '/images/treatment-peptides.png',
    alt: 'Peptide therapy care',
    width: 1200,
    height: 900,
  },
  howItWorksHero: {
    src: '/images/how-it-works-hero.webp',
    alt: 'Patient reviewing a personalized telehealth care plan',
    width: 1600,
    height: 1200,
  },
  howStep01: {
    src: '/images/how-step-01.webp',
    alt: 'Choose a care program',
    width: 800,
    height: 800,
  },
  howStep02: {
    src: '/images/how-step-02.webp',
    alt: 'Complete secure clinical intake',
    width: 800,
    height: 800,
  },
  howStep03: {
    src: '/images/how-step-03.webp',
    alt: 'Meet a licensed clinician',
    width: 800,
    height: 800,
  },
  howStep04: {
    src: '/images/how-step-04.webp',
    alt: 'Receive a clinical decision',
    width: 800,
    height: 800,
  },
  howStep05: {
    src: '/images/how-step-05.webp',
    alt: 'Pharmacy fulfillment and discreet delivery',
    width: 800,
    height: 800,
  },
  howStep06: {
    src: '/images/how-step-06.webp',
    alt: 'Ongoing care and follow-up support',
    width: 800,
    height: 800,
  },
}

export const howItWorksStepImages = [
  media.howStep01,
  media.howStep02,
  media.howStep03,
  media.howStep04,
  media.howStep05,
  media.howStep06,
]

export const programImages = {
  'medical-weight-loss': media.weightLoss,
  'mens-hormone-health': media.trt,
  'womens-hormone-health': media.hrt,
  'peptide-therapy': media.peptides,
}

