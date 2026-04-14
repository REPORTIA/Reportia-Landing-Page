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
    title: 'Reporta la incidencia',
    description: 'Toma una foto, describe el problema y envía tu reporte desde la app o la web.',
  },
  {
    id: 2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'La municipalidad la atiende',
    description: 'El área responsable recibe tu reporte y coordina la solución.',
  },
  {
    id: 3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Recibe la resolución',
    description: 'Te notificamos cuando tu reporte ha sido atendido y resuelto.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works section">
      <div className="container">
        <h2 className="section-title">Cómo funciona</h2>
        <p className="section-subtitle">Tres pasos simples para mejorar tu ciudad</p>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={step.id} className="how-it-works__step-wrapper">
              <div className="how-it-works__step">
                <div className="how-it-works__icon-wrapper">
                  <div className="how-it-works__icon">{step.icon}</div>
                  {index < steps.length - 1 && (
                    <div className="how-it-works__connector" aria-hidden="true" />
                  )}
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
