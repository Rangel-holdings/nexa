import PatientLogin from '../../components/PatientLogin'

export const metadata = {
  title: 'Patient Login | Nexa Rx',
  description: 'Secure patient login for Nexa Rx care updates, messaging, and refill support access.',
  alternates: { canonical: '/patient-login' },
}

export default function Page() {
  return <PatientLogin />
}
