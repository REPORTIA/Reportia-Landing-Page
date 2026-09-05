import { useEffect, useState } from 'react'
import './Hero.css'

/*
 * Capturas reales de la app. Se cargan desde src/assets/app/ en orden alfabético
 * (01-bienvenida.png, 02-inicio.png, …). Si la carpeta está vacía se dibuja la
 * maqueta en CSS de abajo, así el build nunca se rompe por una imagen que falta.
 */
const screenshots = Object.entries(
  import.meta.glob('../assets/app/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

const reports = [
  { id: '#4821', status: 'En proceso', chip: '', title: 'Bache profundo en la calzada', sub: 'Av. Arequipa 1420 · Lince', tag: 'Vías', time: 'hace 2 h' },
  { id: '#4813', status: 'Verificando', chip: 'chip--selected', title: 'Luminaria apagada en el parque', sub: 'Jr. Las Begonias 890 · San Isidro', tag: 'Alumbrado', time: 'hace 5 h' },
]

const tabIcon = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const SLIDE_MS = 4000

export default function Hero() {
  const [active, setActive] = useState(0)

  // Ciclo de pantallas: exacto, sin desfases, y quieto si el visitante pide menos movimiento
  useEffect(() => {
    if (screenshots.length < 2) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((i) => (i + 1) % screenshots.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__content">
          <span className="overline">Atención ciudadana colaborativa · Lima Metropolitana</span>
          <h1 className="hero__title">
            <span className="hero__line">Reporta.</span>
            <span className="hero__line">Tu&nbsp;comunidad resuelve.</span>
            <span className="hero__line">Lima&nbsp;mejora.</span>
          </h1>
          <p className="hero__lead">
            Registra incidencias en tu distrito de Lima Metropolitana y una red de
            voluntarios certificados las resuelve. Sigue cada reporte hasta que se verifica.
          </p>
          <div className="hero__actions">
            <a href="#descargar" className="btn btn-primary btn--lg">Crear cuenta</a>
            <a href="#como-funciona" className="btn btn-secondary btn--lg">Ver cómo funciona</a>
          </div>
          <p className="sms-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <path d="M12 18h.01" />
            </svg>
            Te enviaremos un código por SMS para verificar tu celular.
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__phone">
            {screenshots.length > 0 ? (
              <div className="hero__screen hero__screen--photos">
                {screenshots.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className={`hero__shot ${i === active ? 'hero__shot--active' : ''}`}
                  />
                ))}
              </div>
            ) : (
            <div className="hero__screen">
              <div className="hero__screen-top">
                <div className="hero__avatar">JP</div>
                <div>
                  <div className="hero__greeting">Hola, Jorge</div>
                  <div className="hero__greeting-sub">3 reportes en seguimiento</div>
                </div>
              </div>

              <div className="hero__list">
                {reports.map((r) => (
                  <div key={r.id} className="rcard">
                    <div className="rcard__row">
                      <span className={`chip ${r.chip}`}>{r.status}</span>
                      <span className="rcard__stamp t-num">{r.id}</span>
                    </div>
                    <div className="rcard__title">{r.title}</div>
                    <div className="rcard__sub">{r.sub}</div>
                    <div className="rcard__foot">
                      <span className="chip">{r.tag}</span>
                      <span className="rcard__stamp">{r.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hero__tabbar">
                <svg {...tabIcon} className="hero__tab hero__tab--active"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
                <svg {...tabIcon} className="hero__tab"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
                <span className="hero__fab">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
                </span>
                <svg {...tabIcon} className="hero__tab"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <svg {...tabIcon} className="hero__tab"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></svg>
              </div>
            </div>
            )}
          </div>

          <div className="hero__float">
            <span className="chip chip--solid">Oferta cerca de ti</span>
            <div className="hero__float-title">Punto de basura acumulada</div>
            <div className="hero__float-sub">Jesús María · a 340 m · Residuos</div>
            <div className="hero__float-actions">
              <span className="btn btn-primary btn--sm">Aceptar</span>
              <span className="btn btn-secondary btn--sm">Rechazar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
