import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const iso = (name) => resolve(__dirname, `../src/assets/isotipo/${name}`);
const out = (name) => resolve(__dirname, `../public/${name}`);

// Favicon: isotipo circular azul
await sharp(iso('isotipo-azul-circular-192.png'))
  .resize(64, 64)
  .png({ compressionLevel: 9 })
  .toFile(out('favicon.png'));
console.log('favicon.png generado');

// Apple touch icon: cuadrado, iOS redondea las esquinas
await sharp(iso('isotipo-azul-cuadrado-1024.png'))
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toFile(out('apple-touch-icon.png'));
console.log('apple-touch-icon.png generado');
