import { useEffect, useRef, useState } from 'react'
import './Stats.css'

function useCountUp(target, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    if (target === 0) {
      setCount(0);
      return;
    }
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

function StatItem({ value, label, active }) {
  const count = useCountUp(value, 2000, active)
  const displayValue = active ? count.toLocaleString('es-PE') : '0'

  return (
    <div className="stats__item">
      <span className="stats__value">{active ? displayValue : '0'}</span>
      <span className="stats__label">{label}</span>
    </div>
  )
}

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  const [districtsStats, setDistrictsStats] = useState([])
  const [selectedDistrictId, setSelectedDistrictId] = useState("")
  const [districtSummary, setDistrictSummary] = useState(null)
  const [loadingSummary, setLoadingSummary] = useState(false)

  // Initial fetch of all districts
  useEffect(() => {
    fetch('https://ca-reportia-backend.wittyflower-3a63d180.brazilsouth.azurecontainerapps.io/api/v1/public/stats/by-district')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Sort by name for the dropdown
          data.sort((a, b) => a.districtName.localeCompare(b.districtName));
          setDistrictsStats(data)
        }
      })
      .catch(err => console.error("Error fetching district stats:", err))
  }, [])

  // Fetch summary when a district is selected
  useEffect(() => {
    if (selectedDistrictId) {
      setLoadingSummary(true)
      fetch(`https://ca-reportia-backend.wittyflower-3a63d180.brazilsouth.azurecontainerapps.io/api/v1/public/stats/by-district/${selectedDistrictId}/summary`)
        .then(res => res.json())
        .then(data => {
          setDistrictSummary(data)
          setLoadingSummary(false)
        })
        .catch(err => {
          console.error("Error fetching district summary:", err)
          setLoadingSummary(false)
        })
    } else {
      setDistrictSummary(null)
    }
  }, [selectedDistrictId])

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

  // Calculate stats to display
  let displayStats = { total: 0, resolved: 0, active: 0 };

  if (selectedDistrictId && districtSummary) {
    displayStats = {
      total: districtSummary.totalReports,
      resolved: districtSummary.resolvedReports,
      active: districtSummary.activeReports
    }
  } else if (!selectedDistrictId && districtsStats.length > 0) {
    displayStats = districtsStats.reduce((acc, curr) => ({
      total: acc.total + curr.totalReports,
      resolved: acc.resolved + curr.resolvedReports,
      active: acc.active + curr.activeReports
    }), { total: 0, resolved: 0, active: 0 })
  } else {
    // Fallback static data if not loaded or failed
    displayStats = { total: 34520, resolved: 28130, active: 6390 }
  }

  const statsData = [
    { value: displayStats.total, label: 'Total de reportes' },
    { value: displayStats.resolved, label: 'Reportes resueltos' },
    { value: displayStats.active, label: 'Reportes activos' },
  ]

  return (
    <section id="estadisticas" className="stats section" ref={sectionRef}>
      <div className="container">
        <h2 className="stats__title">Estadísticas en tiempo real</h2>
        <p className="stats__subtitle">La transparencia es nuestra prioridad</p>

        <div className="stats__filter">
          <select 
            className="stats__select"
            value={selectedDistrictId} 
            onChange={(e) => setSelectedDistrictId(e.target.value)}
          >
            <option value="">Todos los distritos (Lima Metropolitana)</option>
            {districtsStats.map(d => (
              <option key={d.districtId} value={d.districtId}>
                {d.districtName}
              </option>
            ))}
          </select>
        </div>

        <div className="stats__grid">
          {statsData.map((stat) => (
            <StatItem key={stat.label} {...stat} active={visible} />
          ))}
        </div>

        {selectedDistrictId && districtSummary && (
          <div className={`stats__summary ${loadingSummary ? 'loading' : ''}`}>
            <h3 className="stats__summary-title">Desglose por categoría en {districtSummary.districtName}</h3>
            <div className="stats__categories">
              {Object.entries(districtSummary.reportsByCategory).map(([category, count]) => {
                // Calculate percentage for the bar
                const percentage = districtSummary.totalReports > 0 
                  ? (count / districtSummary.totalReports) * 100 
                  : 0;
                  
                return (
                  <div key={category} className="stats__category-item">
                    <div className="stats__category-header">
                      <span className="stats__category-name">{category}</span>
                      <span className="stats__category-count">{count}</span>
                    </div>
                    <div className="stats__category-bar-bg">
                      <div 
                        className="stats__category-bar-fill" 
                        style={{ width: `${percentage}%` }}
                      ></div>
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
