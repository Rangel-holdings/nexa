'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getProgramAvailabilityStatus, programs } from '../lib/site-data'
import { programImages, media } from '../lib/media'
import SiteImage from './SiteImage'

const availabilityMessages = {
  available: 'This program is currently available in your state.',
  review: 'This program may require additional clinical review in your state. Continue to confirm eligibility.',
  unavailable: 'This program is not currently available in your state. Choose another program or contact support.',
}

export default function EligibilityForm() {
  const router = useRouter()
  const formRef = useRef(null)
  const [form, setForm] = useState({
    program: '',
    state: '',
    name: '',
    email: '',
    phone: '',
  })
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const progParam = params.get('program')
      if (progParam) {
        const found = programs.find(
          (p) =>
            p.slug === progParam ||
            p.title.toLowerCase().includes(progParam.toLowerCase()) ||
            p.navLabel.toLowerCase().includes(progParam.toLowerCase())
        )
        if (found) {
          setForm((prev) => ({ ...prev, program: found.title }))
          setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 350)
        }
      }
    }
  }, [])

  const handleSelectProgram = (programTitle) => {
    setForm((prev) => ({ ...prev, program: programTitle }))
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const stateInput = formRef.current.querySelector('input[placeholder="FL"]')
      if (stateInput) {
        setTimeout(() => stateInput.focus(), 400)
      }
    }
  }

  const selectedProgram = useMemo(
    () => programs.find((program) => program.title === form.program || program.navLabel === form.program),
    [form.program]
  )

  const availabilityStatus = useMemo(() => {
    if (!selectedProgram || !form.state.trim()) return null
    return getProgramAvailabilityStatus(selectedProgram.slug, form.state)
  }, [selectedProgram, form.state])

  const submit = (e) => {
    e.preventDefault()
    if (!form.program || !form.state || !form.name.trim() || !form.email.trim()) {
      setError('Please complete program, state, name, and email.')
      return
    }

    if (selectedProgram && availabilityStatus === 'unavailable') {
      setError(availabilityMessages.unavailable)
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

        <div className="flow-treats-grid" style={{ marginTop: '1.5rem', marginBottom: '1.75rem' }}>
          {programs.map((program) => {
            const image = programImages[program.slug]
            const selected = form.program === program.title || form.program === program.navLabel
            return (
              <button
                key={program.slug}
                type="button"
                className={`flow-treat-card ${selected ? 'is-selected' : ''}`}
                onClick={() => handleSelectProgram(program.title)}
              >
                <div className="flow-treat-card__media">
                  {image && (
                    <SiteImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      quality={75}
                    />
                  )}
                  {selected && (
                    <span className="flow-treat-card__selected-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Selected
                    </span>
                  )}
                </div>
                <div className="flow-treat-card__content">
                  <span className="flow-treat-card__cat">{program.category}</span>
                  <h3 className="flow-treat-card__title">{program.navLabel}</h3>
                  <div className="flow-treat-card__pricing">
                    <span className="flow-treat-card__price">{program.price}</span>
                    <span className="flow-treat-card__subline">{program.priceSubline}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <form ref={formRef} className="flow-form" onSubmit={submit} style={{ marginTop: '1rem', textAlign: 'left', scrollMarginTop: '120px' }}>
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
            State (2-letter code)
            <input
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value.toUpperCase() })}
              placeholder="FL"
              maxLength={2}
            />
          </label>
          {availabilityStatus && (
            <p className={`availability-note availability-note--${availabilityStatus}`}>
              {availabilityMessages[availabilityStatus]}
            </p>
          )}
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
          src={media.eligibilitySide.src}
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
