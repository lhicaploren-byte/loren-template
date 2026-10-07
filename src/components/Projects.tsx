import { mobileApps, type AppProject } from '@/data/projects'

function AppCard({ app }: { app: AppProject }) {
  return (
    <li
      className="app-card"
      style={{ ['--app-color' as string]: app.accentColor }}
    >
      <div className="app-card__img-wrap">
        {app.imageSrc ? (
          <img
            className="app-card__img"
            src={app.imageSrc}
            alt={`${app.name} screenshot`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="app-card__img-placeholder" aria-hidden="true">
            <span className="app-card__img-initials">
              {app.name
                .split(' ')
                .map((w) => w[0])
                .join('')
                .slice(0, 2)}
            </span>
          </div>
        )}
        <span className="app-card__badge">{app.badge}</span>
        <span className="app-card__img-fade" aria-hidden="true" />
      </div>

      <div className="app-card__body">
        <h3 className="app-card__name">{app.name}</h3>
        <p className="app-card__tagline">{app.tagline}</p>
        <p className="app-card__desc">{app.description}</p>

        <ul className="app-card__stats" role="list">
          {app.stats.map((stat) => (
            <li key={stat.label} className="app-card__stat">
              <span className="app-card__stat-value">{stat.value}</span>
              <span className="app-card__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function AppsSection() {
  return (
    <section
      className="projects projects--apps"
      aria-label="Portfolio project"
      data-reveal
    >
      <header className="projects__header">
        <span className="projects__eyebrow">Portfolio Project</span>

        <h2 className="projects__headline">
          Patient Data Entry &amp; Records Management
        </h2>

        <p className="projects__subhead">
          A sample healthcare data management project demonstrating accurate
          patient identification, organized record keeping, and careful data
          entry using Microsoft Excel and fictional sample data.
        </p>
      </header>

      <div className="projects__panel">
        <ul className="projects__apps" role="list">
          {mobileApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Projects() {
  return <AppsSection />
}
