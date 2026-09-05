import { useEffect, useState } from 'react'
import './WhatCanReport.css'
import { getCategories } from '../api'

const iconProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

/* Vocabulario cerrado `CategoryIcon` del backend, dibujado con Lucide a trazo 1.75 */
const ICONS = {
  Trash2: (
    <svg {...iconProps}>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  ),
  Construction: (
    <svg {...iconProps}>
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  ),
  Trees: (
    <svg {...iconProps}>
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  ),
  Lightbulb: (
    <svg {...iconProps}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
  AlertTriangle: (
    <svg {...iconProps}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
  HeartPulse: (
    <svg {...iconProps}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  ),
  MoreHorizontal: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  ),
  Droplets: (
    <svg {...iconProps}>
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  ),
  Car: (
    <svg {...iconProps}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
  Volume2: (
    <svg {...iconProps}>
      <path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.1 7.9H3.4A1.4 1.4 0 0 0 2 9.3v5.4a1.4 1.4 0 0 0 1.4 1.4h2.7l3.7 3.7a.7.7 0 0 0 1.2-.5Z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
      <path d="M19.4 5.7a9 9 0 0 1 0 12.6" />
    </svg>
  ),
  Dog: (
    <svg {...iconProps}>
      <path d="M11.25 16.25h1.5L12 17z" />
      <path d="M16 14v.5" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
      <path d="M8 14v.5" />
      <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
    </svg>
  ),
  ShieldAlert: (
    <svg {...iconProps}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  ),
  Wrench: (
    <svg {...iconProps}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
}

/* Icono genérico cuando la categoría no trae uno */
const GENERIC_ICON = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
)

/* Ejemplos por categoría. Las categorías nuevas del backend salen sin ejemplo. */
const EXAMPLES = {
  'Residuos Sólidos': 'Basura acumulada, desmonte en la vía',
  'Infraestructura Vial': 'Baches, veredas rotas, señalización caída',
  'Áreas Verdes': 'Parques sin riego, árboles caídos',
  'Alumbrado Público': 'Postes apagados, cables sueltos',
  'Contaminación Ambiental': 'Humo, ruido, vertidos en la calle',
  'Salud Pública': 'Focos de plagas, agua estancada',
  Otros: 'Lo que no encaje en las demás',
}

/* Respaldo si el catálogo no responde: las seis categorías base */
const FALLBACK = [
  { id: 1, name: 'Residuos Sólidos', icon: 'Trash2' },
  { id: 2, name: 'Infraestructura Vial', icon: 'Construction' },
  { id: 3, name: 'Áreas Verdes', icon: 'Trees' },
  { id: 4, name: 'Alumbrado Público', icon: 'Lightbulb' },
  { id: 5, name: 'Contaminación Ambiental', icon: 'AlertTriangle' },
  { id: 6, name: 'Salud Pública', icon: 'HeartPulse' },
]

const WORDS = ['', 'Una', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez', 'Once', 'Doce']
const countWord = (n) => WORDS[n] ?? String(n)

/* «Residuos Sólidos» → «Residuos sólidos» (solo la primera en mayúscula, como pide el sistema) */
const sentenceCase = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

export default function WhatCanReport() {
  const [categories, setCategories] = useState(FALLBACK)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    getCategories({ signal: controller.signal })
      .then((list) => {
        if (!Array.isArray(list)) return
        // Solo categorías activas y con icono del vocabulario; las de prueba del backend no traen icono
        const usable = list.filter((c) => c.isActive && c.icon)
        if (usable.length > 0) setCategories(usable)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') console.error('Error cargando categorías:', err)
      })
    return () => controller.abort()
  }, [])

  return (
    <section id="que-reportar" className="what-can-report section">
      <div className="container">
        <div className="section-head">
          <span className="overline">Qué reportar</span>
          <h2 className="section-title">{countWord(categories.length)} categorías, una sola app</h2>
          <p className="section-lead">
            Cada reporte entra en una categoría para que llegue al voluntario que sabe resolverlo.
          </p>
        </div>

        <div className="what-can-report__grid">
          {categories.map((cat) => {
            const active = activeCategory === cat.id
            const example = EXAMPLES[cat.name]
            return (
              <button
                key={cat.id}
                type="button"
                className={`what-can-report__card ${active ? 'what-can-report__card--active' : ''}`}
                onClick={() => setActiveCategory(active ? null : cat.id)}
                aria-pressed={active}
              >
                <span className="what-can-report__icon">{ICONS[cat.icon] ?? GENERIC_ICON}</span>
                <span className="what-can-report__label">{sentenceCase(cat.name)}</span>
                {example && <span className="what-can-report__example">{example}</span>}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
