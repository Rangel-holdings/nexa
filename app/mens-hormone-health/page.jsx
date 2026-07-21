import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'

const program = programs.find((item) => item.slug === 'mens-hormone-health')

export const metadata = {
  title: "Men's Hormone Health | Nexa Rx",
  description: 'Testosterone evaluation and care with clinician-led assessment and ongoing support.',
  alternates: { canonical: '/mens-hormone-health' },
}

export default function Page() {
  return <ProgramPage program={program} />
}
