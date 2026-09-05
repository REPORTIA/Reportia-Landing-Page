import './HowItWorks.css'

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const steps = [
  {
    number: '01',
    title: 'Reporta la incidencia',
    description: 'Toma una foto, describe lo que ves y envía el reporte desde la app o por el chatbot de WhatsApp.',
    icon: (
      <svg {...iconProps}>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Un voluntario lo acepta',
    description: 'La red de voluntarios cerca de tu zona recibe la oferta y uno de ellos decide gestionarla.',
    icon: (
      <svg {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m16 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Gestiona y verifica',
    description: 'El voluntario resuelve la incidencia y envía evidencia fotográfica a un supervisor, que la acepta o la rechaza.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Ambos ganan puntos',
    description: 'Si el reporte se verifica, quien reportó y quien resolvió suman puntos y suben de nivel en la comunidad.',
    icon: (
      <svg {...iconProps}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works section section--surface">
      <div className="container">
        <div className="section-head">
          <span className="overline">Cómo funciona</span>
          <h2 className="section-title">Del reporte a la solución en cuatro pasos</h2>
          <p className="section-lead">
            No hay una oficina detrás. Los vecinos reportan y otros vecinos certificados resuelven,
            con un supervisor que verifica cada cierre.
          </p>
        </div>

        <ol className="how-it-works__steps">
          {steps.map((step) => (
            <li key={step.number} className="how-it-works__step">
              <div className="how-it-works__step-top">
                <span className="how-it-works__number t-num">{step.number}</span>
                <span className="how-it-works__icon">{step.icon}</span>
              </div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
