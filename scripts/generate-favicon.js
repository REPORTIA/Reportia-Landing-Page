import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

await sharp(resolve(__dirname, '../src/assets/Reportia_Icon_Without_Bg.png'))
  .trim()
  .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(resolve(__dirname, '../public/favicon.png'));
console.log('favicon.png generado');

const logoInput = resolve(__dirname, '../src/assets/Reportia_Logo.png');
const logoOutput = resolve(__dirname, '../src/assets/Reportia_Logo_NoBg.png');

const { data, info } = await sharp(logoInput)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  if (r > 230 && g > 230 && b > 230) data[i + 3] = 0;
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim()
  .png({ compressionLevel: 9 })
  .toFile(logoOutput);
console.log('Reportia_Logo_NoBg.png generado');
