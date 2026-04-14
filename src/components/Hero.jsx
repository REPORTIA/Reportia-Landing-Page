import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner container">
        {/* Left content */}
        <div className="hero__content">
          <span className="hero__badge">Municipalidad Metropolitana de Lima</span>
          <h1 className="hero__title">
            Reporta, la municipalidad actúa
          </h1>
          <p className="hero__description">
            Registra incidencias en tu distrito de forma rápida y sencilla.
            Sigue el progreso en tiempo real y contribuye a una ciudad mejor.
          </p>
          <div className="hero__actions">
            <a href="#" className="btn-primary">Registrarse</a>
            <a href="#" className="btn-outline">Iniciar sesión</a>
          </div>
        </div>

        {/* Right phone mockup */}
        <div className="hero__visual">
          <div className="hero__phone-wrapper">
            <div className="hero__phone">
              <div className="hero__phone-screen">
                <img
                  src="https://images.unsplash.com/photo-1722834228772-01d16b9bf83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHNjcmVlbiUyMGludGVyZmFjZSUyMHdoaXRlfGVufDF8fHx8MTc3NTY2NTczNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="App Reportia"
                  className="hero__phone-img"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="hero__badge-floating">
              <div className="hero__badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="hero__badge-text">
                <span className="hero__badge-label">Reporte resuelto</span>
                <span className="hero__badge-time">Hace 5 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
