import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const statsData = [
  { value: 34520, label: 'Total de reportes', formatted: '34,520' },
  { value: 28130, label: 'Reportes resueltos', formatted: '28,130' },
  { value: 15840, label: 'Ciudadanos registrados', formatted: '15,840' },
]

function useCountUp(target, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])

  return count
}

function StatItem({ value, label, formatted, active }) {
  const count = useCountUp(value, 2000, active)
  const displayValue = active ? count.toLocaleString('es-PE') : '0'

  return (
    <div className="stats__item">
      <span className="stats__value">{active ? displayValue : formatted}</span>
      <span className="stats__label">{label}</span>
    </div>
  )
}

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="estadisticas" className="stats section" ref={sectionRef}>
      <div className="container">
        <h2 className="stats__title">Estadísticas en tiempo real</h2>
        <p className="stats__subtitle">La transparencia es nuestra prioridad</p>

        <div className="stats__grid">
          {statsData.map((stat) => (
            <StatItem key={stat.label} {...stat} active={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
