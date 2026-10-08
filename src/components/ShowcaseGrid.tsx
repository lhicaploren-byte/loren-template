export default function ShowcaseGrid() {
  return (
    <section className="pgrid" aria-labelledby="showcase-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Professional Profile</span>

        <h1 className="pgrid__title" id="showcase-title">
          Healthcare experience meets dependable virtual support.
        </h1>

        <p className="pgrid__lede">
          Medical Laboratory Scientist transitioning into Medical Virtual
          Assistance, with a focus on accuracy, organization, confidentiality,
          and reliable healthcare support.
        </p>
      </header>

      <div className="home__glass pgrid__glass">
        <div className="bento">
          <article className="bento__card bento__card--wide">
            <div className="bento__head">
              <span className="bento__title">
                Medical Virtual Assistant
              </span>

              <span className="bento__desc">
                Bringing three years of healthcare experience into
                administrative, research, and medical data support.
              </span>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <span className="sgrid__chip">Healthcare Professional</span>

              <p style={{ marginTop: '1rem' }}>
                My background as a Medical Laboratory Scientist has developed
                my attention to detail, familiarity with medical terminology,
                and ability to work carefully with healthcare information.
              </p>

              <ul
                className="sgrid__bullets"
                role="list"
                style={{ marginTop: '1.25rem' }}
              >
                <li className="sgrid__bullet">
                  <span>Medical terminology</span>
                </li>

                <li className="sgrid__bullet">
                  <span>Healthcare administration</span>
                </li>

                <li className="sgrid__bullet">
                  <span>Medical data entry</span>
                </li>

                <li className="sgrid__bullet">
                  <span>Patient record management</span>
                </li>

                <li className="sgrid__bullet">
                  <span>Laboratory data management</span>
                </li>

                <li className="sgrid__bullet">
                  <span>Confidential information handling</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
