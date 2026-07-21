'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { programs } from '../lib/site-data'
import { programImages, media } from '../lib/media'
import SiteImage from './SiteImage'

export default function EligibilityForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    program: '',
    state: '',
    name: '',
    email: '',
    phone: '',
  })
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!form.program || !form.state || !form.name.trim() || !form.email.trim()) {
      setError('Please complete program, state, name, and email.')
      return
    }
    localStorage.setItem('nexa_intake_draft_v2', JSON.stringify({ ...form, at: new Date().toISOString() }))
    router.push('/patient-center')
  }

  return (
    <section className="container eligibility-layout">
      <div className="eligibility-layout__copy">
        <p className="eyebrow">Check Eligibility</p>
        <h1>Start with a quick eligibility check.</h1>
        <p className="lede">
          Select your program, state, and contact details. Medical intake happens in the secure clinical portal.
        </p>

        <div className="flow-treats" style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          {programs.map((program) => {
            const image = programImages[program.slug]
            const selected = form.program === program.title
            return (
              <button
                key={program.slug}
                type="button"
                className={`flow-treat ${selected ? 'is-active' : ''}`}
                onClick={() => setForm({ ...form, program: program.title })}
              >
                <span
                  className="flow-treat__img"
                  style={image ? { backgroundImage: `url(${image.src})` } : undefined}
                  aria-hidden="true"
                />
                <span className="flow-treat__body">
                  <span className="pill">{program.category}</span>
                  <strong>{program.navLabel}</strong>
                  <em>{program.price}</em>
                </span>
              </button>
            )
          })}
        </div>

        <form className="flow-form" onSubmit={submit} style={{ marginTop: '1rem', textAlign: 'left' }}>
          <label>
            Care program
            <select
              value={form.program}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
              style={{ border: '1px solid var(--line)', borderRadius: '0.85rem', padding: '0.85rem 0.95rem' }}
            >
              <option value="">Select program</option>
              {programs.map((program) => (
                <option key={program.slug} value={program.title}>
                  {program.navLabel}
                </option>
              ))}
            </select>
          </label>
          <label>
            State
            <input value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} placeholder="Florida" />
          </label>
          <label>
            Full name
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Alex Rivera" />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
            />
          </label>
          <label>
            Phone (optional)
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(305) 555-0142" />
          </label>
          {error && <p className="flow-error">{error}</p>}
          <button className="btn btn--primary btn--lg" type="submit">
            Check Eligibility
          </button>
        </form>
        <p className="hero__stats-note" style={{ marginTop: '1rem' }}>
          Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed clinician.
          Availability varies by state and treatment.
        </p>
      </div>

      <div className="eligibility-layout__media" data-reveal="right" aria-hidden="true">
        <SiteImage
          src={media.heroLifestyle.src}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 0px, 42vw"
          quality={70}
        />
      </div>
    </section>
  )
}
