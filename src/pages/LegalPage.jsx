import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LegalPage.css'

/**
 * Plantilla de página legal: portada con kicker, título, fecha y bajada;
 * índice de secciones; secciones numeradas en dos columnas.
 *
 * sections: [{ id, title, children }]
 */
export default function LegalPage({ kicker, title, intro, updated, sections, sibling }) {
  useEffect(() => {
    document.title = `${title} — Reportia`
  }, [title])

  return (
    <main className="legal">
      <div className="container">
        <header className="legal__top">
          <span className="overline">{kicker}</span>
          <h1 className="legal__title">{title}</h1>
          <p className="legal__intro">{intro}</p>
          <p className="legal__meta">
            Última actualización: {updated}
            {sibling && (
              <>
                {' · '}
                <Link to={sibling.to}>{sibling.label}</Link>
              </>
            )}
          </p>
        </header>

        <nav className="legal__toc" aria-label="Contenido">
          <ol>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span className="legal__toc-num t-num">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="legal__section">
            <div className="legal__num t-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="legal__body">
              <h2 className="legal__h2">{s.title}</h2>
              {s.children}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
