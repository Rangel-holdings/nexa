import PatientCenter from '../../components/PatientCenter'

export const metadata = {
  title: 'Patient Center | Nexa Rx',
  description: 'Patient center for review status, next steps, and care program tracking.',
  alternates: { canonical: '/patient-center' },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <PatientCenter />
}
