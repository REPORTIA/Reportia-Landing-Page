import { useState } from 'react'
import './WhatCanReport.css'

const categories = [
  {
    id: 'residuos',
    label: 'Residuos Sólidos',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
  },
  {
    id: 'infraestructura',
    label: 'Infraestructura Vial',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: 'areas-verdes',
    label: 'Áreas Verdes',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.39" />
        <path d="M7 9.14C5.45 11.66 5.28 14.53 6 17" />
        <path d="M4.82 19.39C3 22.39 12 22 12 22s8-2.39 5.5-8.5c-.47-1.11-1.14-2.09-2-2.92" />
        <path d="M12 22V12" />
        <path d="M12 12C12 7 17 4 20 3" />
        <path d="M12 12C12 7 7 4 4 3" />
      </svg>
    ),
  },
  {
    id: 'alumbrado',
    label: 'Alumbrado Público',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    id: 'contaminacion',
    label: 'Contaminación Ambiental',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    ),
  },
  {
    id: 'salud',
    label: 'Salud Pública',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
]

export default function WhatCanReport() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <section id="que-reportar" className="what-can-report section">
      <div className="container">
        <h2 className="section-title">¿Qué puedes reportar?</h2>
        <p className="section-subtitle">Selecciona la categoría que mejor describa la incidencia</p>

        <div className="what-can-report__grid">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`what-can-report__card ${activeCategory === cat.id ? 'what-can-report__card--active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              <div className="what-can-report__icon">{cat.icon}</div>
              <span className="what-can-report__label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
