'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PatientCenter() {
  const [session, setSession] = useState(null)
  const [draft, setDraft] = useState(null)

  useEffect(() => {
    try {
      setSession(JSON.parse(localStorage.getItem('nexa_session_v2') || 'null'))
      setDraft(JSON.parse(localStorage.getItem('nexa_intake_draft_v2') || 'null'))
    } catch {
      setSession(null)
      setDraft(null)
    }
  }, [])

  if (!session && !draft) {
    return (
      <div className="portal-empty">
        <h1>Patient Center</h1>
        <p>Complete eligibility check or log in to continue.</p>
        <div className="flow-nav">
          <Link href="/check-eligibility" className="btn btn--primary">
            Check Eligibility
          </Link>
          <Link href="/patient-login" className="btn btn--outline">
            Patient Login
          </Link>
        </div>
      </div>
    )
  }

  const name = draft?.name?.split(' ')[0] || session?.email?.split('@')[0] || 'Member'
  const program = draft?.program || 'Your care plan'

  return (
    <div className="portal">
      <main className="container portal__main">
        <section className="portal-hero">
          <p className="eyebrow">Patient Center</p>
          <h1>Welcome back, {name}.</h1>
          <p>Your clinician review status and next steps live here.</p>
        </section>
        <div className="portal-grid">
          <article className="portal-card">
            <h2>Current program</h2>
            <p className="portal-stat">{program}</p>
            <span className="pill">Pending clinician review</span>
          </article>
          <article className="portal-card">
            <h2>Next step</h2>
            <p>Watch your email for review updates. Typical review window is within 24 hours.*</p>
          </article>
          <article className="portal-card portal-card--wide">
            <h2>Care team</h2>
            <p>
              Message support unlocks after clinician approval. For now, reply to your confirmation email with
              questions.
            </p>
          </article>
        </div>
      </main>
    </div>
  )
}
