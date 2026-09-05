import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Terminos from './pages/Terminos'
import Privacidad from './pages/Privacidad'

/* Al cambiar de página sube al inicio; si la URL trae un ancla, la busca al llegar. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}
