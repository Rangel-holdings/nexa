import ProgramPage from '../../components/ProgramPage'
import { programs } from '../../lib/site-data'

const program = programs.find((item) => item.slug === 'peptide-therapy')

export const metadata = {
  title: 'Peptide Therapy | Nexa Rx',
  description:
    'Clinician-prescribed peptide therapy for eligible patients. Prescription-only, fulfilled by applicable qualified U.S. pharmacy channels.',
  alternates: { canonical: '/peptide-therapy' },
}

export default function Page() {
  return <ProgramPage program={program} />
}
