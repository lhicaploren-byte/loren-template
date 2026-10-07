import { mobileApps } from '@/data/projects'

export default function ProjectsGrid() {
  const project = mobileApps[0]

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>

        <h1 className="pgrid__title" id="projects-title">
          Healthcare support backed by real attention to detail.
        </h1>

        <p className="pgrid__lede">
          A portfolio project demonstrating accurate medical data entry and
          organized patient records management using Microsoft Excel.
        </p>
      </header>

      <div className="home__glass pgrid__glass">
        <div className="bento bento--projects">
          <article className="bento__card bento__card--wide">
            <div className="bento__head">
              <span className="bento__icon" aria-hidden="true">
                <span style={{ fontSize: '1.25rem' }}>📋</span>
              </span>

              <span className="bento__title">{project.name}</span>

              <span className="bento__desc">{project.description}</span>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <span className="sgrid__chip">{project.badge}</span>

              <p style={{ marginTop: '1rem' }}>
                <strong>{project.tagline}</strong>
              </p>

              <ul
                className="sgrid__bullets"
                role="list"
                style={{ marginTop: '1rem' }}
              >
                {project.stats.map((stat) => (
                  <li key={stat.label} className="sgrid__bullet">
                    <span>
                      <strong>{stat.value}</strong> — {stat.label}
                    </span>
                  </li>
                ))}
              </ul>

              <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
                Portfolio demonstration using fictional sample patient data.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
