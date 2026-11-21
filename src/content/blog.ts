/**
 * Blog. El plan contempla el índice y los primeros artículos dentro de los
 * 5 días hábiles; el resto se alimenta en las revisiones bimestrales.
 *
 * Criterio de elección de temas: búsquedas con intención comercial que los
 * competidores no cubren porque solo tienen una página.
 */

export type Bloque =
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "lista"; items: string[] }
  | { tipo: "nota"; texto: string };

export type Articulo = {
  slug: string;
  titulo: string;
  tituloSeo: string;
  metaDescription: string;
  keyword: string;
  resumen: string;
  fecha: string;
  actualizado?: string;
  lectura: string;
  cuerpo: Bloque[];
  faqs?: { q: string; a: string }[];
};

export const ARTICULOS: Articulo[] = [
  {
    slug: "cuanto-cuesta-una-endodoncia-en-queretaro",
    titulo: "¿Cuánto cuesta una endodoncia en Querétaro?",
    tituloSeo:
      "¿Cuánto cuesta una endodoncia en Querétaro? Qué cambia el precio | iDent",
    metaDescription:
      "Qué determina el precio de una endodoncia en Querétaro: número de conductos, si hace falta corona y por qué el presupuesto más barato suele salir más caro.",
    keyword: "cuanto cuesta una endodoncia en queretaro",
    resumen:
      "El precio de una endodoncia varía más de lo que parece, y casi siempre por razones que se pueden explicar. Esto es lo que mueve el número y en qué fijarte al comparar presupuestos.",
    fecha: "2026-11-21",
    lectura: "6 min",
    cuerpo: [
      {
        tipo: "p",
        texto:
          "Es la primera pregunta que nos llega por WhatsApp, casi siempre con dolor de por medio. La respuesta honesta es que depende, pero depende de cosas concretas que se pueden explicar en cinco minutos. Si entiendes qué mueve el precio, vas a poder comparar presupuestos de verdad en vez de comparar solo cifras.",
      },
      { tipo: "h2", texto: "Lo que más mueve el precio: qué diente es" },
      {
        tipo: "p",
        texto:
          "Una endodoncia no es un procedimiento, son varios según la pieza. Un incisivo tiene un solo conducto, recto y accesible. Un molar superior puede tener cuatro, curvos y de difícil localización. El tiempo clínico entre uno y otro se puede triplicar, y con él el costo.",
      },
      {
        tipo: "lista",
        items: [
          "Incisivos y caninos: un conducto. Es el escenario más simple.",
          "Premolares: uno o dos conductos, según la pieza y el paciente.",
          "Molares: tres o cuatro conductos, a veces con anatomía complicada.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Por eso cualquier precio que te den por teléfono sin saber qué diente es, es un número de referencia, no un presupuesto.",
      },
      { tipo: "h2", texto: "El segundo factor: si es primera vez o retratamiento" },
      {
        tipo: "p",
        texto:
          "Volver a entrar a un diente que ya tuvo endodoncia cuesta más que hacerla por primera vez. Hay que retirar el material de relleno anterior, a veces quitar un poste o una corona, encontrar el conducto que se escapó la vez pasada y desinfectar con más tiempo. Es un trabajo más lento y más delicado.",
      },
      { tipo: "h2", texto: "El costo que casi nadie te menciona: la corona" },
      {
        tipo: "p",
        texto:
          "Aquí está la diferencia más grande entre dos presupuestos que parecen iguales. Un diente endodonciado queda sin riego sanguíneo y con menos estructura: se vuelve frágil. En molares y premolares, la indicación es colocar una corona después, porque si se sigue masticando con una resina grande hay riesgo real de fractura vertical, y esa ya no tiene arreglo.",
      },
      {
        tipo: "p",
        texto:
          "Un presupuesto que solo cotiza la endodoncia se ve más barato que uno que incluye la corona, pero no está comparando lo mismo. Pregunta siempre si la corona está incluida y, si no lo está, cuánto cuesta. El total es lo que importa.",
      },
      { tipo: "h2", texto: "Qué más puede sumar" },
      {
        tipo: "lista",
        items: [
          "Radiografías de diagnóstico y de control.",
          "Poste de fibra cuando queda poca estructura dental.",
          "Reconstrucción previa a la corona.",
          "Consulta de urgencia si llegas con dolor fuera de cita.",
        ],
      },
      { tipo: "h2", texto: "Por qué el presupuesto más barato suele salir más caro" },
      {
        tipo: "p",
        texto:
          "Una endodoncia se abarata recortando tiempo clínico, y el tiempo clínico es exactamente donde está el resultado: el aislamiento con dique de goma, la localización de todos los conductos, la desinfección y un sellado que llegue hasta el final de la raíz. Cuando algo de eso se recorta, el diente no falla al día siguiente: falla en dos años.",
      },
      {
        tipo: "p",
        texto:
          "Y ahí la cuenta cambia: pagas el retratamiento, que cuesta más que la endodoncia original, o pierdes el diente y entras a extracción más implante, que es varias veces el costo de haberlo hecho bien la primera vez.",
      },
      { tipo: "h2", texto: "Qué pedir en cualquier clínica antes de decidir" },
      {
        tipo: "lista",
        items: [
          "Presupuesto por escrito que diga qué pieza es y cuántos conductos tiene.",
          "Si la corona está incluida o no, y cuánto cuesta aparte.",
          "Cuántas sesiones son y qué pasa si se complica.",
          "Si se trabaja con aislamiento absoluto con dique de goma.",
          "Si se toma radiografía de control al terminar.",
        ],
      },
      {
        tipo: "nota",
        texto:
          "En iDent te damos ese presupuesto por escrito en la valoración, y si nos mandas una radiografía previa por WhatsApp te damos un rango antes de que vengas a la clínica.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo saber el precio sin ir a la clínica?",
        a: "Un rango sí. Mándanos por WhatsApp qué diente es, desde cuándo te duele y, si tienes, la radiografía. Con eso te damos un rango realista. El número cerrado necesita una radiografía nuestra.",
      },
      {
        q: "¿Es más barato sacar el diente?",
        a: "En el momento, sí. A dos años, no: la extracción lleva a implante o a prótesis, y cualquiera de los dos cuesta varias veces lo que cuesta conservar el diente con endodoncia y corona.",
      },
      {
        q: "¿Se puede pagar en partes?",
        a: "Sí. En tratamientos que requieren endodoncia más corona, el pago se puede dividir entre las dos etapas. Te damos el desglose en la valoración.",
      },
    ],
  },
  {
    slug: "brackets-o-alineadores-invisibles",
    titulo: "Brackets o alineadores invisibles: cómo elegir sin arrepentirte",
    tituloSeo:
      "Brackets o alineadores invisibles: cuál elegir | iDent Querétaro",
    metaDescription:
      "Comparativa honesta entre brackets metálicos, estéticos y alineadores invisibles: qué casos resuelve cada uno, costo relativo, disciplina y tiempo de tratamiento.",
    keyword: "brackets o alineadores invisibles",
    resumen:
      "No es una cuestión de cuál es mejor, sino de cuál encaja con tu caso y con tu forma de vivir. Las diferencias reales, sin el discurso de venta.",
    fecha: "2026-11-21",
    lectura: "7 min",
    cuerpo: [
      {
        tipo: "p",
        texto:
          "Casi todo el mundo llega a la valoración con la decisión medio tomada: quiere alineadores porque no se ven. Es una preferencia legítima, pero la pregunta correcta no es cuál se nota menos, sino cuál resuelve tu caso. Hay bocas donde las dos opciones funcionan y la decisión es tuya, y hay bocas donde solo una funciona.",
      },
      { tipo: "h2", texto: "La diferencia técnica, en una frase" },
      {
        tipo: "p",
        texto:
          "El bracket va pegado al diente y trabaja las veinticuatro horas, apoyado en un alambre que puede aplicar fuerzas altas y controladas en tres dimensiones. El alineador es una férula que empuja, se quita y se pone, y trabaja solo las horas que la traes puesta.",
      },
      { tipo: "h2", texto: "Qué resuelve cada uno" },
      { tipo: "h3", texto: "Dónde gana el bracket" },
      {
        tipo: "lista",
        items: [
          "Apiñamiento severo, con dientes muy rotados o montados.",
          "Cierre de espacios grandes, por ejemplo después de extracciones.",
          "Mordidas cruzadas y correcciones que necesitan fuerza sostenida.",
          "Adolescentes, donde la disciplina de quitar y poner suele fallar.",
          "Presupuestos ajustados: es la opción de menor costo.",
        ],
      },
      { tipo: "h3", texto: "Dónde gana el alineador" },
      {
        tipo: "lista",
        items: [
          "Apiñamiento leve a moderado y cierre de espacios pequeños.",
          "Recaídas después de una ortodoncia previa.",
          "Adultos con trabajo de cara al público.",
          "Pacientes que viajan o viven lejos: las revisiones son cada seis a ocho semanas.",
          "Quien tiene problemas de encías: permite una higiene mucho más fácil.",
        ],
      },
      { tipo: "h2", texto: "El factor que decide de verdad: la disciplina" },
      {
        tipo: "p",
        texto:
          "Un alineador funciona si lo traes veintidós horas al día. No es una recomendación optimista, es el umbral técnico: por debajo de veinte horas los dientes dejan de seguir el plan digital, la siguiente férula ya no entra y hay que rehacer alineadores. Eso significa meses perdidos y costo adicional.",
      },
      {
        tipo: "p",
        texto:
          "Si sabes que vas a quitártelos para cada café, el bracket te va a dar un mejor resultado aunque no sea lo que querías escuchar. Esta conversación la tenemos en la valoración y es mejor tenerla antes que a los ocho meses.",
      },
      { tipo: "h2", texto: "Costo: el orden es claro" },
      {
        tipo: "p",
        texto:
          "De menor a mayor: brackets metálicos, brackets estéticos de cerámica, brackets de zafiro y alineadores invisibles. La diferencia entre el extremo más bajo y el más alto puede ser de varias veces, así que vale la pena pedir las cifras de los sistemas que sirven para tu caso y compararlas con el documento enfrente.",
      },
      { tipo: "h2", texto: "Tiempo: menos diferencia de la que se cree" },
      {
        tipo: "p",
        texto:
          "En casos leves, los alineadores pueden ser más rápidos: de doce a dieciocho meses. En casos complejos, los brackets terminan antes porque pueden aplicar la fuerza que el caso necesita. La publicidad de ortodoncia en seis meses existe, pero casi siempre se refiere a alinear solo los dientes de delante sin tocar la mordida, que es otra cosa.",
      },
      { tipo: "h2", texto: "La opción intermedia que casi nadie menciona" },
      {
        tipo: "p",
        texto:
          "Brackets estéticos arriba y metálicos abajo. Los de arriba son los que se ven al hablar y al sonreír; los de abajo casi no. Baja el costo respecto a poner estéticos en las dos arcadas y el resultado visible es prácticamente el mismo. Es una solución que usamos seguido y que resuelve bien el dilema de discreción contra presupuesto.",
      },
      {
        tipo: "nota",
        texto:
          "La única forma de saber qué sistemas sirven para tu boca es una radiografía panorámica y una revisión de la mordida. En la valoración te decimos cuáles funcionan en tu caso, con el costo de cada uno, y la decisión la tomas tú.",
      },
    ],
    faqs: [
      {
        q: "¿Los alineadores sirven para cualquier caso?",
        a: "No. En mordidas que requieren corrección esquelética importante o en apiñamientos severos, los brackets dan un resultado mejor y más predecible. Si tu caso no es apto, te lo decimos.",
      },
      {
        q: "¿Puedo empezar con alineadores y cambiar a brackets?",
        a: "Se puede, y a veces es la indicación correcta cuando el tratamiento no avanza según el plan. Implica rehacer la planificación, así que lo ideal es elegir bien desde el inicio.",
      },
      {
        q: "¿Cuál duele menos?",
        a: "El alineador genera una molestia más suave pero más constante, porque cambias de férula cada una o dos semanas. El bracket concentra la molestia en los tres días posteriores a cada ajuste mensual. Ninguno duele de forma significativa después de la primera semana.",
      },
    ],
  },
];

export const articuloPorSlug = (slug: string) =>
  ARTICULOS.find((a) => a.slug === slug);
