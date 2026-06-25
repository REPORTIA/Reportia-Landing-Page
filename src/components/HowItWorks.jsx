import './HowItWorks.css'

const steps = [
  {
    id: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Ciudadano crea reporte',
    description: 'Toma una foto, describe la incidencia y envía tu reporte desde la app o la web.',
  },
  {
    id: 2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Voluntario toma acción',
    description: 'Un voluntario visualiza la oferta de reporte y decide si acepta gestionarlo.',
  },
  {
    id: 3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: 'Gestión y validación',
    description: 'El voluntario gestiona y envía evidencia fotográfica al supervisor para su validación (acepta o rechaza).',
  },
  {
    id: 4,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Ganan puntos',
    description: 'Si se acepta el reporte, tanto el ciudadano como el voluntario ganan puntos del sistema de ludificación.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works section">
      <div className="container">
        <h2 className="section-title">Cómo funciona</h2>
        <p className="section-subtitle">Cuatro pasos simples para mejorar tu ciudad</p>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={step.id} className="how-it-works__step-wrapper">
              <div className="how-it-works__step">
                <div className="how-it-works__icon-wrapper">
                  <div className="how-it-works__icon">{step.icon}</div>
                </div>
                <h3 className="how-it-works__step-title">{step.title}</h3>
                <p className="how-it-works__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
