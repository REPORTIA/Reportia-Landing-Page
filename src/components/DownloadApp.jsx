import './DownloadApp.css'

export default function DownloadApp() {
  return (
    <section id="descargar" className="download-app section section--soft">
      <div className="download-app__inner container">
        <h2 className="download-app__title">Tu distrito de Lima tiene algo que arreglar</h2>
        <p className="download-app__lead">
          Crea tu cuenta con tu número de celular y envía tu primer reporte hoy mismo.
        </p>

        <div className="download-app__actions">
          <a href="#" className="btn btn-primary btn--lg">Crear cuenta</a>
          <a
            href="https://wa.me/51923978825"
            className="btn btn-secondary btn--lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reportar por WhatsApp
          </a>
        </div>

        <div className="download-app__stores">
          <a href="#" className="btn btn-dark download-app__store-btn">
            <svg width="18" height="20" viewBox="0 0 24 26" fill="currentColor" aria-hidden="true">
              <path d="M3 1.6 14.7 13 3 24.4a1.6 1.6 0 0 1-.6-1.3V2.9c0-.5.2-1 .6-1.3Z" />
              <path d="m16.6 14.9 3.1 3-11.2 6.4 8.1-9.4Z" opacity="0.75" />
              <path d="m16.6 11.1 3.1-3-11.2-6.4 8.1 9.4Z" opacity="0.75" />
              <path d="m21.6 10.2 2.2 1.3c.9.5.9 1.9 0 2.4l-2.2 1.3-3.6-2.5 3.6-2.5Z" opacity="0.55" />
            </svg>
            <span className="download-app__store-text">
              <span className="download-app__store-label">Disponible en</span>
              <span className="download-app__store-name">Google Play</span>
            </span>
          </a>

          <a href="#" className="btn btn-dark download-app__store-btn">
            <svg width="18" height="20" viewBox="0 0 24 26" fill="currentColor" aria-hidden="true">
              <path d="M17.2 13.6c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9-.8 0-2.1-.9-3.4-.9-1.8 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.5 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5.6-.9 1-1.9 1.2-2.4-2.7-1-3.3-4.5-3.3-4.8Z" />
              <path d="M14.9 4.2c.7-.9 1.2-2.1 1-3.4-1 .1-2.3.7-3 1.6-.6.8-1.2 2-1.1 3.2 1.2.1 2.3-.6 3.1-1.4Z" />
            </svg>
            <span className="download-app__store-text">
              <span className="download-app__store-label">Descárgalo en</span>
              <span className="download-app__store-name">App Store</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
