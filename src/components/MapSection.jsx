import { MapContainer, TileLayer, CircleMarker, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './MapSection.css'

// Centered on Miraflores urban area, away from the ocean
const LIMA_CENTER = [-12.1219, -77.0100]

const incidents = [
  [-12.1100, -77.0350],
  [-12.1080, -77.0150],
  [-12.1220, -77.0050],
  [-12.1160, -77.0420],
  [-12.1300, -77.0200],
  [-12.1050, -77.0280],
  [-12.1330, -77.0120],
  [-12.1380, -77.0060],
]

export default function MapSection() {
  return (
    <section className="map-section section">
      <div className="container">
        <h2 className="section-title">Incidencias resueltas en Lima</h2>
        <p className="section-subtitle">
          Visualiza los reportes resueltos recientemente en el mapa. No se muestra información personal de los ciudadanos.
        </p>
      </div>

      <div className="map-section__map-wrapper">
        <MapContainer
          center={LIMA_CENTER}
          zoom={14}
          scrollWheelZoom={true}
          zoomControl={false}
          className="map-section__map"
          attributionControl={false}
        >
          <ZoomControl position="bottomright" />
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri"
          />
          {incidents.map((pos, i) => (
            <CircleMarker
              key={i}
              center={pos}
              radius={8}
              pathOptions={{
                color: 'white',
                weight: 2,
                fillColor: '#3b82f6',
                fillOpacity: 1,
              }}
            />
          ))}
        </MapContainer>

        <div className="map-section__chip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Últimos 30 días
        </div>
      </div>
    </section>
  )
}
