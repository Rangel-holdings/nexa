import { programStateAvailability, stateAvailabilityNote } from '../lib/site-data'

const statusLabels = {
  available: 'Available',
  review: 'Clinical review required',
  unavailable: 'Not currently available',
}

export default function StateAvailability({ compact = false }) {
  return (
    <section className={compact ? 'state-availability state-availability--compact' : 'section state-availability'}>
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">State availability</p>
          <h2>Program availability by state</h2>
          <p className="section__sub">{stateAvailabilityNote}</p>
        </div>

        <div className="state-availability__grid">
          {programStateAvailability.map((program) => (
            <article key={program.slug} className="state-card">
              <h3>{program.label}</h3>
              <p className="state-card__summary">{program.summary}</p>
              <ul className="state-card__groups">
                {program.groups.map((group) => (
                  <li key={group.status}>
                    <strong>{statusLabels[group.status]}</strong>
                    <span>{group.states.join(', ')}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
