import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

/* ---------- Your approach ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Understand',
    body: 'Understand your workflow, administrative needs, and the type of healthcare support required.',
    Icon: MagnetStraight,
    chips: ['Listen', 'Organize', 'Clarify'],
  },
  {
    index: '02',
    label: 'Support',
    body: 'Handle assigned administrative, research, and data tasks with accuracy and attention to detail.',
    Icon: Timer,
    chips: ['Accurate', 'Efficient', 'Reliable'],
  },
  {
    index: '03',
    label: 'Deliver',
    body: 'Provide organized work that helps keep healthcare information and administrative tasks on track.',
    Icon: Trophy,
    chips: ['Quality', 'Confidential', 'Consistent'],
  },
]

/* ---------- Services ---------- */

type Service = {
  index: string
  title: string
  description: string
  chip: string
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Medical Administrative Support',
    description:
      'Reliable administrative assistance designed to help healthcare professionals stay organized and focused.',
    chip: 'Administrative Support',
    bullets: [
      'Administrative task support',
      'Healthcare documentation organization',
      'Accurate and organized workflow support',
    ],
  },
  {
    index: '02',
    title: 'Healthcare Research',
    description:
      'Careful healthcare-related research and information gathering with attention to accuracy and relevance.',
    chip: 'Healthcare Research',
    bullets: [
      'Healthcare information research',
      'Information gathering and organization',
      'Accuracy-focused research support',
    ],
  },
  {
    index: '03',
    title: 'Medical Data Entry',
    description:
      'Accurate entry, organization, and management of healthcare and patient data.',
    chip: 'Medical Data',
    bullets: [
      'Accurate data entry',
      'Patient record organization',
      'Confidential information handling',
    ],
  },
]

/* ---------- Page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>

        <h1 className="pgrid__title" id="services-title">
          Reliable support for healthcare professionals.
        </h1>

        <p className="pgrid__lede">
          Providing dependable medical administrative, research, and data support
          with accuracy, organization, and confidentiality.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* Three-step approach */}

        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My Approach</span>

            <h2 className="sgrid__method-title" id="method-title">
              Understand. Support.
              <br />
              <span>Deliver.</span>
            </h2>

            <p className="sgrid__method-sub">
              A simple approach focused on understanding your needs, completing
              tasks accurately, and delivering organized, dependable support.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon

              return (
                <li
                  key={s.index}
                  className="sgrid__stage"
                  style={{ '--i': i } as CSSProperties}
                >
                  <span className="sgrid__stage-ghost" aria-hidden="true">
                    {s.index}
                  </span>

                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>

                  <h3 className="sgrid__stage-label">{s.label}.</h3>

                  <p className="sgrid__stage-body">{s.body}</p>

                  <ul
                    className="sgrid__stage-chips"
                    role="list"
                    aria-label={`${s.label} qualities`}
                  >
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">
                        {c}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Services */}

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">
              How I can support your workflow.
            </h2>

            <p className="sgrid__offers-sub">
              Practical healthcare support built around accuracy and
              confidentiality.
            </p>
          </div>

          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li
                key={s.title}
                className="bento__card sgrid__service"
              >
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <span className="sgrid__service-index">
                      {s.index} / 03
                    </span>
                  </span>

                  <span className="bento__title">{s.title}</span>

                  <span className="bento__desc">
                    {s.description}
                  </span>
                </span>

                <span className="sgrid__chip" aria-hidden="true">
                  {s.chip}
                </span>

                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle
                        size={15}
                        weight="duotone"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
