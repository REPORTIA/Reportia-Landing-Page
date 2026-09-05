import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../assets/imagotipo/imagotipo-blanco-transparente.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img src={logo} alt="Reportia" className="footer__logo" />
          <p className="footer__motto">Reporta, gestiona, transforma.</p>
          <p className="footer__brand-desc">
            Plataforma de atención ciudadana colaborativa para Lima Metropolitana. Los vecinos
            reportan y una red de voluntarios certificados resuelve, con georreferenciación y
            puntos por participar.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Producto</h3>
          <nav aria-label="Secciones">
            <ul className="footer__links">
              <li><a href="/#como-funciona" className="footer__link">Cómo funciona</a></li>
              <li><a href="/#que-reportar" className="footer__link">Qué reportar</a></li>
              <li><a href="/#cifras" className="footer__link">Cifras públicas</a></li>
              <li><a href="/#descargar" className="footer__link">Descargar la app</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Legal</h3>
          <nav aria-label="Legal">
            <ul className="footer__links">
              <li><Link to="/terminos" className="footer__link">Términos y condiciones</Link></li>
              <li><Link to="/privacidad" className="footer__link">Política de privacidad</Link></li>
              <li><a href="mailto:reportiaapp@gmail.com" className="footer__link" target="_blank" rel="noopener noreferrer">Contáctanos</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">© 2026 REPORTIA. Todos los derechos reservados.</p>
          <p className="footer__copyright">Iniciativa ciudadana · Hecho en Lima, Perú.</p>
        </div>
      </div>
    </footer>
  )
}
