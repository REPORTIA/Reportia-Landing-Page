import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/imagotipo/imagotipo-azul-transparente.png'

const navLinks = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Qué reportar', href: '#que-reportar' },
  { label: 'Cifras', href: '#cifras' },
  { label: 'Mapa', href: '#mapa' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" aria-label="Reportia, inicio">
          <img src={logo} alt="Reportia" className="navbar__logo-img" />
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>

        <nav id="navbar-menu" className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar__actions">
            <a href="#" className="btn btn-ghost navbar__signin">Iniciar sesión</a>
            <a href="#descargar" className="btn btn-primary navbar__cta" onClick={() => setMenuOpen(false)}>
              Crear cuenta
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
