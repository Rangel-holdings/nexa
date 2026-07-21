import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'

const program = programs.find((item) => item.slug === 'medical-weight-loss')

export const metadata = {
  title: 'Medical Weight Loss | Nexa Rx',
  description: 'Clinician-guided weight management with transparent pricing and clear eligibility steps.',
  alternates: { canonical: '/medical-weight-loss' },
}

export default function Page() {
  return <ProgramPage program={program} />
}
