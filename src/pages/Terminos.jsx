import { Link } from 'react-router-dom'
import LegalPage from './LegalPage'

const UPDATED = '4 de septiembre de 2026'

const sections = [
  {
    id: 'servicio',
    title: 'Qué es REPORTIA y qué no es',
    children: (
      <>
        <p>
          REPORTIA es una plataforma de atención ciudadana colaborativa para Lima Metropolitana.
          Conecta a vecinos que reportan incidencias en el espacio público con vecinos voluntarios
          que las resuelven, y con supervisores que verifican cada cierre. Funciona a través de la
          aplicación móvil y de un canal de WhatsApp dedicado a crear reportes.
        </p>
        <p>
          <strong>REPORTIA no es un canal municipal ni de ninguna entidad pública.</strong> Enviar un
          reporte no equivale a presentar una solicitud, una denuncia ni un trámite ante una
          autoridad. Las municipalidades y demás entidades no reciben, atienden ni responden los
          reportes que se registran aquí.
        </p>
        <p>
          <strong>REPORTIA no es un servicio de emergencia.</strong> Si una situación pone en riesgo la
          vida, la integridad o la propiedad de alguien, no la reportes en la plataforma: llama a la
          Policía Nacional (105), a los Bomberos (116) o al SAMU (106).
        </p>
      </>
    ),
  },
  {
    id: 'cuenta',
    title: 'Cuenta y edad mínima',
    children: (
      <>
        <p>
          Para usar REPORTIA necesitas una cuenta. Se crea con tu número de celular, que verificamos
          con un código de un solo uso enviado por SMS. No hay contraseña: el celular es tu
          credencial de acceso, así que eres responsable de mantenerlo bajo tu control y de avisarnos
          si lo pierdes o cambias de número.
        </p>
        <p>
          <strong>Debes tener al menos 18 años</strong> para crear una cuenta. Al registrarte declaras
          que cumples esa edad. Si detectamos una cuenta de una persona menor de edad, la cerraremos.
        </p>
        <p>
          Cada persona puede tener una sola cuenta. Los datos que registras, empezando por tu nombre,
          deben ser verdaderos. Puedes cerrar tu cuenta en cualquier momento desde la aplicación; el
          proceso se confirma con un código de un solo uso y se describe en la{' '}
          <Link to="/privacidad#derechos">Política de privacidad</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'reportes',
    title: 'Reportes: sin garantía de atención ni de plazo',
    children: (
      <>
        <p>
          Un reporte describe una incidencia en el espacio público dentro de una de las categorías
          disponibles, con su ubicación y hasta tres fotografías. Al enviarlo queda en estado
          «Recibido» y se ofrece a los voluntarios cercanos.
        </p>
        <p>
          <strong>Nadie promete que un reporte sea atendido, ni en qué plazo.</strong> La asignación
          la hace un algoritmo por cercanía y depende de que haya voluntarios disponibles y
          dispuestos. Un reporte puede no ser aceptado por nadie, quedar sin resolver, ser rechazado
          por un supervisor al verificar la evidencia, o ser cancelado por quien lo creó.
        </p>
        <p>
          Los estados por los que pasa un reporte son: Recibido, Pendiente de aceptación, En proceso,
          Pendiente de verificación, Resuelto, Rechazado y Cancelado. Puedes seguirlos desde la
          aplicación en todo momento.
        </p>
      </>
    ),
  },
  {
    id: 'contenido',
    title: 'Responsabilidad por el contenido que subes',
    children: (
      <>
        <p>
          Eres responsable de las fotografías, descripciones y ubicaciones que envías. Al subirlas
          declaras que tienes derecho a hacerlo y nos autorizas a almacenarlas, mostrarlas a los
          voluntarios y supervisores que intervienen en el reporte y, una vez resuelto, a publicar la
          ubicación y la categoría de la incidencia en el mapa público.
        </p>
        <h3>Está expresamente prohibido</h3>
        <ul>
          <li>Subir imágenes en las que se reconozca a personas, placas de vehículos, interiores de viviendas o documentos.</li>
          <li>Crear reportes falsos, duplicados a propósito o con fines distintos a señalar una incidencia real.</li>
          <li>Usar la plataforma para acosar, difamar o exponer a alguien.</li>
          <li>Interferir con el servicio, sus sistemas o las cuentas de otras personas.</li>
        </ul>
        <p>
          Un reporte falso o malicioso se rechaza y no genera puntos. Si la conducta se repite o es
          grave, la cuenta puede suspenderse o cerrarse, tal como se describe en la sección de
          moderación.
        </p>
      </>
    ),
  },
  {
    id: 'voluntariado',
    title: 'Voluntariado',
    children: (
      <>
        <p>
          El voluntariado es una capacidad opcional de tu cuenta. La activas y la desactivas desde tu
          perfil. Mientras está activa, recibes ofertas de incidencias cercanas a la ubicación que
          registraste, y decides libremente si aceptas o rechazas cada una.
        </p>
        <p>
          <strong>Aceptar una oferta no crea una relación laboral, de servicios ni de ningún otro tipo</strong>{' '}
          con REPORTIA ni con quien creó el reporte. Actúas por tu cuenta y bajo tu propio riesgo.
          Antes de intervenir, evalúa si la situación es segura; si no lo es, rechaza la oferta o
          devuélvela. REPORTIA no responde por daños, lesiones o gastos derivados de tu intervención.
        </p>
        <p>
          Para cerrar una incidencia debes enviar al menos una fotografía del trabajo realizado. Un
          supervisor la revisa y acepta o rechaza el cierre. Si lo rechaza, el reporte vuelve a
          ofrecerse.
        </p>
      </>
    ),
  },
  {
    id: 'puntos',
    title: 'Puntos, niveles y recompensas',
    children: (
      <>
        <p>
          Al reportar y al resolver incidencias verificadas ganas puntos, subes de nivel y puedes
          obtener insignias. Los puntos existen para reconocer la participación en la comunidad.
        </p>
        <ul>
          <li><strong>Los puntos no son dinero.</strong> No se transfieren entre cuentas ni se cambian por efectivo fuera del catálogo de recompensas.</li>
          <li>Podemos ajustar el catálogo, los valores de puntos y las reglas de niveles. Los cambios se avisan en la aplicación y no afectan a los canjes ya solicitados.</li>
          <li>Los puntos caducan si pasas doce meses seguidos sin ganar ni canjear ninguno. Cualquier actividad reinicia ese plazo para todo tu saldo. Te avisaremos en la aplicación un mes antes de que venzan. Los puntos también se pierden al cerrar la cuenta.</li>
          <li>Un canje se procesa en un plazo de quince días hábiles desde la solicitud y se abona al destino de Yape o Plin que hayas registrado voluntariamente en tu perfil.</li>
          <li>Los puntos obtenidos con reportes o resoluciones que después se anulen por falsos se retiran.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'moderacion',
    title: 'Moderación, suspensión y reclamos',
    children: (
      <>
        <p>
          Los supervisores verifican la evidencia fotográfica antes de cerrar un reporte y pueden
          rechazarla o devolver el reporte a la cola de ofertas. Los administradores gestionan los
          catálogos de categorías y recompensas y las cuentas internas. Todas las acciones de
          moderación quedan registradas para poder revisarlas.
        </p>
        <p>
          Podemos suspender o cerrar una cuenta que incumpla estos términos, en especial por
          reportes falsos, contenido prohibido, suplantación de identidad o uso abusivo del servicio.
          Cuando sea posible, avisaremos antes y explicaremos el motivo.
        </p>
        <p>
          Si no estás de acuerdo con una decisión sobre un reporte o sobre tu cuenta, escríbenos a{' '}
          reportiaapp@gmail.com indicando el número de reporte o tu celular registrado.
          Respondemos en un plazo máximo de quince días hábiles.
        </p>
      </>
    ),
  },
  {
    id: 'cambios',
    title: 'Cambios, ley aplicable y contacto',
    children: (
      <>
        <p>
          Podemos modificar estos términos cuando el servicio cambie. Publicaremos la versión nueva
          en esta página con su fecha y, si el cambio es relevante, lo avisaremos en la aplicación
          antes de que entre en vigor. Seguir usando REPORTIA después de esa fecha significa que
          aceptas la versión vigente.
        </p>
        <p>
          Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia se
          somete a los jueces y tribunales de Lima.
        </p>
        <p>
          REPORTIA es una iniciativa ciudadana sin fines de lucro, no una empresa. El servicio es
          operado por su equipo, representado por Jorge Ponce,
          con domicilio en San Juan de Miraflores, Lima, Perú. Para cualquier consulta sobre estos
          términos escríbenos a reportiaapp@gmail.com.
        </p>
      </>
    ),
  },
]

export default function Terminos() {
  return (
    <LegalPage
      kicker="Legal"
      title="Términos y condiciones"
      intro="Las reglas para usar REPORTIA: qué es el servicio, qué puedes esperar de un reporte, qué implica ser voluntario y cómo funcionan los puntos."
      updated={UPDATED}
      sections={sections}
    />
  )
}
