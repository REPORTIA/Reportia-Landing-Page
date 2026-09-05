import { Link } from 'react-router-dom'
import LegalPage from './LegalPage'

const UPDATED = '4 de septiembre de 2026'

const Tag = ({ kind, children }) => (
  <span className={`legal__tag ${kind ? `legal__tag--${kind}` : ''}`}>{children}</span>
)

const sections = [
  {
    id: 'responsable',
    title: 'Quién es responsable de tus datos',
    children: (
      <>
        <p>
          REPORTIA es una iniciativa ciudadana sin fines de lucro, no una empresa. La persona
          responsable del tratamiento de los datos personales que se recogen a través de REPORTIA es{' '}
          Jorge Ponce, con domicilio en{' '}
          San Juan de Miraflores, Lima, Perú.
        </p>
        <p>
          Para cualquier consulta sobre esta política o para ejercer tus derechos, escríbenos a{' '}
          reportiaapp@gmail.com.
        </p>
        <p>
          Esta política se aplica a la aplicación móvil, al canal de WhatsApp y a este sitio web, y
          cumple con la Ley N.º 29733, Ley de Protección de Datos Personales, y su reglamento.
        </p>
      </>
    ),
  },
  {
    id: 'datos',
    title: 'Qué datos recogemos y para qué',
    children: (
      <>
        <p>
          Cada dato se recoge con una finalidad concreta. No usamos tus datos para fines distintos de
          los que se indican aquí sin avisarte antes.
        </p>
        <div className="legal__table">
          <table>
            <thead>
              <tr><th>Dato</th><th>Para qué lo usamos</th><th>Quién puede verlo</th></tr>
            </thead>
            <tbody>
              <tr><td>Nombre completo</td><td>Identificar tu cuenta y firmar tus reportes.</td><td><Tag kind="users">Usuarios registrados</Tag> en el ranking, con tu nombre de pila y la inicial del apellido</td></tr>
              <tr><td>Número de celular</td><td>Es tu credencial de acceso. Recibe el código de verificación por SMS.</td><td><Tag>Interno</Tag></td></tr>
              <tr><td>Correo electrónico</td><td>Contacto secundario, si decides registrarlo.</td><td><Tag>Interno</Tag></td></tr>
              <tr><td>Foto de perfil</td><td>Personalizar tu cuenta.</td><td><Tag>Interno</Tag></td></tr>
              <tr><td>Ubicación del reporte</td><td>Situar la incidencia y ofrecerla a voluntarios cercanos.</td><td><Tag kind="public">Mapa público</Tag> una vez resuelto el reporte</td></tr>
              <tr><td>Tu ubicación como voluntario</td><td>Ofrecerte incidencias cercanas mientras el voluntariado está activo.</td><td><Tag>Interno</Tag></td></tr>
              <tr><td>Fotos del reporte</td><td>Evidencia de la incidencia, hasta tres por reporte.</td><td><Tag kind="users">Voluntario y supervisor</Tag> del reporte</td></tr>
              <tr><td>Fotos de resolución</td><td>Probar el trabajo realizado, al menos una.</td><td><Tag kind="users">Supervisor</Tag> del reporte</td></tr>
              <tr><td>Destino de Yape o Plin</td><td>Abonar el canje de recompensas. Lo registras voluntariamente.</td><td><Tag>Administración</Tag> completo, para procesar el pago</td></tr>
              <tr><td>Puntos, nivel e insignias</td><td>Reconocer tu participación y armar el ranking distrital.</td><td><Tag kind="users">Usuarios registrados</Tag></td></tr>
              <tr><td>Token del dispositivo</td><td>Entregar avisos al teléfono sobre tus reportes.</td><td><Tag>Interno</Tag></td></tr>
              <tr><td>Registro de auditoría</td><td>Trazabilidad de las acciones de moderación sobre reportes y cuentas.</td><td><Tag>Administración</Tag></td></tr>
            </tbody>
          </table>
        </div>
        <div className="legal__note legal__note--hard">
          <strong>Sobre el destino de pago.</strong> En la aplicación ves tu número de Yape o Plin
          enmascarado. El equipo de administración lo ve completo, junto a tu nombre, únicamente para
          procesar el abono de un canje, y el acceso queda registrado. El dato completo asociado a un
          canje se conserva noventa días después del abono y luego se elimina; queda solo la versión
          enmascarada en el historial. El destino guardado en tu perfil se mantiene mientras tu cuenta
          esté activa y puedes borrarlo cuando quieras.
        </div>
      </>
    ),
  },
  {
    id: 'ubicacion',
    title: 'Ubicación',
    children: (
      <>
        <p>Es el dato más delicado que tratamos, y hay dos ubicaciones distintas.</p>
        <h3>La ubicación del reporte</h3>
        <p>
          Se captura en el momento en que creas el reporte, con el permiso de ubicación del teléfono o
          con la ubicación que compartes por WhatsApp. Señala dónde está la incidencia, no dónde
          vives. Mientras el reporte está abierto, la ven el voluntario que lo acepta y el supervisor.
          Cuando se resuelve, la ubicación y la categoría se muestran en el mapa público, sin tu
          nombre ni ningún otro dato tuyo.
        </p>
        <h3>Tu ubicación como voluntario</h3>
        <p>
          Solo existe si activas el voluntariado. La registras desde tu perfil y la usamos para
          buscar incidencias cercanas y ofrecértelas. No se captura en segundo plano ni se comparte
          con otros usuarios. Puedes actualizarla o desactivar el voluntariado en cualquier momento,
          y con eso deja de usarse.
        </p>
      </>
    ),
  },
  {
    id: 'fotos',
    title: 'Fotografías y terceros que aparecen en ellas',
    children: (
      <>
        <p>
          Quien fotografía un bache o un punto de basura puede captar sin querer a un transeúnte, una
          placa o la fachada de una vivienda. Esas personas no consintieron aparecer, así que te
          pedimos que encuadres la incidencia y evites rostros, placas, interiores y documentos. Los
          <Link to="/terminos#contenido"> Términos y condiciones</Link> lo prohíben expresamente.
        </p>
        <p>
          Las fotos de un reporte no se publican en el mapa ni en ningún lugar abierto: solo las ven
          el voluntario y el supervisor que intervienen. Si apareces en una fotografía subida por otra
          persona y quieres que se retire, escríbenos a reportiaapp@gmail.com con el
          número de reporte o la descripción del lugar y la fecha, y la eliminaremos en un plazo
          máximo de cinco días hábiles.
        </p>
      </>
    ),
  },
  {
    id: 'publico',
    title: 'Qué se hace público',
    children: (
      <>
        <p>Hay tres niveles de visibilidad, y conviene tenerlos claros.</p>
        <ul>
          <li>
            <strong>Abierto a internet, sin cuenta:</strong> únicamente cifras totales por distrito
            (reportes recibidos, resueltos, activos y tiempo promedio de resolución) y el mapa de
            reportes resueltos con su ubicación y categoría. Ningún dato de personas.
          </li>
          <li>
            <strong>Visible para usuarios registrados:</strong> el ranking distrital, con la posición,
            los puntos y el nivel de cada participante. Se muestra tu nombre de pila y la inicial de
            tu apellido, no tu nombre completo.
          </li>
          <li>
            <strong>Visible solo para quienes intervienen en un reporte:</strong> las fotos y la
            descripción, que ven el voluntario asignado y el supervisor.
          </li>
        </ul>
        <div className="legal__note">
          <strong>Puedes salir del ranking.</strong> Desde tu perfil puedes desactivar tu aparición en
          la tabla de posiciones. Conservas tus puntos y sigues viendo tu propia posición; simplemente
          los demás dejan de verte.
        </div>
      </>
    ),
  },
  {
    id: 'terceros',
    title: 'Terceros y transferencia internacional',
    children: (
      <>
        <p>
          Para funcionar, REPORTIA se apoya en los siguientes proveedores. Cada uno recibe solo los
          datos necesarios para su tarea.
        </p>
        <div className="legal__table">
          <table>
            <thead>
              <tr><th>Proveedor</th><th>Qué recibe</th><th>Para qué</th><th>País</th></tr>
            </thead>
            <tbody>
              <tr><td>Twilio</td><td>Número de celular</td><td>Enviar el código de verificación por SMS</td><td>Estados Unidos</td></tr>
              <tr><td>Cloudinary</td><td>Fotos de reportes y de resolución</td><td>Almacenar y servir las imágenes</td><td>Estados Unidos</td></tr>
              <tr><td>Firebase (Google)</td><td>Token del dispositivo</td><td>Entregar los avisos push</td><td>Estados Unidos</td></tr>
              <tr><td>Mapbox</td><td>Coordenadas consultadas</td><td>Dibujar el mapa en la aplicación</td><td>Estados Unidos</td></tr>
              <tr><td>WhatsApp (Meta)</td><td>Celular, mensajes, ubicación y fotos</td><td>Canal alternativo para crear reportes</td><td>Estados Unidos</td></tr>
              <tr><td>n8n</td><td>Los mismos datos que WhatsApp</td><td>Orquestar el flujo del chatbot. Autoalojado en nuestra infraestructura de Azure</td><td>Brasil</td></tr>
              <tr><td>Microsoft Azure</td><td>Todos los datos del servicio</td><td>Alojar el servidor y la base de datos</td><td>Brasil</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Estos proveedores operan fuera del Perú, de modo que tus datos se transfieren
          internacionalmente. Lo hacemos únicamente con proveedores que ofrecen garantías de
          protección adecuadas y bajo contratos que limitan el uso de los datos a la finalidad
          indicada. No vendemos tus datos ni los cedemos a terceros para publicidad.
        </p>
        <p>
          Las fotografías que subes desde la aplicación viajan primero a nuestro servidor y desde ahí
          se envían al proveedor de almacenamiento; la aplicación no se comunica directamente con él.
        </p>
      </>
    ),
  },
  {
    id: 'conservacion',
    title: 'Cuánto tiempo conservamos tus datos',
    children: (
      <>
        <div className="legal__table">
          <table>
            <thead>
              <tr><th>Dato</th><th>Plazo</th></tr>
            </thead>
            <tbody>
              <tr><td>Datos de la cuenta</td><td>Al cerrarla, la cuenta queda deshabilitada y recuperable durante noventa días; vencido ese plazo se elimina de forma definitiva.</td></tr>
              <tr><td>Reportes y su ubicación</td><td>Se conservan de forma anonimizada tras la eliminación de la cuenta: se borran tu nombre, celular, correo y foto de perfil; quedan la ubicación, la categoría, la descripción y el historial de estados.</td></tr>
              <tr><td>Fotos de reportes y de resolución</td><td>Se eliminan las que subiste al cerrar tu cuenta. Las de resolución subidas por un voluntario pertenecen a su cuenta y sostienen la verificación del cierre.</td></tr>
              <tr><td>Destino de pago en el perfil</td><td>Mientras la cuenta esté activa. Puedes borrarlo cuando quieras.</td></tr>
              <tr><td>Destino sin enmascarar en un canje</td><td>Noventa días tras el abono; después queda solo la versión enmascarada.</td></tr>
              <tr><td>Ubicación como voluntario</td><td>Se elimina al desactivar el voluntariado o al cerrar la cuenta.</td></tr>
              <tr><td>Token del dispositivo</td><td>Hasta que cierres sesión en ese dispositivo o cierres la cuenta.</td></tr>
              <tr><td>Registro de auditoría</td><td>Veinticuatro meses, para poder revisar decisiones de moderación.</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'derechos',
    title: 'Tus derechos y cómo ejercerlos',
    children: (
      <>
        <p>
          Tienes derecho a acceder a tus datos, rectificarlos, cancelarlos y oponerte a su
          tratamiento. Para ejercerlos escríbenos a reportiaapp@gmail.com desde el
          correo o el celular registrado en tu cuenta. Respondemos en los plazos que fija la ley:
          veinte días hábiles para las solicitudes de acceso y diez días hábiles para las de
          rectificación, cancelación y oposición.
        </p>
        <h3>Cerrar tu cuenta</h3>
        <p>
          Puedes hacerlo tú mismo desde la aplicación, sin escribirnos. El cierre se confirma con un
          código de un solo uso enviado a tu celular, para evitar que otra persona lo haga por ti. Al
          confirmarlo, tu cuenta queda deshabilitada de inmediato: se cierran tus sesiones, dejas de
          recibir avisos y nadie puede acceder a ella. Durante noventa días puedes recuperarla con el
          mismo número. Vencido ese plazo, tus datos de cuenta se eliminan de forma definitiva y tus
          reportes quedan anonimizados como se describe arriba.
        </p>
        <p>
          Si consideras que no hemos atendido tu solicitud, puedes presentar una reclamación ante la
          Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos
          Humanos.
        </p>
      </>
    ),
  },
  {
    id: 'seguridad',
    title: 'Seguridad',
    children: (
      <>
        <p>Protegemos tus datos con medidas concretas, no con promesas genéricas:</p>
        <ul>
          <li>Todo el tráfico entre la aplicación, el sitio web y el servidor viaja cifrado.</li>
          <li>Los códigos de verificación se guardan con una función de hash, nunca en claro, y caducan a los pocos minutos.</li>
          <li>Las sesiones tienen vida corta y se renuevan con tokens rotativos.</li>
          <li>El acceso a los datos internos está limitado por rol: un voluntario solo ve los reportes que acepta, un supervisor los que verifica.</li>
          <li>Las acciones de moderación quedan registradas y son auditables.</li>
          <li>Seguimos los lineamientos de la norma internacional de seguridad de la información ISO/IEC 27001.</li>
        </ul>
        <p>
          Si detectamos un incidente que afecte a tus datos, te lo comunicaremos y lo notificaremos a
          la autoridad en los plazos que exige la ley.
        </p>
      </>
    ),
  },
  {
    id: 'cambios',
    title: 'Cambios en esta política',
    children: (
      <>
        <p>
          Publicaremos cualquier cambio en esta página con su fecha. Si el cambio afecta a qué datos
          recogemos, a quién los ve o a los terceros que los reciben, te lo avisaremos en la
          aplicación antes de que entre en vigor y, cuando la ley lo exija, te pediremos un nuevo
          consentimiento.
        </p>
      </>
    ),
  },
]

export default function Privacidad() {
  return (
    <LegalPage
      kicker="Legal"
      title="Política de privacidad"
      intro="Qué datos recoge REPORTIA, para qué los usa, quién puede verlos, con qué proveedores se comparten y cómo ejerces tus derechos."
      updated={UPDATED}
      sections={sections}
    />
  )
}
