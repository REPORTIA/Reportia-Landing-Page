/* Enlaces de contacto usados por los CTA de la landing. */
export const CONTACT_EMAIL = 'reportiaapp@gmail.com'

const DEMO_SUBJECT = 'Solicitud de demo de Reportia'
const DEMO_BODY = [
  'Hola, equipo de Reportia:',
  '',
  'Me interesa conocer la plataforma. Estos son mis datos:',
  '',
  '- Nombre:',
  '- Distrito o institución:',
  '- Cargo:',
  '- Teléfono:',
  '- Horarios en los que me acomoda la demo:',
  '',
  'Gracias.',
].join('\n')

export const DEMO_MAILTO =
  `mailto:${CONTACT_EMAIL}` +
  `?subject=${encodeURIComponent(DEMO_SUBJECT)}` +
  `&body=${encodeURIComponent(DEMO_BODY)}`
