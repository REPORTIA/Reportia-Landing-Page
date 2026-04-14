import './MapSection.css'

export default function MapSection() {
  return (
    <section className="map-section section">
      <div className="container">
        <h2 className="section-title">Incidencias resueltas en Lima</h2>
        <p className="section-subtitle">
          Visualiza los reportes resueltos recientemente en el mapa. No se muestra información personal de los ciudadanos.
        </p>
      </div>

      <div className="map-section__map-wrapper">
        {/* Simulated aerial map of Lima */}
        <div className="map-section__map" role="img" aria-label="Mapa de Lima con incidencias resueltas">
          <div className="map-section__overlay">
            {/* Simulated map markers */}
            {[
              { top: '25%', left: '20%' },
              { top: '40%', left: '35%' },
              { top: '55%', left: '50%' },
              { top: '30%', left: '60%' },
              { top: '65%', left: '75%' },
              { top: '20%', left: '80%' },
              { top: '70%', left: '25%' },
              { top: '45%', left: '15%' },
            ].map((pos, i) => (
              <div
                key={i}
                className="map-section__marker"
                style={{ top: pos.top, left: pos.left }}
                aria-hidden="true"
              >
                <div className="map-section__marker-dot" />
                <div className="map-section__marker-pulse" />
              </div>
            ))}
          </div>

          {/* Filter chip */}
          <div className="map-section__chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Últimos 30 días
          </div>
        </div>
      </div>
    </section>
  )
}
