/**
 * Cliente de los endpoints públicos de REPORTIA.
 *
 * Swagger: https://ca-reportia-backend.wittyflower-3a63d180.brazilsouth.azurecontainerapps.io/swagger/index.html
 *
 * En desarrollo las llamadas van por el proxy de Vite (/api → backend) porque el
 * backend no envía cabeceras CORS. En producción se llama al backend directamente:
 * para que funcione, el backend debe responder `Access-Control-Allow-Origin` para
 * https://reportia-landingpage.web.app y https://reportia-landingpage.firebaseapp.com.
 */
const BACKEND = 'https://ca-reportia-backend.wittyflower-3a63d180.brazilsouth.azurecontainerapps.io'

export const API_BASE = import.meta.env.DEV
  ? '/api/v1/public'
  : `${BACKEND}/api/v1/public`

async function getJson(path, { signal } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { accept: 'application/json' },
    signal,
  })
  if (!res.ok) {
    let code = `HTTP ${res.status}`
    try {
      const body = await res.json()
      if (body?.code) code = body.code
    } catch {
      /* sin cuerpo JSON */
    }
    throw new Error(code)
  }
  return res.json()
}

/** Los 43 distritos con id y nombre, ordenados por nombre. */
export const getDistricts = (opts) => getJson('/districts', opts)

/** Categorías con id, nombre, icono (vocabulario `CategoryIcon`) y estado. */
export const getCategories = (opts) => getJson('/categories', opts)

/** Stats agregadas de cada distrito, incluido `averageResolutionTimeHours` (null sin resueltos). */
export const getStatsByDistrict = (opts) => getJson('/stats/by-district', opts)

/** Resumen de un distrito con desglose por categoría. */
export const getDistrictSummary = (districtId, opts) =>
  getJson(`/stats/by-district/${districtId}/summary`, opts)

/**
 * Promedio de resolución ponderado por reportes resueltos.
 * Un distrito sin resueltos no tiene promedio y no cuenta.
 */
export function weightedResolutionHours(districts) {
  let hours = 0
  let weight = 0
  for (const d of districts) {
    if (d.averageResolutionTimeHours == null || !d.resolvedReports) continue
    hours += d.averageResolutionTimeHours * d.resolvedReports
    weight += d.resolvedReports
  }
  return weight > 0 ? hours / weight : null
}

/** «18 min», «49 h» o «3,2 d» según la magnitud. */
export function formatHours(hours) {
  if (hours == null) return null
  if (hours < 1) return { value: Math.max(1, Math.round(hours * 60)), unit: 'min' }
  if (hours < 48) return { value: Math.round(hours), unit: 'h' }
  const days = hours / 24
  return { value: Math.round(days * 10) / 10, unit: 'd' }
}
