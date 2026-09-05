import sharp from 'sharp';
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve, parse } from 'path';

/**
 * Limpia las capturas de la app para el hero: quita la barra de estado y la
 * barra de navegación de Android y exporta WebP optimizado.
 *
 * Entrada:  src/assets/app/raw/*.{png,jpg,jpeg}   (capturas tal cual salen del teléfono)
 * Salida:   src/assets/app/<mismo nombre>.webp     (lo que carga Hero.jsx)
 *
 * Los recortes están en proporción a la altura, así sirven para otras resoluciones.
 * Ajusta STATUS_BAR y NAV_BAR si cambias de teléfono.
 */
const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW = resolve(__dirname, '../src/assets/app/raw');
const OUT = resolve(__dirname, '../src/assets/app');

const STATUS_BAR = 62 / 1600;  // proporción de la altura ocupada por la barra de estado
const NAV_BAR = 95 / 1600;     // proporción ocupada por la barra de navegación del sistema
const PAD_TOP = 48;            // aire blanco para que el contenido no roce las esquinas redondeadas
const PAD_BOTTOM = 96;
const APP_BG = '#FFFFFF';      // fondo de la app (el sistema es claro únicamente)

const files = readdirSync(RAW).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
for (const file of files) {
  const input = resolve(RAW, file);
  const { width, height } = await sharp(input).metadata();
  const top = Math.round(height * STATUS_BAR);
  const bottom = Math.round(height * NAV_BAR);
  const out = resolve(OUT, `${parse(file).name}.webp`);
  const cropped = height - top - bottom;
  await sharp(input)
    .extract({ left: 0, top, width, height: cropped })
    .extend({ top: PAD_TOP, bottom: PAD_BOTTOM, background: APP_BG })
    .webp({ quality: 88 })
    .toFile(out);
  console.log(`${file} → ${parse(file).name}.webp (${width}×${cropped + PAD_TOP + PAD_BOTTOM})`);
}
