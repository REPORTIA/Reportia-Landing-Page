import './DownloadApp.css'

export default function DownloadApp() {
  return (
    <section id="descargar" className="download-app section">
      <div className="download-app__inner container">
        {/* Left content */}
        <div className="download-app__content">
          <h2 className="download-app__title">
            Descarga la app y reporta desde cualquier lugar
          </h2>
          <p className="download-app__description">
            Disponible para Android e iOS. Recibe notificaciones en tiempo real
            sobre el estado de tus reportes.
          </p>
          <div className="download-app__buttons">
            <a href="#" className="download-app__store-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.18 23.76c.3.17.64.24.98.18l11.5-11.5-2.83-2.83L3.18 23.76zM20.67 9.53l-2.98-1.72-3.17 3.17 3.17 3.17 2.98-1.72c.85-.49.85-1.7 0-2.9zM1.05 1.06C.8 1.38.67 1.8.67 2.28v19.44c0 .48.13.9.38 1.22l.06.06L12.5 12l-.06-.06L1.05 1.06zM14.66 11.06l-11.48-11.5c-.34-.06-.68.01-.98.18l9.63 9.49 2.83-2.17z"/>
              </svg>
              <div className="download-app__store-text">
                <span className="download-app__store-label">Disponible en</span>
                <span className="download-app__store-name">Google Play</span>
              </div>
            </a>

            <a href="#" className="download-app__store-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="download-app__store-text">
                <span className="download-app__store-label">Descárgalo en</span>
                <span className="download-app__store-name">App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right phone visual */}
        <div className="download-app__visual">
          <div className="download-app__phone">
            <div className="download-app__phone-body">
              <div className="download-app__phone-screen">
                <div className="download-app__phone-hand" aria-hidden="true">
                  <div className="download-app__hand-shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
