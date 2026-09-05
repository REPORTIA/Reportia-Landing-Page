import { useEffect, useRef, useState } from 'react'
import './Stats.css'
import {
  getDistricts,
  getStatsByDistrict,
  getDistrictSummary,
  weightedResolutionHours,
  formatHours,
} from '../api'

function useCountUp(target, duration = 1200, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    if (target === 0) {
      setCount(0)
      return
    }
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setCount(target)
      return
    }
    let frame
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, active])

  return count
}

function StatCard({ value, unit, label, note, active }) {
  const count = useCountUp(value, 1200, active)
  const display = Number.isInteger(value)
    ? count.toLocaleString('es-PE')
    : (active ? value : 0).toLocaleString('es-PE', { maximumFractionDigits: 1 })

  return (
    <div className="stats__card">
      <span className="stats__value t-num">
        {display}
        {unit && <span className="stats__unit">{unit}</span>}
      </span>
      <span className="stats__label">{label}</span>
      <span className="stats__note">{note}</span>
    </div>
  )
}

function formatTime(date) {
  return date.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', hour12: false })
}

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  const [status, setStatus] = useState('loading') // loading | ready | error
  const [updatedAt, setUpdatedAt] = useState(null)
  const [districts, setDistricts] = useState([])
  const [districtsStats, setDistrictsStats] = useState([])
  const [selectedDistrictId, setSelectedDistrictId] = useState('')
  const [districtSummary, setDistrictSummary] = useState(null)
  const [loadingSummary, setLoadingSummary] = useState(false)

  // Catálogo de distritos y stats agregadas, en paralelo
  useEffect(() => {
    const controller = new AbortController()
    Promise.all([
      getStatsByDistrict({ signal: controller.signal }),
      getDistricts({ signal: controller.signal }).catch(() => null),
    ])
      .then(([stats, catalog]) => {
        if (!Array.isArray(stats)) throw new Error('Respuesta inesperada')
        setDistrictsStats(stats)
        // Si el catálogo falla, el selector se arma con los distritos de las stats
        const list = Array.isArray(catalog)
          ? catalog
          : stats.map((d) => ({ id: d.districtId, name: d.districtName }))
        list.sort((a, b) => a.name.localeCompare(b.name, 'es'))
        setDistricts(list)
        setUpdatedAt(new Date())
        setStatus('ready')
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        console.error('Error cargando cifras públicas:', err)
        setStatus('error')
      })
    return () => controller.abort()
  }, [])

  // Resumen del distrito seleccionado
  useEffect(() => {
    if (!selectedDistrictId) {
      setDistrictSummary(null)
      return
    }
    const controller = new AbortController()
    setLoadingSummary(true)
    getDistrictSummary(selectedDistrictId, { signal: controller.signal })
      .then((data) => {
        setDistrictSummary(data)
        setLoadingSummary(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        console.error('Error cargando resumen del distrito:', err)
        setDistrictSummary(null)
        setLoadingSummary(false)
      })
    return () => controller.abort()
  }, [selectedDistrictId])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
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

  // Totales: del distrito elegido o de todos
  let totals = { total: 0, resolved: 0, active: 0, avgHours: null }

  if (selectedDistrictId && districtSummary) {
    totals = {
      total: districtSummary.totalReports,
      resolved: districtSummary.resolvedReports,
      active: districtSummary.activeReports,
      avgHours: districtSummary.averageResolutionTimeHours,
    }
  } else if (!selectedDistrictId && districtsStats.length > 0) {
    totals = districtsStats.reduce(
      (acc, d) => ({
        total: acc.total + d.totalReports,
        resolved: acc.resolved + d.resolvedReports,
        active: acc.active + d.activeReports,
        avgHours: acc.avgHours,
      }),
      { total: 0, resolved: 0, active: 0, avgHours: weightedResolutionHours(districtsStats) }
    )
  }

  const summaryPending = Boolean(selectedDistrictId) && !districtSummary
  const isLoading = status === 'loading' || (status === 'ready' && summaryPending && loadingSummary)
  const isError = status === 'error'
  const hasData = status === 'ready' && !summaryPending && totals.total > 0
  const isEmpty = status === 'ready' && !summaryPending && totals.total === 0

  const avg = formatHours(totals.avgHours)
  const cards = [
    { value: totals.total, label: 'Reportes recibidos', note: 'Desde el lanzamiento' },
    { value: totals.resolved, label: 'Reportes resueltos', note: 'Verificados por un supervisor' },
    { value: totals.active, label: 'En proceso ahora', note: 'Con voluntario asignado' },
    avg
      ? { value: avg.value, unit: avg.unit, label: 'Tiempo de resolución', note: 'Promedio entre reporte y cierre' }
      : { value: 0, unit: '', label: 'Tiempo de resolución', note: 'Aún sin reportes resueltos', dash: true },
  ]

  let stamp = ''
  if (status === 'ready' && updatedAt) stamp = `Actualizado a las ${formatTime(updatedAt)}`
  if (isEmpty) stamp = 'Aún sin publicar'
  if (isError) stamp = 'Sin conexión con los datos'

  const selectedName = districtSummary?.districtName
  const breakdown = districtSummary
    ? Object.entries(districtSummary.reportsByCategory ?? {})
        .filter(([, count]) => count > 0)
        .sort((a, b) => b[1] - a[1])
    : []

  return (
    <section id="cifras" className="stats section section--surface" ref={sectionRef}>
      <div className="container">
        <div className="section-head">
          <span className="overline">Cifras públicas</span>
          <h2 className="section-title">Lo que la comunidad ya resolvió</h2>
          <p className="section-lead">
            Datos abiertos de los 43 distritos de Lima Metropolitana, actualizados cada vez
            que un supervisor cierra un reporte.
          </p>
        </div>

        {/* El selector vive con las cifras, que es lo que filtra */}
        <div className="stats__filter">
          <label className="stats__filter-label" htmlFor="stats-district">Distrito</label>
          <select
            id="stats-district"
            className="stats__select"
            value={selectedDistrictId}
            onChange={(e) => setSelectedDistrictId(e.target.value)}
            disabled={status !== 'ready'}
          >
            <option value="">
              {status === 'ready' ? 'Toda Lima Metropolitana' : status === 'loading' ? 'Cargando distritos…' : 'Sin datos por distrito'}
            </option>
            {districts.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
          {stamp && <span className="stats__stamp">{stamp}</span>}
        </div>

        {isLoading && (
          <div className="stats__grid" aria-busy="true" aria-label="Cargando cifras">
            {cards.map((c) => (
              <div key={c.label} className="stats__card stats__card--skeleton">
                <span className="stats__skeleton stats__skeleton--value" />
                <span className="stats__label">{c.label}</span>
                <span className="stats__skeleton stats__skeleton--note" />
              </div>
            ))}
          </div>
        )}

        {hasData && (
          <div className={`stats__grid ${loadingSummary ? 'stats__grid--loading' : ''}`}>
            {cards.map((c) =>
              c.dash ? (
                <div key={c.label} className="stats__card">
                  <span className="stats__value stats__value--dash" aria-label="Sin promedio">—</span>
                  <span className="stats__label">{c.label}</span>
                  <span className="stats__note">{c.note}</span>
                </div>
              ) : (
                <StatCard key={c.label} {...c} active={visible} />
              )
            )}
          </div>
        )}

        {/* Sin datos: una sola frase honesta, nunca ceros */}
        {(isEmpty || isError) && (
          <div className="stats__empty">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="m7 15 4-4 3 3 5-6" />
            </svg>
            <h3 className="stats__empty-title">
              {isError
                ? 'Las cifras no están disponibles ahora mismo'
                : selectedName
                  ? `Todavía no hay reportes en ${selectedName}`
                  : 'Todavía no hay reportes verificados'}
            </h3>
            <p className="stats__empty-text">
              {isError
                ? 'No pudimos conectar con los datos públicos. Vuelve a intentarlo en unos minutos.'
                : 'Las cifras se publican en cuanto un supervisor cierra el primer reporte. Sé la primera persona en abrir uno en tu distrito de Lima.'}
            </p>
            {!isError && (
              <a href="#descargar" className="btn btn-primary">Crear el primer reporte</a>
            )}
          </div>
        )}

        {hasData && selectedDistrictId && breakdown.length > 0 && (
          <div className={`stats__summary ${loadingSummary ? 'stats__summary--loading' : ''}`}>
            <h3 className="stats__summary-title">Por categoría en {selectedName}</h3>
            <div className="stats__categories">
              {breakdown.map(([category, count]) => {
                const percentage = totals.total > 0 ? (count / totals.total) * 100 : 0
                return (
                  <div key={category} className="stats__category-item">
                    <div className="stats__category-header">
                      <span className="stats__category-name">{category}</span>
                      <span className="stats__category-count t-num">{count}</span>
                    </div>
                    <div className="stats__category-bar-bg">
                      <div className="stats__category-bar-fill" style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
