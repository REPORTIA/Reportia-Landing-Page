import { MapContainer, TileLayer, CircleMarker, Marker, ZoomControl } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapSection.css'

// Centro urbano de Lima Metropolitana
const LIMA_CENTER = [-12.1219, -77.01]

const incidents = [
  [-12.11, -77.035],
  [-12.108, -77.015],
  [-12.122, -77.005],
  [-12.116, -77.042],
  [-12.13, -77.02],
  [-12.105, -77.028],
  [-12.133, -77.012],
  [-12.138, -77.006],
]

// Varios reportes en pocas manzanas se agrupan en un punto numerado
const clusters = [
  { position: [-12.126, -77.03], count: 12 },
]

const clusterIcon = (count) =>
  L.divIcon({
    className: 'map-section__cluster',
    html: `<span>${count}</span>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
  })

export default function MapSection() {
  return (
    <section id="mapa" className="map-section section">
      <div className="container">
        <div className="section-head">
          <span className="overline">Mapa</span>
          <h2 className="section-title">Reportes resueltos en Lima</h2>
          <p className="section-lead">
            Cada punto es una incidencia cerrada y verificada en Lima Metropolitana en los
            últimos 30 días. No se muestra información personal de nadie.
          </p>
        </div>

        <div className="map-section__map-wrapper">
          <MapContainer
            center={LIMA_CENTER}
            zoom={14}
            scrollWheelZoom={false}
            zoomControl={false}
            className="map-section__map"
            attributionControl={false}
          >
            <ZoomControl position="bottomright" />
            {/* Base monocroma sin etiquetas: manzanas claras, calles en gris. El azul es la información. */}
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri"
              maxZoom={16}
            />
            {incidents.map((pos, i) => (
              <CircleMarker
                key={i}
                center={pos}
                radius={8}
                pathOptions={{
                  color: '#FFFFFF',
                  weight: 3,
                  fillColor: '#1D4ED8',
                  fillOpacity: 1,
                }}
              />
            ))}
            {clusters.map((c, i) => (
              <Marker key={`c${i}`} position={c.position} icon={clusterIcon(c.count)} interactive={false} />
            ))}
          </MapContainer>

          <div className="map-section__legend">
            <span className="chip chip--solid">Resuelto</span>
            <span className="map-section__legend-text">Últimos 30 días</span>
          </div>
        </div>
      </div>
    </section>
  )
}
