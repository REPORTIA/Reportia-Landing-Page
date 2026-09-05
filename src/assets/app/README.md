# Capturas de la app para el hero

1. Deja las capturas originales del teléfono en `raw/` (con barra de estado y
   barra de navegación, tal cual salen).
2. Ejecuta `node scripts/prepare-app-shots.js`: recorta esas barras y exporta
   un `.webp` optimizado por cada captura en esta carpeta.
3. `Hero.jsx` carga los `.webp` de aquí en orden alfabético y los muestra en el
   teléfono con un fundido entre uno y otro.

Nombres actuales: `01-welcome`, `02-home`. Para añadir una pantalla, súmala en
`raw/` con el siguiente número y vuelve a ejecutar el script.

Si la carpeta no tiene imágenes, el hero dibuja una maqueta en CSS y el build
no falla.
