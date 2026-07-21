import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'

const program = programs.find((item) => item.slug === 'womens-hormone-health')

export const metadata = {
  title: "Women's Hormone Health | Nexa Rx",
  description: 'Menopause and hormone care with personalized evaluation and treatment options.',
  alternates: { canonical: '/womens-hormone-health' },
}

export default function Page() {
  return <ProgramPage program={program} />
}
