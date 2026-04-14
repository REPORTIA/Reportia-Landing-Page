import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Brand column */}
        <div className="footer__brand">
          <span className="footer__logo">REPORTIA</span>
          <p className="footer__brand-desc">
            Sistema centralizado de reporte ciudadano de la Municipalidad Metropolitana de Lima.
          </p>
          <span className="footer__brand-institution">Municipalidad Metropolitana de Lima</span>
        </div>

        {/* Legal column */}
        <div className="footer__column">
          <h3 className="footer__heading">LEGAL</h3>
          <nav>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Términos y condiciones</a></li>
              <li><a href="#" className="footer__link">Política de privacidad</a></li>
              <li><a href="#" className="footer__link">Contáctanos</a></li>
            </ul>
          </nav>
        </div>

        {/* Institutional column */}
        <div className="footer__column">
          <h3 className="footer__heading">INSTITUCIONAL</h3>
          <address className="footer__address">
            Municipalidad Metropolitana de Lima<br />
            Jirón de la Unión 300, Cercado de Lima<br />
            Lima, Perú
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © 2026 REPORTIA — Municipalidad Metropolitana de Lima. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
