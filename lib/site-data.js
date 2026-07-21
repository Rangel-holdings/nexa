export const siteUrl = 'https://nexamd.com'

export const treatmentLinks = [
  { href: '/medical-weight-loss', label: 'Medical Weight Loss' },
  { href: '/mens-hormone-health', label: "Men's Hormone Health" },
  { href: '/womens-hormone-health', label: "Women's Hormone Health" },
  { href: '/peptide-therapy', label: 'Peptide Therapy' },
]

export const shopLinks = [
  { href: '/supplements', label: 'All Supplements' },
  { href: '/supplements/bundles', label: 'Bundles' },
  { href: '/supplements/subscribe-and-save', label: 'Subscribe & Save' },
  { href: '/supplements/order-support', label: 'Order Support' },
]

export const programs = [
  {
    slug: 'medical-weight-loss',
    navLabel: 'Medical Weight Loss',
    category: 'MEDICAL WEIGHT LOSS',
    title: 'Clinician-Guided Weight Management',
    description: 'Personalized medical evaluation with approved medication options.',
    price: 'From $249/mo',
    highlights: [
      'Program-first care, not drug-first merchandising',
      'Approved medication options based on clinical evaluation',
      'Ongoing clinical support and clear pricing before enrollment',
    ],
  },
  {
    slug: 'mens-hormone-health',
    navLabel: "Men's Hormone Health",
    category: "MEN'S HORMONE HEALTH",
    title: 'Testosterone Evaluation & Care',
    description: 'Evaluation based on symptoms, medical history, and lab results.',
    price: 'From $179/mo',
    highlights: [
      'Care begins with evaluation, not a predetermined prescription',
      'Symptoms, history, and labs reviewed by a licensed clinician',
      'Follow-up and refill support included in the active program',
    ],
  },
  {
    slug: 'womens-hormone-health',
    navLabel: "Women's Hormone Health",
    category: "WOMEN'S HORMONE HEALTH",
    title: 'Menopause & Hormone Care',
    description:
      'Personalized evaluation and treatment options based on symptoms, medical history, and lab results.',
    price: 'From $169/mo',
    highlights: [
      'Personalized menopause and hormone evaluation',
      'Treatment options based on symptoms, history, and labs',
      'Clear pricing and ongoing clinical support',
    ],
  },
  {
    slug: 'peptide-therapy',
    navLabel: 'Peptide Therapy',
    category: 'LONGEVITY / RECOVERY THERAPY',
    title: 'Clinician-Prescribed Peptide Therapy',
    description:
      'Online medical evaluation for select peptide therapies. When prescribed, treatment is fulfilled by a qualified U.S. compounding pharmacy or outsourcing facility, as applicable. Availability varies by therapy and state.',
    price: 'Confirmed before enrollment*',
    priceNote:
      '*Final price depends on the prescribed therapy, dosage, pharmacy, shipping, and state. All charges and recurring terms are shown before enrollment.',
    highlights: [
      'Prescription-only peptide therapies for eligible patients',
      'Nexa Rx does not sell research-use-only products',
      'Fulfilled through applicable licensed U.S. pharmacy channels',
    ],
  },
]

export const careSteps = [
  {
    n: '01',
    title: 'Choose a care program',
    text: "Select medical weight management, men's hormone health, women's hormone health, or peptide therapy.",
  },
  {
    n: '02',
    title: 'Complete secure intake',
    text: 'Provide medical information inside the secure clinical portal — not on the public marketing site.',
  },
  {
    n: '03',
    title: 'Meet a licensed clinician',
    text: 'The clinician reviews medical history, symptoms, labs when required, and treatment eligibility.',
  },
  {
    n: '04',
    title: 'Receive a clinical decision',
    text: 'A prescription is issued only when medically appropriate. Treatment is not guaranteed.',
  },
  {
    n: '05',
    title: 'Pharmacy fulfillment',
    text: 'When prescribed, medication is dispensed by the applicable licensed pharmacy and shipped where legally available.',
  },
  {
    n: '06',
    title: 'Ongoing care',
    text:
      'Follow-up visits, clinical messaging, refill coordination, and lab cadence continue as included in your active program plan.',
  },
]

export const pricingPrograms = [
  {
    title: 'Weight Management Program',
    subtitle: 'Clinician-guided weight management with approved medication options when clinically appropriate',
    dueToday: '$0',
    recurring: '$249/month (membership billing cycle)',
    consultationFee:
      '$0 membership evaluation fee if prescribed. A non-refundable consultation evaluation fee of $49 applies only if clinician determines not eligible.',
    medicationCost:
      'Starts at $249/month. Dosage changes do not change membership pricing unless high-strength tier is clinically customized.',
    labCost: '$0 — Included in membership evaluation if required labs are ordered through our partner clinical network.',
    shippingCost: '$0 — Free temperature-controlled shipping & priority cold-chain supplies.',
    supportInclusions: 'Ongoing follow-up visits, clinical titration planning, clinical messaging, and monthly refill support.',
    cancellation: 'Cancel anytime via the Patient Center prior to your next recurring billing cycle.',
    limitations: 'Availability varies by state regulations, clinical evaluation outcome, and compounding pharmacy guidelines.',
  },
  {
    title: "Men's Hormone Health",
    subtitle: 'Testosterone evaluation, treatment options, and clinical monitoring',
    dueToday: '$0',
    recurring: '$179/month',
    consultationFee: 'Included in active monthly care plan. A $49 fee applies if evaluated as not eligible.',
    medicationCost: 'Starts at $179/month.',
    labCost: 'Lab diagnostics required. Ordered locally or home kit options available.',
    shippingCost: '$0 — Discreet delivery and necessary administrative/medical supplies included.',
    supportInclusions: 'Ongoing lab evaluation monitoring, physician dosing adjustments, and clinical messaging support.',
    cancellation: 'No long-term contracts. Cancel prior to the next billing cycle.',
    limitations: 'State regulations apply. Patient must be 18+ and display clinical indication on baseline lab reports.',
  },
  {
    title: "Women's Hormone Health",
    subtitle: 'Menopause and hormone evaluation with personalized treatment options',
    dueToday: '$0',
    recurring: '$169/month',
    consultationFee: 'Included in active monthly care plan. A $49 fee applies if evaluated as not eligible.',
    medicationCost: 'Starts at $169/month.',
    labCost: 'Diagnostic check ordered if clinically indicated.',
    shippingCost: '$0 — Discreet delivery of prescription options.',
    supportInclusions: 'Symptom-based titration review, physician support, and clinical messaging.',
    cancellation: 'Cancel anytime prior to next recurring batch formulation.',
    limitations: 'Subject to clinical eligibility and state pharmacy delivery rules.',
  },
  {
    title: 'Peptide Therapy',
    subtitle: 'Clinician-prescribed peptide therapies via qualified U.S. pharmacy channels',
    dueToday: '$0',
    recurring: 'Confirmed before enrollment*',
    consultationFee: 'Included in membership. A $49 fee applies if evaluated as not eligible.',
    medicationCost:
      'Confirmed before enrollment* — final price depends on prescribed therapy, dosage, pharmacy, shipping, and state.',
    labCost: 'Lab work checked if clinically indicated.',
    shippingCost: '$0 — Free expedited shipping & application supplies.',
    supportInclusions: 'Clinician support, treatment monitoring, and refill coordinator services.',
    cancellation: 'Cancel subscription before next recurring compound preparation begins.',
    limitations: 'State availability varies by specific compound formulation.',
  },
]

export const faqItems = [
  {
    q: 'Are Nexa Rx peptide therapies prescription-only?',
    a: 'Yes. Peptide therapies offered through the Nexa Rx clinical program require a medical evaluation and a valid prescription from a licensed clinician.',
  },
  {
    q: 'Does Nexa Rx sell research-use-only peptides?',
    a: 'No. Nexa Rx does not sell research-use-only products. Peptide therapies offered through the clinical program require a medical evaluation and prescription and are dispensed for eligible patients through the applicable pharmacy channel.',
  },
  {
    q: 'Are compounded peptide therapies FDA-approved?',
    a: 'Compounded medications are not FDA-approved as finished branded products. They are prepared by licensed U.S. compounding pharmacies or outsourcing facilities under applicable federal standards.',
  },
  {
    q: 'What is the difference between a 503A compounding pharmacy and a 503B outsourcing facility?',
    a: '503A pharmacies compound medications for individual patient prescriptions. 503B outsourcing facilities operate under stricter FDA oversight and can produce larger quantities. The applicable pharmacy channel depends on your prescribed therapy.',
  },
  {
    q: 'Which treatments use FDA-approved medications?',
    a: 'Our clinicians may prescribe both FDA-approved medications and, where appropriate, compounded therapies. Your clinician will explain the status of any medication prescribed to you.',
  },
  {
    q: 'Which costs are included in the monthly price?',
    a: 'The pricing page shows a full breakdown for each program: consultation fee, medication cost, lab fees if required, supplies, shipping, follow-up visits, clinical messaging, and refill support. All charges are shown before enrollment.',
  },
  {
    q: 'Is a prescription guaranteed?',
    a: 'No. Prescription treatment is not guaranteed. Eligibility and treatment decisions are made solely by a licensed clinician based on your medical evaluation.',
  },
  {
    q: 'Which states are currently supported for each program?',
    a: 'State availability varies by program and treatment. You will see availability for your state during the eligibility check.',
  },
  {
    q: 'Are supplements part of my prescription treatment plan?',
    a: 'No. Dietary supplements are non-prescription products sold separately from medical treatment. Purchasing supplements does not affect your clinical eligibility or prescribing decisions.',
  },
  {
    q: 'Can I buy supplements without becoming a Nexa Rx patient?',
    a: 'Yes. Supplements are available through our Shop without a clinical intake or prescription.',
  },
  {
    q: 'How do I cancel a recurring treatment or supplement order?',
    a: 'You can cancel through your Patient Center or by contacting our support team. Cancellation terms, timing, and any non-refundable fees are shown before enrollment or purchase.',
  },
  {
    q: 'Where is my medical information collected and stored?',
    a: 'All medical intake occurs inside a secure clinical portal — not on the public marketing website. Health information is not shared with advertising platforms.',
  },
]

export const supplements = [
  {
    slug: 'metabolic-support',
    name: 'Metabolic Support Daily',
    category: 'Dietary Supplement',
    oneTimePrice: '$59',
    subscribePrice: '$49',
    renewal: 'Every 30 days',
    description: 'Daily wellness support formula for healthy metabolic function.',
    facts: ['Serving Size: 2 capsules', 'Servings Per Container: 30', 'Key ingredients: berberine complex, chromium, alpha lipoic acid'],
  },
  {
    slug: 'sleep-recovery',
    name: 'Sleep + Recovery Complex',
    category: 'Dietary Supplement',
    oneTimePrice: '$54',
    subscribePrice: '$45',
    renewal: 'Every 30 days',
    description: 'Nighttime support blend for recovery, sleep quality, and routine consistency.',
    facts: ['Serving Size: 2 capsules', 'Servings Per Container: 30', 'Key ingredients: magnesium glycinate, L-theanine, apigenin'],
  },
  {
    slug: 'hydration-electrolyte',
    name: 'Hydration + Electrolyte Mix',
    category: 'Dietary Supplement',
    oneTimePrice: '$42',
    subscribePrice: '$36',
    renewal: 'Every 30 days',
    description: 'Electrolyte formula to support hydration and daily performance.',
    facts: ['Serving Size: 1 scoop', 'Servings Per Container: 30', 'Key ingredients: sodium citrate, potassium citrate, magnesium'],
  },
  {
    slug: 'omega-balance',
    name: 'Omega Balance Softgels',
    category: 'Dietary Supplement',
    oneTimePrice: '$48',
    subscribePrice: '$40',
    renewal: 'Every 30 days',
    description: 'Purified omega blend for everyday cardiovascular and wellness support.',
    facts: ['Serving Size: 2 softgels', 'Servings Per Container: 30', 'Key ingredients: EPA, DHA, mixed tocopherols'],
  },
]
