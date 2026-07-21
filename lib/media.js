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
}

export const programImages = {
  'medical-weight-loss': media.weightLoss,
  'mens-hormone-health': media.trt,
  'womens-hormone-health': media.hrt,
  'peptide-therapy': media.peptides,
}

