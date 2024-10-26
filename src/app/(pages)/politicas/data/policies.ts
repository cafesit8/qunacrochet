interface IPolicy {
  title: string
  description?: string
  list?: string[]
}

export const policies: IPolicy[] = [{
  title: 'Términos y Condiciones de Uso',
  description: 'Estos términos y condiciones rigen su acceso y uso del Sitio Web www.qunacrochet.com. Al acceder o utilizar nuestro Sitio Web, el usuario admite que ha leído, entendido y aceptado los términos y condiciones de uso de la página sin restricciones, ni modificaciones. En Quna.Crochet contamos con una estricta política de privacidad y confidencialidad en la información de nuestros clientes. Somos responsables de todo el contenido publicado en nuestra página web, siendo los únicos autorizados en realizar cambios en la misma.'
}, {
  title: 'Productos y Pedidos',
  list: ['Los productos ofrecidos en Quna.Crochet están sujetos a disponibilidad, recuerda que son productos realizadas a mano.', 'Nos reservamos el derecho de modificar o discontinuar cualquier producto en cualquier momento sin previo aviso.', 'La solicitud de compra (pedido), se realiza a través del sitio web y las coordinaciones de entrega y pago de este a través de Whatsapp Business.', 'No se aceptan devoluciones.']
}, {
  title: 'Política de envíos',
  list: ['El tiempo de envío para provincias es de 2 a 4 días hábiles (según la empresa Shalom).', 'El cliente tiene la responsabilidad de proporcionar una dirección de entrega correcta y los datos correspondientes, para poder efectuar la entrega de manera efectiva.', 'En caso de que el destinatario no se encuentre en la dirección indicada o la dirección sea incorrecta, intentaremos contactar al cliente a través del teléfono proporcionado.', 'El rango de entregas en los distrito de Lima Metropolitana es de lunes a sábado de 9am a 7pm, se le informa al comprador una hora antes de la entrega para que pueda estar al tanto de su pedido.', 'Si no recibimos una respuesta del cliente en un plazo de 10 minutos, el repartidor continuará con su ruta para no afectar la entrega de otros pedidos. El cliente decidirá si reprogramar el envío o pedir que el repartidor vuelva a la dirección de entrega, ambos por un costo adicional al envío.', 'De no obtener respuesta, el pedido será devuelto al taller y el cliente podrá programar una nueva entrega en 24 horas con un costo adicional, según disponibilidad.']
}, {
  title: 'Propiedad Intelectual',
  list: ['Todos los contenidos del Sitio Web, incluidos textos, imágenes, gráficos, logotipos y diseños, están protegidos por derechos de autor y otros derechos de propiedad intelectual.', 'No podrás copiar, reproducir, distribuir o utilizar de otra manera ningún contenido del Sitio Web sin nuestro permiso previo por escrito.']
}, {
  title: 'Modificación de los términos y condiciones',
  description: 'Quna.Crochet se reserva expresamente el derecho a modificar, actualizar o ampliar en cualquier momento los presentes Términos y Condiciones. Cualquier modificación, actualización o ampliación producida será inmediatamente publicada, siendo responsabilidad del cliente revisar los Términos y Condiciones vigentes al momento de la navegación.'
}]