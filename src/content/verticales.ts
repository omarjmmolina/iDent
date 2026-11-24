/**
 * Las ocho verticales de servicio de la clínica.
 *
 * Lista proporcionada por la clínica (Karely, nov 2026). Dos de ellas,
 * ortodoncia y endodoncia, ya tenían sus páginas pilar con sub-páginas y
 * siguen siendo el foco del plan de trabajo; las otras seis se suman como
 * páginas propias.
 *
 * ⚠️ CRITERIO DE NOMBRES. La clínica nombra las verticales en lenguaje
 * clínico ("odontología preventiva"); los pacientes buscan en lenguaje
 * común ("limpieza dental"). El sitio usa los dos:
 *
 *   · `nombre`   → lo que se ve en el menú y en las tarjetas. Lenguaje
 *                  de paciente, que es por donde llega el tráfico.
 *   · `nombreClinico` → la etiqueta de la especialidad. Se muestra en la
 *                  página y se usa en el schema, así que la keyword
 *                  semántica no se pierde.
 *   · `tambienBuscado` → sinónimos y términos de cola larga que la gente
 *                  teclea. Se muestran como chips y alimentan el texto.
 *
 * Así el menú se entiende a la primera sin renunciar al vocabulario
 * clínico que Google asocia a la especialidad.
 *
 * ⚠️ PENDIENTE: la lista que mandó la clínica empieza en el punto 2. Falta
 * confirmar cuál era el 1. Karely mencionó además "implantes" por
 * WhatsApp, que hoy se cubre dentro de restauradora: confirmar si quieren
 * página propia de implantología.
 */

export type ClaveVertical =
  | "preventiva"
  | "restauradora"
  | "ortodoncia"
  | "estetica"
  | "endodoncia"
  | "periodoncia"
  | "cirugia"
  | "odontopediatria";

export type Tratamiento = { nombre: string; descripcion: string };

export type Vertical = {
  clave: ClaveVertical;
  slug: string;
  /** Lenguaje de paciente: menú, tarjetas, títulos. */
  nombre: string;
  /** Lenguaje clínico: etiqueta de especialidad y schema. */
  nombreClinico: string;
  /** Sinónimos y cola larga que la gente teclea. */
  tambienBuscado: string[];
  /** Descripción corta para la tarjeta del menú y de la portada. */
  resumen: string;
  icono: string;
  imagen: string;
  orden: number;
  /** true en ortodoncia y endodoncia: tienen su propio pilar y sub-páginas. */
  tienePagina: boolean;
  titulo: string;
  metaDescription: string;
  h1: string;
  keyword: string;
  entradilla?: string;
  datos?: { label: string; valor: string }[];
  tratamientos?: Tratamiento[];
  secciones?: { h2: string; parrafos?: string[]; lista?: string[] }[];
  faqs?: { q: string; a: string }[];
};

export const VERTICALES: Vertical[] = [
  // ───────────────────────── 1. Preventiva ─────────────────────────
  {
    clave: "preventiva",
    slug: "limpieza-dental-queretaro",
    nombre: "Limpieza y prevención",
    nombreClinico: "Odontología preventiva",
    tambienBuscado: [
      "limpieza dental",
      "limpieza de sarro",
      "profilaxis dental",
      "aplicación de flúor",
      "selladores de fosetas",
    ],
    resumen:
      "Limpiezas, flúor y selladores para que lo que hoy se previene no se trate mañana. Es el tratamiento más barato que existe, y es el que evita todos los demás.",
    icono: "escudo",
    imagen: "/img/stock/odontologia-preventiva.webp",
    orden: 1,
    tienePagina: false,
    titulo:
      "Limpieza dental en Querétaro | Odontología preventiva | iDent Corregidora",
    metaDescription:
      "Limpieza dental, aplicación de flúor y selladores en nuestra clínica de Corregidora. Odontología preventiva para que no haya que tratar después. Agenda por WhatsApp.",
    h1: "Limpieza dental en Querétaro",
    keyword: "limpieza dental queretaro",
    entradilla:
      "Es la cita que más gente pospone y la que más dinero ahorra. Una limpieza cada seis meses cuesta una fracción de lo que cuesta una resina, y una fracción pequeñísima de lo que cuesta una endodoncia con corona. La prevención no es un extra: es la parte barata de la odontología.",
    datos: [
      { label: "Duración", valor: "40 a 60 min" },
      { label: "Frecuencia", valor: "Cada 6 meses" },
      { label: "Sesiones", valor: "1" },
    ],
    tratamientos: [
      {
        nombre: "Limpieza dental y eliminación de sarro",
        descripcion:
          "Se retira la placa y el sarro con ultrasonido, también por debajo del borde de la encía, y se pule el esmalte. Es lo que corta el ciclo que lleva a la caries y a la inflamación de encías.",
      },
      {
        nombre: "Aplicación de flúor",
        descripcion:
          "Remineraliza el esmalte y lo hace más resistente al ácido. Es especialmente útil en niños, en pacientes con brackets y en quien tiene muchas restauraciones.",
      },
      {
        nombre: "Selladores de fosetas y fisuras",
        descripcion:
          "Una resina fluida que rellena los surcos profundos de las muelas, donde el cepillo no entra. Es la medida con mejor relación entre costo y caries evitadas en dientes infantiles.",
      },
      {
        nombre: "Revisión y diagnóstico temprano",
        descripcion:
          "Con radiografías se detectan caries entre dientes que no se ven a simple vista, cuando todavía se resuelven con una resina pequeña.",
      },
    ],
    secciones: [
      {
        h2: "Cada cuánto conviene venir",
        parrafos: [
          "La pauta general es cada seis meses, pero no es igual para todo el mundo. Si tienes brackets, si fumas, si tuviste enfermedad periodontal o si eres propenso a formar sarro rápido, la indicación baja a cada tres o cuatro meses.",
          "En la primera limpieza te decimos cuál es tu caso. No es una recomendación comercial: en una boca que acumula sarro rápido, esperar un año significa empezar de cero cada vez.",
        ],
      },
      {
        h2: "Lo que una limpieza sí hace y lo que no",
        lista: [
          "Sí retira el sarro, que es placa mineralizada y no se quita cepillando.",
          "Sí reduce el sangrado de encías y el mal aliento que viene de ahí.",
          "Sí deja los dientes un tono más claros, porque quita manchas superficiales de café y tabaco.",
          "No blanquea: eso es otro tratamiento, el blanqueamiento.",
          "No cura una enfermedad periodontal avanzada: ahí hace falta raspado y alisado radicular.",
        ],
      },
      {
        h2: "Por qué sangra la encía durante la limpieza",
        parrafos: [
          "Porque ya estaba inflamada antes de entrar. Una encía sana no sangra al tocarla. Si sangra durante la limpieza, lo que se está viendo es el estado real de la encía, no un daño del procedimiento.",
          "Tras unos días con buena higiene, ese sangrado desaparece. Si sigue a las dos semanas, hay que valorar periodoncia.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿La limpieza dental desgasta el esmalte?",
        a: "No. El ultrasonido rompe el sarro por vibración, no raspa el diente. La sensación de que los dientes quedan distintos viene de que se retiró una capa de sarro que llevaba meses ahí.",
      },
      {
        q: "¿Duele?",
        a: "Normalmente no, aunque puede haber sensibilidad si las encías están muy inflamadas o si hay raíces expuestas. Si te molesta, se puede trabajar con anestesia tópica.",
      },
      {
        q: "¿Cada cuánto debo hacerme una limpieza?",
        a: "Cada seis meses en la mayoría de los casos. Cada tres o cuatro si tienes brackets, si fumas o si tuviste enfermedad de encías.",
      },
      {
        q: "¿Los selladores sirven para adultos?",
        a: "Se usan sobre todo en niños, cuando los molares permanentes acaban de salir. En adultos se valoran si hay surcos muy profundos y sin caries.",
      },
    ],
  },

  // ───────────────────────── 2. Restauradora ─────────────────────────
  {
    clave: "restauradora",
    slug: "resinas-y-coronas-queretaro",
    nombre: "Resinas y coronas",
    nombreClinico: "Odontología restauradora",
    tambienBuscado: [
      "resinas dentales",
      "tapar una caries",
      "corona dental",
      "incrustación dental",
      "prótesis dental",
    ],
    resumen:
      "Reparar lo dañado y reponer lo que falta: resinas, incrustaciones, coronas y prótesis. Devolver la función de masticar antes de que el problema se extienda a los dientes vecinos.",
    icono: "pieza",
    imagen: "/img/stock/odontologia-restauradora.webp",
    orden: 2,
    tienePagina: false,
    titulo:
      "Resinas, coronas y prótesis en Querétaro | Odontología restauradora | iDent",
    metaDescription:
      "Resinas, incrustaciones, coronas y prótesis dentales en Corregidora. Odontología restauradora para reparar dientes dañados y reponer los que faltan.",
    h1: "Resinas, coronas y prótesis en Querétaro",
    keyword: "resinas y coronas dentales queretaro",
    entradilla:
      "Cuando un diente se rompe, se caria o se pierde, el problema rara vez se queda ahí. Los dientes vecinos se inclinan hacia el hueco, el de la arcada opuesta se extruye buscando contacto y la mordida cambia. Restaurar a tiempo es lo que evita que un diente se convierta en tres.",
    datos: [
      { label: "Resina", valor: "1 cita" },
      { label: "Corona", valor: "2 citas" },
      { label: "Prótesis", valor: "Según el caso" },
    ],
    tratamientos: [
      {
        nombre: "Resinas (empastes)",
        descripcion:
          "Para caries pequeñas y medianas, y para reparar bordes fracturados. Se colocan en una sola cita, del color del diente y sin que se note.",
      },
      {
        nombre: "Incrustaciones",
        descripcion:
          "Cuando la pérdida es mayor que lo que aguanta una resina pero el diente todavía tiene paredes sanas. Se fabrican en laboratorio y conservan más diente propio que una corona.",
      },
      {
        nombre: "Coronas",
        descripcion:
          "Cubren el diente completo. Son la indicación después de una endodoncia en molares y cuando queda poca estructura. En zirconia, disilicato o metal-porcelana según la pieza.",
      },
      {
        nombre: "Prótesis fija y removible",
        descripcion:
          "Para reponer una o varias piezas ausentes y recuperar la masticación. Se valora cuál conviene según cuántos dientes faltan y cómo está el hueso.",
      },
    ],
    secciones: [
      {
        h2: "Cómo se decide qué lleva cada diente",
        parrafos: [
          "No lo decide el presupuesto: lo decide cuánta pared de diente queda en pie después de retirar la caries. Y eso solo se sabe en la cita, cuando se limpia la cavidad.",
          "Por eso un presupuesto serio contempla las dos posibilidades. Si entra una resina, se pone una resina. Si al limpiar se ve que no va a aguantar, se te explica ahí mismo por qué conviene una incrustación o una corona.",
        ],
      },
      {
        h2: "Lo que pasa si se deja el hueco",
        lista: [
          "Los dientes de al lado se inclinan hacia el espacio vacío.",
          "El diente de la arcada opuesta baja o sube buscando contacto.",
          "La mordida se descompensa y aparecen contactos que desgastan.",
          "El hueso de esa zona se reabsorbe por falta de estímulo.",
          "A los dos años, reponer esa pieza es más complicado y más caro.",
        ],
      },
      {
        h2: "Cuánto dura una restauración",
        parrafos: [
          "Una resina bien hecha, entre cinco y diez años. Una incrustación o una corona, entre diez y veinte. Lo que suele fallar no es el material: es la caries que aparece en el borde donde la restauración se une al diente.",
          "Por eso la higiene en esa zona y las revisiones periódicas deciden más la vida útil que el material elegido.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Las resinas se ven?",
        a: "Se eligen por tono para que coincidan con tu diente. De cerca y con buena luz un ojo entrenado las distingue; en una conversación normal, no.",
      },
      {
        q: "¿Puedo cambiar mis amalgamas por resinas?",
        a: "Se puede valorar. Si la amalgama está íntegra y sin caries debajo, muchas veces lo correcto es dejarla: cambiarla implica retirar estructura sana. Si está filtrada o fracturada, sí se sustituye.",
      },
      {
        q: "¿Cuánto cuesta una corona?",
        a: "Depende del material y de si hace falta poste o reconstrucción previa. Te damos el desglose por escrito en la valoración, con el total.",
      },
      {
        q: "¿Qué pasa si me falta un diente desde hace años?",
        a: "Se puede reponer, pero hay que ver primero cómo quedó el espacio y cuánto hueso hay. En algunos casos hace falta ortodoncia para recuperar el sitio antes de colocar nada.",
      },
    ],
  },

  // ───────────────────────── 3. Ortodoncia (pilar existente) ─────────────────────────
  {
    clave: "ortodoncia",
    slug: "ortodoncia-queretaro",
    nombre: "Ortodoncia",
    nombreClinico: "Ortodoncia y ortopedia maxilar",
    tambienBuscado: [
      "brackets",
      "alineadores invisibles",
      "ortodoncia para adultos",
      "ortodoncia infantil",
      "corregir la mordida",
    ],
    resumen:
      "Alinear los dientes y corregir la mordida con brackets metálicos, estéticos o alineadores invisibles. Decisión que se compara mucho: te damos el plan y el costo por escrito.",
    icono: "brackets",
    imagen: "/img/stock/ortodoncia.webp",
    orden: 3,
    tienePagina: true,
    titulo: "Ortodoncia en Querétaro | Brackets y alineadores | iDent Corregidora",
    metaDescription:
      "Ortodoncia en Querétaro desde Corregidora: brackets metálicos, estéticos, alineadores invisibles y ortodoncia infantil.",
    h1: "Ortodoncia en Querétaro",
    keyword: "ortodoncia queretaro",
  },

  // ───────────────────────── 4. Estética ─────────────────────────
  {
    clave: "estetica",
    slug: "estetica-dental-queretaro",
    nombre: "Estética dental",
    nombreClinico: "Odontología estética",
    tambienBuscado: [
      "blanqueamiento dental",
      "carillas dentales",
      "diseño de sonrisa",
      "dientes más blancos",
      "cerrar espacios entre dientes",
    ],
    resumen:
      "Blanqueamiento, carillas y diseño de sonrisa. Mejorar cómo se ve tu sonrisa partiendo de lo que ya tienes, sin desgastar más diente del necesario.",
    icono: "brillo",
    imagen: "/img/stock/estetica-dental.webp",
    orden: 4,
    tienePagina: false,
    titulo:
      "Blanqueamiento y carillas dentales en Querétaro | Estética dental | iDent",
    metaDescription:
      "Blanqueamiento dental, carillas y diseño de sonrisa en nuestra clínica de Corregidora. Estética dental conservadora, sin desgastar de más.",
    h1: "Blanqueamiento, carillas y diseño de sonrisa en Querétaro",
    keyword: "estetica dental queretaro",
    entradilla:
      "La estética dental tiene una regla que conviene conocer antes de empezar: cuanto menos diente se toque, mejor. Hay casos que se resuelven con un blanqueamiento y hay quien llega pidiendo carillas cuando su caso era ortodoncia. Lo primero es ver cuál es el tuyo.",
    datos: [
      { label: "Blanqueamiento", valor: "1 a 3 sesiones" },
      { label: "Carillas", valor: "2 a 3 citas" },
      { label: "Orden correcto", valor: "Salud primero" },
    ],
    tratamientos: [
      {
        nombre: "Blanqueamiento dental",
        descripcion:
          "Aclara el tono del esmalte. En consultorio, en casa con férulas, o combinado. Es el tratamiento estético más conservador porque no toca la estructura del diente.",
      },
      {
        nombre: "Carillas",
        descripcion:
          "Láminas finas que se adhieren a la cara visible del diente. Corrigen color, forma y pequeños desalineamientos. En resina o en cerámica, según el caso y el presupuesto.",
      },
      {
        nombre: "Diseño de sonrisa",
        descripcion:
          "Planificar el conjunto antes de tocar nada: proporción de los dientes, línea de la encía y cómo encaja con tu cara. Se ve el resultado propuesto antes de empezar.",
      },
      {
        nombre: "Reconstrucción estética",
        descripcion:
          "Reparar bordes desgastados o fracturados y cerrar pequeños espacios con resina, sin desgastar el diente.",
      },
    ],
    secciones: [
      {
        h2: "El orden importa más que el tratamiento",
        parrafos: [
          "Hay una secuencia que no conviene saltarse: primero la salud, después la función y al final la estética. Blanquear sobre caries activas o colocar carillas sobre encías inflamadas da un resultado que dura poco y que suele salir caro de corregir.",
          "También hay un orden dentro de lo estético: si los dientes están desalineados, mover primero con ortodoncia suele permitir carillas mucho más conservadoras, o incluso evitarlas.",
        ],
      },
      {
        h2: "Blanqueamiento: lo que sí cambia y lo que no",
        lista: [
          "Sí aclara el tono natural del esmalte, varios tonos en la mayoría de los casos.",
          "Sí funciona mejor en dientes amarillentos que en grisáceos.",
          "No cambia el color de resinas, coronas ni carillas: esas se quedan como están.",
          "No es permanente: dura entre uno y tres años según lo que comas y bebas.",
          "No está indicado si hay caries, encías inflamadas o raíces muy expuestas.",
        ],
      },
      {
        h2: "La sensibilidad del blanqueamiento",
        parrafos: [
          "Es el efecto secundario más común y casi siempre temporal: molestias con el frío durante las horas o los días siguientes. Se controla espaciando las sesiones y con pastas desensibilizantes antes y después.",
          "Si ya tienes sensibilidad de base, dilo antes: se puede ajustar la concentración y el protocolo en vez de aguantar.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto dura un blanqueamiento?",
        a: "Entre uno y tres años, según cuánto café, té, vino tinto y tabaco consumas. Se puede mantener con retoques en casa, con las mismas férulas.",
      },
      {
        q: "¿Las carillas desgastan el diente?",
        a: "Depende del tipo. Las de resina directa casi no desgastan. Las de cerámica suelen requerir un tallado mínimo, y hay técnicas que no desgastan nada en casos seleccionados. Pregunta siempre cuánto diente se va a tocar.",
      },
      {
        q: "¿Puedo blanquear si tengo coronas o resinas de delante?",
        a: "Sí, pero las restauraciones no cambian de color. Si están en la zona visible, hay que planear cambiarlas después del blanqueamiento para que el tono coincida.",
      },
      {
        q: "¿El blanqueamiento de farmacia sirve?",
        a: "Las tiras aclaran un poco y en casos muy leves pueden bastar. El riesgo está en usarlas sin revisión: sobre caries o encías retraídas causan dolor y daño.",
      },
    ],
  },

  // ───────────────────────── 5. Endodoncia (pilar existente) ─────────────────────────
  {
    clave: "endodoncia",
    slug: "endodoncia-queretaro",
    nombre: "Endodoncia",
    nombreClinico: "Endodoncia",
    tambienBuscado: [
      "tratamiento de conductos",
      "matar el nervio del diente",
      "dolor de muela",
      "urgencia dental",
      "retratamiento de conductos",
    ],
    resumen:
      "Quitar el dolor y conservar el diente natural. Tratamiento de conductos, retratamiento y urgencias: guardamos espacios de dolor cada día.",
    icono: "diente",
    imagen: "/img/stock/endodoncia.webp",
    orden: 5,
    tienePagina: true,
    titulo: "Endodoncia en Querétaro | Tratamiento de conductos | iDent Corregidora",
    metaDescription:
      "Endodoncia en Querétaro: tratamiento de conductos, retratamiento y atención de urgencias por dolor dental. Clínica en Corregidora.",
    h1: "Endodoncia en Querétaro",
    keyword: "endodoncia queretaro",
  },

  // ───────────────────────── 6. Periodoncia ─────────────────────────
  {
    clave: "periodoncia",
    slug: "tratamiento-de-encias-queretaro",
    nombre: "Encías y periodoncia",
    nombreClinico: "Periodoncia",
    tambienBuscado: [
      "encías que sangran",
      "tratamiento de encías",
      "raspado y alisado radicular",
      "dientes flojos",
      "gingivitis y periodontitis",
    ],
    resumen:
      "Tratar lo que sostiene los dientes. Encías que sangran, retracción y dientes que se mueven: detectado a tiempo se controla, dejado pasar se pierden piezas sanas.",
    icono: "encia",
    imagen: "/img/stock/periodoncia.webp",
    orden: 6,
    tienePagina: false,
    titulo:
      "Tratamiento de encías en Querétaro | Periodoncia | iDent Corregidora",
    metaDescription:
      "Tratamiento de encías en Corregidora: sangrado, retracción y dientes flojos. Periodoncia con sondaje, raspado y alisado radicular y mantenimiento.",
    h1: "Tratamiento de encías en Querétaro",
    keyword: "tratamiento de encias queretaro",
    entradilla:
      "La enfermedad de las encías es la causa número uno de pérdida de dientes en adultos, y avanza casi sin síntomas. No duele hasta que es tarde: para cuando un diente se mueve, ya se perdió buena parte del hueso que lo sostenía. Lo único que cambia el desenlace es llegar pronto.",
    datos: [
      { label: "Diagnóstico", valor: "Sondaje + radiografías" },
      { label: "Tratamiento", valor: "2 a 4 sesiones" },
      { label: "Mantenimiento", valor: "Cada 3 a 4 meses" },
    ],
    tratamientos: [
      {
        nombre: "Sondaje periodontal y diagnóstico",
        descripcion:
          "Se mide la profundidad alrededor de cada diente en seis puntos y se valora con radiografías cuánto hueso queda. Es el diagnóstico real, no una impresión a ojo.",
      },
      {
        nombre: "Raspado y alisado radicular",
        descripcion:
          "Limpieza profunda por debajo de la encía, con anestesia, para retirar el sarro adherido a la raíz. Es el tratamiento base de la periodontitis.",
      },
      {
        nombre: "Tratamiento de gingivitis",
        descripcion:
          "Cuando la inflamación todavía no afectó al hueso. Se resuelve con limpieza y técnica de higiene, y es completamente reversible.",
      },
      {
        nombre: "Mantenimiento periodontal",
        descripcion:
          "Revisiones y limpiezas cada tres o cuatro meses. Es lo que determina el resultado a diez años: la periodontitis no se cura, se controla.",
      },
    ],
    secciones: [
      {
        h2: "Las señales que no hay que dejar pasar",
        lista: [
          "La encía sangra al cepillar o al usar hilo. Una encía sana no sangra.",
          "Mal aliento que no se quita con enjuague.",
          "Los dientes se ven más largos: la encía se está retrayendo.",
          "Aparecen espacios nuevos entre dientes que antes no estaban.",
          "Sientes algún diente flojo, o la mordida distinta.",
          "La encía está roja e hinchada en vez de rosa y firme.",
        ],
      },
      {
        h2: "Gingivitis y periodontitis no son lo mismo",
        parrafos: [
          "La gingivitis es la inflamación de la encía. Duele poco, sangra y es completamente reversible: con una limpieza y buena técnica en casa, la encía vuelve a la normalidad en semanas.",
          "La periodontitis es el paso siguiente: la inflamación llegó al hueso y empezó a destruirlo. Eso ya no se revierte. El hueso perdido no vuelve a crecer solo; lo que se hace es detener el proceso y conservar lo que queda.",
          "La diferencia entre las dos la marca una medición, no una impresión. Por eso el sondaje es la primera cita.",
        ],
      },
      {
        h2: "Por qué importa más allá de la boca",
        parrafos: [
          "La enfermedad periodontal es una inflamación crónica con bacterias en contacto permanente con el torrente sanguíneo. Hay asociación documentada con control de la diabetes, enfermedad cardiovascular y complicaciones del embarazo.",
          "Si tienes diabetes, la relación va en los dos sentidos: la periodontitis dificulta el control glucémico y el mal control agrava la periodontitis. Dilo en la consulta, cambia el plan de mantenimiento.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Es normal que me sangren las encías al cepillarme?",
        a: "No. Es la señal más temprana y la más ignorada. Una encía sana no sangra, ni con el cepillo ni con el hilo. Si sangra, hay inflamación.",
      },
      {
        q: "¿El raspado y alisado duele?",
        a: "Se hace con anestesia, así que durante el procedimiento no. Después puede haber sensibilidad al frío unos días, porque queda expuesta una superficie de raíz que estaba cubierta de sarro.",
      },
      {
        q: "¿El hueso perdido se recupera?",
        a: "En general no. En defectos concretos hay técnicas regenerativas que pueden recuperar una parte, pero la regla es que lo perdido no vuelve. Por eso llegar pronto cambia tanto el pronóstico.",
      },
      {
        q: "¿Puedo hacerme ortodoncia si tengo problemas de encías?",
        a: "Primero se trata la encía. Mover dientes sobre un terreno inflamado acelera la pérdida de hueso. Una vez controlada, la ortodoncia se puede hacer con seguimiento más estrecho.",
      },
    ],
  },

  // ───────────────────────── 7. Cirugía oral ─────────────────────────
  {
    clave: "cirugia",
    slug: "extraccion-de-muelas-queretaro",
    nombre: "Cirugía y extracciones",
    nombreClinico: "Cirugía oral",
    tambienBuscado: [
      "extracción de muela",
      "muelas del juicio",
      "sacar una muela",
      "cirugía de terceros molares",
      "extracción de diente roto",
    ],
    resumen:
      "Extracciones y muelas del juicio, con diagnóstico previo y recuperación explicada. La extracción es el último recurso: primero vemos si el diente se puede conservar.",
    icono: "bisturi",
    imagen: "/img/stock/cirugia-oral.webp",
    orden: 7,
    tienePagina: false,
    titulo:
      "Extracción de muelas y muelas del juicio en Querétaro | Cirugía oral | iDent",
    metaDescription:
      "Extracciones dentales y cirugía de muelas del juicio en Corregidora. Diagnóstico con radiografía, procedimiento con anestesia y cuidados explicados.",
    h1: "Extracciones y muelas del juicio en Querétaro",
    keyword: "extraccion de muelas queretaro",
    entradilla:
      "Antes de sacar un diente, la pregunta correcta es si se puede conservar. Muchas piezas que llegan marcadas para extracción se salvan con una endodoncia y una corona, y conservar el diente propio casi siempre sale mejor y más barato que reponerlo. Cuando la extracción sí es la indicación, lo decimos con la radiografía enfrente.",
    datos: [
      { label: "Extracción simple", valor: "20 a 40 min" },
      { label: "Muela del juicio", valor: "30 a 60 min" },
      { label: "Recuperación", valor: "3 a 7 días" },
    ],
    tratamientos: [
      {
        nombre: "Extracción simple",
        descripcion:
          "De piezas visibles en boca, con anestesia local. Es un procedimiento corto y la recuperación suele ser de pocos días.",
      },
      {
        nombre: "Cirugía de muelas del juicio",
        descripcion:
          "Terceros molares retenidos o parcialmente erupcionados. Requiere radiografía previa para ver la posición de la raíz y su relación con el nervio.",
      },
      {
        nombre: "Extracción de restos radiculares",
        descripcion:
          "Raíces que quedaron de un diente fracturado hace tiempo. Aunque no duelan, son foco de infección y complican cualquier prótesis posterior.",
      },
      {
        nombre: "Pequeña cirugía bucal",
        descripcion:
          "Procedimientos como la frenectomía o el alargamiento de corona, cuando el caso lo requiere para poder restaurar.",
      },
    ],
    secciones: [
      {
        h2: "Cuándo hay que quitar una muela del juicio",
        lista: [
          "Cuando no tiene espacio y empuja a la muela de al lado.",
          "Cuando sale a medias y la encía se inflama una y otra vez.",
          "Cuando hay caries en ella o en la pieza vecina por falta de acceso.",
          "Cuando aparece un quiste alrededor en la radiografía.",
          "Cuando la ortodoncia necesita ese espacio.",
        ],
      },
      {
        h2: "Y cuándo no hace falta tocarla",
        parrafos: [
          "Una muela del juicio bien colocada, completamente erupcionada, que muerde con su antagonista y se puede limpiar, no hay por qué quitarla. Operar por si acaso no es la indicación por defecto.",
          "Lo que sí conviene es revisarla con radiografía cada cierto tiempo, porque los problemas aparecen sin síntomas hasta que ya hay daño en la muela de al lado.",
        ],
      },
      {
        h2: "Qué esperar después",
        lista: [
          "Las primeras 24 horas: gasa por presión, frío por fuera de la mejilla y nada de enjuagar con fuerza ni escupir.",
          "Nada de popote ni de fumar los primeros días: la succión puede desalojar el coágulo.",
          "Dieta blanda y fría los primeros días, masticando del otro lado.",
          "Inflamación máxima al segundo o tercer día, y a partir de ahí baja.",
          "Si el dolor aumenta al tercer o cuarto día en vez de bajar, hay que revisar: puede ser alveolitis.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Duele una extracción?",
        a: "Durante el procedimiento no: se trabaja con anestesia y no se empieza hasta que la zona está dormida del todo. Después hay molestia que se controla con analgésico y que va bajando a partir del tercer día.",
      },
      {
        q: "¿Me van a dejar el hueco?",
        a: "En muelas del juicio normalmente sí, porque no hacen falta. En cualquier otra pieza conviene planear la reposición: si no, los dientes vecinos se mueven y el hueso se reabsorbe.",
      },
      {
        q: "¿Se pueden quitar las cuatro muelas del juicio a la vez?",
        a: "Se puede, y a veces se hace para tener una sola recuperación. También se pueden hacer por lados. Depende de la dificultad de cada una y de tu disponibilidad.",
      },
      {
        q: "¿Cuántos días de reposo necesito?",
        a: "Para una extracción simple, el resto del día. Para una muela del juicio retenida, conviene dejar libre el día siguiente y evitar ejercicio intenso tres o cuatro días.",
      },
    ],
  },

  // ───────────────────────── 8. Odontopediatría ─────────────────────────
  {
    clave: "odontopediatria",
    slug: "dentista-para-ninos-queretaro",
    nombre: "Dentista para niños",
    nombreClinico: "Odontopediatría",
    tambienBuscado: [
      "dentista infantil",
      "odontopediatra",
      "caries en niños",
      "primera visita al dentista",
      "dientes de leche",
    ],
    resumen:
      "Atención dental para niños, pensada para que la primera vez no sea la última. Prevención, caries en dientes de leche y seguimiento del recambio.",
    icono: "nino",
    imagen: "/img/stock/odontopediatria.webp",
    orden: 8,
    tienePagina: false,
    titulo:
      "Dentista para niños en Querétaro | Odontopediatría | iDent Corregidora",
    metaDescription:
      "Dentista para niños en Corregidora: prevención, caries en dientes de leche, selladores y seguimiento del recambio dental. Primera visita sin instrumental.",
    h1: "Dentista para niños en Querétaro",
    keyword: "dentista para ninos queretaro",
    entradilla:
      "La primera visita al dentista marca la relación de un niño con la clínica durante años. Por eso la planteamos corta, sin instrumental más allá de lo necesario y con los papás dentro del consultorio. El objetivo de esa cita no es tratar: es que quiera volver.",
    datos: [
      { label: "Primera visita", valor: "Al año de edad" },
      { label: "Revisiones", valor: "Cada 6 meses" },
      { label: "Papás", valor: "Dentro del consultorio" },
    ],
    tratamientos: [
      {
        nombre: "Primera visita y revisión",
        descripcion:
          "Corta y amable, para que el niño conozca el lugar. Se revisa cómo van saliendo los dientes y se orienta a los papás sobre higiene y alimentación.",
      },
      {
        nombre: "Limpieza, flúor y selladores",
        descripcion:
          "La parte que más caries evita. Los selladores en los molares permanentes recién salidos son de lo más rentable que hay en odontología infantil.",
      },
      {
        nombre: "Caries en dientes de leche",
        descripcion:
          "Sí hay que tratarlas, aunque el diente se vaya a caer. Una caries sin tratar duele, infecta y puede dañar al permanente que viene debajo.",
      },
      {
        nombre: "Traumatismos y golpes",
        descripcion:
          "Caídas y golpes en los dientes de delante. Se valora el daño y, sobre todo, cómo quedó el germen del diente permanente.",
      },
      {
        nombre: "Hábitos y seguimiento del recambio",
        descripcion:
          "Succión del dedo, respiración bucal, pérdida prematura de dientes de leche. Detectarlo a tiempo evita tratamientos mucho mayores después.",
      },
    ],
    secciones: [
      {
        h2: "Cuándo llevarlo por primera vez",
        parrafos: [
          "La recomendación general es al año de edad, o cuando salga el primer diente. A esa edad la cita es de orientación: higiene, biberón, alimentación y qué esperar.",
          "La segunda referencia importante son los seis años, cuando salen los primeros molares permanentes. Ahí entra además la valoración de ortodoncia, que es otra cita y busca otras cosas: espacio, mordida y crecimiento de los maxilares.",
        ],
      },
      {
        h2: "Por qué sí se tratan las caries de leche",
        parrafos: [
          "Es la duda más frecuente y la respuesta es clara: porque duele, porque puede infectarse y porque el germen del diente permanente está justo debajo. Una infección en un diente de leche puede dejar una mancha o una malformación en el definitivo.",
          "Además, perder un diente de leche antes de tiempo hace que los vecinos se inclinen y le quiten el sitio al permanente. Lo que era una resina pequeña termina en un tratamiento de ortodoncia.",
        ],
      },
      {
        h2: "Cómo manejamos la cita",
        lista: [
          "Los papás entran al consultorio y ven lo que se hace.",
          "Se explica cada paso con palabras que el niño entiende, antes de hacerlo.",
          "Citas cortas, en horario de niño descansado, nunca al final del día.",
          "Nada de sorpresas: si algo va a sentirse raro, se avisa.",
          "Si el niño no está listo, se para y se vuelve otro día. Forzar una primera cita cuesta años.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿A qué edad debe ir mi hijo al dentista por primera vez?",
        a: "Al año de edad o cuando salga el primer diente, aunque esa cita sea sobre todo de orientación para los papás. La siguiente referencia clave son los seis años, para la valoración de ortodoncia.",
      },
      {
        q: "¿Hay que tratar las caries de los dientes de leche?",
        a: "Sí. Duelen, se infectan y pueden dañar al diente permanente que está debajo. Además, perder el diente antes de tiempo le quita el espacio al definitivo.",
      },
      {
        q: "¿Puedo entrar con mi hijo?",
        a: "Sí, y lo preferimos. Los papás entran al consultorio y ven lo que se hace.",
      },
      {
        q: "¿Qué hago si se le rompió un diente de un golpe?",
        a: "Ven el mismo día. Si fue un diente permanente y se salió completo, guárdalo en leche y acude de inmediato: hay una ventana de una hora. Si fue de leche, no lo reimplantes: puede dañar al permanente.",
      },
    ],
  },
];

export const verticalPorSlug = (slug: string) =>
  VERTICALES.find((v) => v.slug === slug);

export const verticalPorClave = (clave: ClaveVertical) =>
  VERTICALES.find((v) => v.clave === clave)!;

/** Ordenadas para el menú y la portada. */
export const VERTICALES_ORDENADAS = [...VERTICALES].sort(
  (a, b) => a.orden - b.orden,
);

/** Las seis que se renderizan con la plantilla genérica. */
export const VERTICALES_NUEVAS = VERTICALES.filter((v) => !v.tienePagina);
