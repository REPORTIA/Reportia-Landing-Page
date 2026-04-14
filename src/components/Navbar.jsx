import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Qué reportar', href: '#que-reportar' },
  { label: 'Estadísticas', href: '#estadisticas' },
  { label: 'Descargar app', href: '#descargar' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">REPORTIA</a>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
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
            <a href="#" className="navbar__signin">Iniciar sesión</a>
            <a href="#" className="btn-primary navbar__cta">Registrarse</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
