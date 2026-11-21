/**
 * Contenido de las páginas de servicio.
 *
 * Regla del plan de trabajo: NADA DUPLICADO. Cada página tiene su propio
 * H1, su propia keyword objetivo y textos escritos para esa búsqueda.
 * Si se agrega un servicio nuevo, se escribe texto nuevo: no se clona.
 */

export type Faq = { q: string; a: string };

export type Foto = {
  /** Ruta dentro de /public cuando exista la foto real. null = placeholder. */
  src: string | null;
  /** Texto alternativo: descriptivo y con la keyword donde sea natural. */
  alt: string;
  /** Qué foto hay que tomar. Se muestra dentro del placeholder. */
  brief: string;
  ratio: "16/9" | "4/3" | "1/1" | "3/4";
};

export type Servicio = {
  slug: string;
  pilar: "ortodoncia" | "endodoncia";
  nombre: string;
  navNombre: string;
  titulo: string;
  metaDescription: string;
  h1: string;
  keyword: string;
  entradilla: string;
  datos: { label: string; valor: string }[];
  secciones: { h2: string; parrafos?: string[]; lista?: string[] }[];
  faqs: Faq[];
  foto: Foto;
};

export const PILARES = {
  ortodoncia: {
    slug: "ortodoncia-queretaro",
    nombre: "Ortodoncia",
    titulo: "Ortodoncia en Querétaro | Brackets y alineadores | iDent Corregidora",
    metaDescription:
      "Ortodoncia en Querétaro desde Corregidora: brackets metálicos, estéticos, alineadores invisibles y ortodoncia infantil. Valoración con plan de tratamiento y meses sin intereses.",
    h1: "Ortodoncia en Querétaro",
    keyword: "ortodoncia queretaro",
    intro:
      "La ortodoncia es una decisión que se piensa durante meses y se compara entre varias clínicas. En iDent partimos de una valoración donde se ve el caso completo en radiografía, se explican las opciones reales para esa boca y se entrega el costo cerrado por escrito. Después de eso, decidir es más fácil.",
    bajada:
      "Atendemos desde Corregidora a pacientes de todo el área metropolitana de Querétaro. Cinco tratamientos, una misma forma de trabajar: diagnóstico primero, precio claro después.",
    comoDecidir: [
      "Si buscas el costo más bajo y no te importa que se vean: brackets metálicos.",
      "Si trabajas de cara al público y quieres algo discreto sin salir del presupuesto: brackets estéticos.",
      "Si quieres poder quitártelos para comer y para fotos: alineadores invisibles.",
      "Si es para un niño de 6 a 11 años: ortodoncia infantil o, según el caso, ortopedia maxilar.",
    ],
  },
  endodoncia: {
    slug: "endodoncia-queretaro",
    nombre: "Endodoncia",
    titulo: "Endodoncia en Querétaro | Tratamiento de conductos | iDent Corregidora",
    metaDescription:
      "Endodoncia en Querétaro: tratamiento de conductos, retratamiento y atención de urgencias por dolor dental. Clínica en Corregidora. Escríbenos por WhatsApp y te decimos hoy mismo.",
    h1: "Endodoncia en Querétaro",
    keyword: "endodoncia queretaro",
    intro:
      "La endodoncia casi nunca se busca con calma: se busca con dolor, muchas veces de madrugada o en plena jornada de trabajo. Por eso lo primero que resolvemos es el dolor, y lo segundo, la pieza. Una endodoncia bien hecha conserva el diente natural y evita terminar en una extracción y un implante.",
    bajada:
      "Atendemos urgencias desde Corregidora para pacientes de todo Querétaro. Si estás con dolor ahora mismo, escríbenos por WhatsApp: contestamos en minutos y te decimos si hay espacio hoy.",
    comoDecidir: [
      "Dolor que no cede con analgésico, late o despierta de noche: urgencia por dolor dental.",
      "Diagnóstico de nervio dañado o caries profunda: tratamiento de conductos.",
      "Diente ya tratado que volvió a doler o a infectarse: retratamiento de conductos.",
    ],
  },
} as const;

export const SERVICIOS: Servicio[] = [
  // ───────────────────────── ORTODONCIA ─────────────────────────
  {
    slug: "brackets-metalicos",
    pilar: "ortodoncia",
    nombre: "Brackets metálicos",
    navNombre: "Brackets metálicos",
    titulo: "Brackets metálicos en Querétaro | Precio y tiempo | iDent",
    metaDescription:
      "Brackets metálicos en Querétaro: el tratamiento de ortodoncia más resolutivo y de menor costo. Valoración con plan y costo cerrado en nuestra clínica de Corregidora.",
    h1: "Brackets metálicos en Querétaro",
    keyword: "brackets metalicos queretaro",
    entradilla:
      "Son los que más casos resuelven y los que menos cuestan. Si el objetivo es corregir la mordida y alinear sin que el presupuesto se dispare, este es el punto de partida que recomendamos en la mayoría de los casos de adulto y adolescente.",
    datos: [
      { label: "Duración típica", valor: "18 a 24 meses" },
      { label: "Citas de ajuste", valor: "Cada 4 semanas" },
      { label: "Visibilidad", valor: "Se notan" },
    ],
    secciones: [
      {
        h2: "Por qué siguen siendo la opción más recomendada",
        parrafos: [
          "El bracket metálico tiene una ventaja que ningún otro sistema iguala: aguanta fuerzas altas sin romperse. Eso permite mover piezas que están muy rotadas, cerrar espacios grandes y corregir mordidas cruzadas en menos tiempo que un alineador. En casos complejos, no es que sea la alternativa barata: es la alternativa que funciona.",
          "A eso se suma lo evidente: es el tratamiento de ortodoncia con el costo más bajo de los cinco que ofrecemos, y el que mejor se adapta a pagos en mensualidades.",
        ],
      },
      {
        h2: "Para quién lo indicamos",
        lista: [
          "Apiñamiento moderado o severo, con piezas giradas o montadas.",
          "Mordidas que necesitan corrección y no solo alineación estética.",
          "Adolescentes, donde la disciplina de quitar y poner un alineador suele fallar.",
          "Pacientes que priorizan resolver bien el caso por encima de que no se note.",
        ],
      },
      {
        h2: "Cómo es el tratamiento, paso a paso",
        lista: [
          "Valoración con radiografía y fotografías intraorales.",
          "Plan de tratamiento por escrito, con tiempo estimado y costo cerrado.",
          "Colocación: una sola cita, entre 60 y 90 minutos.",
          "Ajustes cada cuatro semanas, de 20 a 30 minutos cada uno.",
          "Retiro y colocación de retenedores, que son los que sostienen el resultado.",
        ],
      },
      {
        h2: "Lo que sí tienes que saber antes",
        parrafos: [
          "Los primeros tres a cinco días hay molestia al morder, sobre todo después de cada ajuste. Se maneja con analgésico y con dieta blanda. Las primeras semanas también es común que el bracket roce la mejilla: la cera de ortodoncia lo resuelve.",
          "La higiene deja de ser opcional. Un paciente con brackets que no usa cepillo interdental termina con descalcificaciones blancas alrededor del bracket, y eso sí es permanente. En cada cita revisamos esto.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto duele poner brackets metálicos?",
        a: "Colocarlos no duele: no se perfora nada ni se usa anestesia. La molestia aparece entre 6 y 12 horas después, cuando el diente empieza a moverse, y dura unos tres días. Es una molestia de presión al morder, no un dolor agudo.",
      },
      {
        q: "¿Cuánto tiempo tengo que traerlos?",
        a: "Lo habitual es de 18 a 24 meses. Un caso solo de alineación leve puede cerrarse antes; una mordida que requiere corrección esquelética puede irse más allá. El tiempo estimado se te entrega por escrito en la valoración, no se improvisa sobre la marcha.",
      },
      {
        q: "¿Puedo pagar en mensualidades?",
        a: "Sí. El tratamiento se divide en un pago inicial al colocar y mensualidades que coinciden con las citas de ajuste. En la valoración te damos el desglose exacto.",
      },
      {
        q: "¿Qué no puedo comer con brackets?",
        a: "Nada duro que se muerda directamente: hielo, palomitas sin reventar, nuez, hueso de aceituna, costras de pan duro. Tampoco chicles ni caramelos masticables, que arrancan el bracket. Manzanas y zanahorias sí, pero cortadas en trozos.",
      },
    ],
    foto: {
      src: null,
      alt: "Paciente con brackets metálicos en la clínica iDent de Corregidora, Querétaro",
      brief:
        "Primer plano de sonrisa con brackets metálicos recién colocados. Paciente real con autorización firmada. Luz frontal, fondo neutro.",
      ratio: "4/3",
    },
  },
  {
    slug: "brackets-esteticos",
    pilar: "ortodoncia",
    nombre: "Brackets estéticos",
    navNombre: "Brackets estéticos",
    titulo: "Brackets estéticos en Querétaro | Cerámica y zafiro | iDent",
    metaDescription:
      "Brackets estéticos de cerámica y zafiro en Querétaro: la misma mecánica del bracket metálico, pero discretos. Valoración y costo cerrado en Corregidora.",
    h1: "Brackets estéticos en Querétaro",
    keyword: "brackets esteticos queretaro",
    entradilla:
      "Misma técnica que el bracket metálico, pero en cerámica o zafiro del color del diente. Es la opción de quien trabaja de cara al público, da clases, vende o se va a casar en el periodo del tratamiento y no quiere que lo primero que se le vea sea el metal.",
    datos: [
      { label: "Duración típica", valor: "18 a 26 meses" },
      { label: "Citas de ajuste", valor: "Cada 4 semanas" },
      { label: "Visibilidad", valor: "Discretos" },
    ],
    secciones: [
      {
        h2: "Cerámica o zafiro: cuál te conviene",
        parrafos: [
          "El bracket de cerámica es del color del diente, mate, y es el más usado porque tiene la mejor relación entre discreción y costo. El de zafiro es translúcido: deja pasar el color del propio diente, así que en dientes claros prácticamente desaparece. A cambio, cuesta más.",
          "En los dos casos el hilo sigue siendo metálico, aunque puede pedirse estético. Conviene saberlo antes: la gente espera que no se vea nada y lo que se ve es el alambre, no el bracket.",
        ],
      },
      {
        h2: "En qué se diferencia del bracket metálico",
        lista: [
          "Discreción: a un metro de distancia prácticamente no se distinguen.",
          "Costo: está por encima del metálico y por debajo de los alineadores.",
          "Resistencia: la cerámica es más frágil, así que la dieta dura hay que cuidarla más.",
          "Tiempo: puede alargarse unos meses respecto al metálico en casos complejos.",
        ],
      },
      {
        h2: "El tema del que casi nadie habla: las manchas",
        parrafos: [
          "El bracket de cerámica no se mancha, pero las ligas elásticas transparentes que lo sujetan sí, y cambian de color con café, té negro, vino tinto, refresco de cola y curry. Esas ligas se reemplazan en cada ajuste, así que el efecto dura semanas, no meses.",
          "Si tomas café varias veces al día, te lo decimos de frente en la valoración y valoramos ligas de color estable o pasar a un sistema autoligado.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Los brackets estéticos se ponen amarillos?",
        a: "El bracket no; las ligas transparentes sí se tiñen con café, vino tinto y refresco de cola. Se cambian en cada ajuste mensual, así que el color vuelve a cero cada cuatro semanas.",
      },
      {
        q: "¿Tardan más que los metálicos?",
        a: "En casos de alineación simple, no hay diferencia. En casos que requieren mucha fuerza sí pueden sumar algunos meses, porque la cerámica obliga a trabajar con fuerzas más controladas para no fracturarla.",
      },
      {
        q: "¿Cuánto más caros son que los metálicos?",
        a: "Están un escalón por encima del metálico y bastante por debajo de los alineadores invisibles. Te damos las tres cifras juntas en la valoración para que compares con el caso real en la mano.",
      },
      {
        q: "¿Se pueden combinar con metálicos?",
        a: "Sí, y es una solución que usamos seguido: estéticos en los dientes de arriba, que son los que se ven al hablar, y metálicos abajo. Baja el costo sin que se note.",
      },
    ],
    foto: {
      src: null,
      alt: "Brackets estéticos de cerámica colocados en arcada superior, clínica iDent Querétaro",
      brief:
        "Macro de arcada superior con brackets de cerámica. Mostrar lo poco que contrastan con el esmalte. Fondo oscuro para que resalte.",
      ratio: "4/3",
    },
  },
  {
    slug: "alineadores-invisibles",
    pilar: "ortodoncia",
    nombre: "Alineadores invisibles",
    navNombre: "Alineadores invisibles",
    titulo: "Alineadores invisibles en Querétaro | Ortodoncia sin brackets | iDent",
    metaDescription:
      "Alineadores invisibles en Querétaro: férulas transparentes removibles, sin brackets. Escaneo, plan digital y costo cerrado en la clínica iDent de Corregidora.",
    h1: "Alineadores invisibles en Querétaro",
    keyword: "alineadores invisibles queretaro",
    entradilla:
      "Férulas transparentes que te quitas para comer, para lavarte los dientes y para una foto importante. Es el tratamiento más cómodo de los cinco y también el que más depende de ti: funciona si lo traes puesto 22 horas al día, y no funciona si no.",
    datos: [
      { label: "Duración típica", valor: "12 a 24 meses" },
      { label: "Uso diario", valor: "22 horas" },
      { label: "Visibilidad", valor: "Casi nula" },
    ],
    secciones: [
      {
        h2: "Cómo funciona el tratamiento",
        parrafos: [
          "Se toma un escaneo o impresión de tu boca y con eso se diseña digitalmente el recorrido completo: desde cómo están hoy tus dientes hasta dónde deben quedar. De ese plan salen todas las férulas, numeradas. Cada una mueve los dientes una fracción de milímetro y se usa entre una y dos semanas.",
          "Antes de empezar ves la simulación del resultado final. Es la gran ventaja de este sistema: sabes a qué le estás diciendo que sí.",
        ],
      },
      {
        h2: "Cuándo sí y cuándo no los recomendamos",
        lista: [
          "Sí: apiñamiento leve a moderado, espacios entre dientes, recaída después de una ortodoncia previa.",
          "Sí: pacientes adultos con trabajo de cara al público o que viajan y no pueden ir a ajustes mensuales.",
          "No: mordidas que requieren corrección esquelética importante.",
          "No: pacientes que saben que no van a traerlos 22 horas al día. Es preferible decirlo antes que perder un año.",
        ],
      },
      {
        h2: "Lo que cambia en tu día a día",
        parrafos: [
          "Te los quitas para comer y para tomar cualquier cosa que no sea agua. Eso significa que el café de media mañana y el picoteo constante se acaban: cada vez que comes, hay que lavarse los dientes antes de volver a colocar la férula. A mucha gente este sistema le ordena la alimentación.",
          "Hablar se siente raro los primeros dos o tres días, sobre todo con la letra ese. Se pasa solo.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿De verdad no se notan?",
        a: "De cerca y con buena luz se alcanza a ver el borde de la férula y los pequeños topes de resina que se pegan a algunos dientes para que el alineador agarre. En una conversación normal, a un metro de distancia, no se distinguen.",
      },
      {
        q: "¿Qué pasa si un día no me los pongo?",
        a: "Un día aislado se recupera. El problema es la constancia: por debajo de 20 horas diarias los dientes no siguen el plan digital, la férula siguiente ya no entra y hay que rehacer alineadores. Eso cuesta tiempo y dinero.",
      },
      {
        q: "¿Son más caros que los brackets?",
        a: "Sí, son el tratamiento de ortodoncia de mayor costo que ofrecemos, porque incluye el diseño digital y la fabricación de todas las férulas. También suele ser el más corto en casos leves.",
      },
      {
        q: "¿Cada cuándo tengo que ir a la clínica?",
        a: "Cada seis a ocho semanas, y la cita es corta: se revisa que el movimiento vaya según el plan y se entregan las siguientes férulas. Por eso funciona bien para quien viaja o vive lejos.",
      },
    ],
    foto: {
      src: null,
      alt: "Alineador invisible transparente sostenido en mano en la clínica iDent de Corregidora",
      brief:
        "Férula transparente sostenida a contraluz entre los dedos, para que se lea lo delgada que es. Más una foto de paciente con el alineador puesto.",
      ratio: "4/3",
    },
  },
  {
    slug: "ortodoncia-infantil",
    pilar: "ortodoncia",
    nombre: "Ortodoncia infantil",
    navNombre: "Ortodoncia infantil",
    titulo: "Ortodoncia infantil en Querétaro | Desde los 6 años | iDent",
    metaDescription:
      "Ortodoncia infantil en Querétaro: primera valoración desde los 6 años, tratamientos interceptivos y seguimiento del recambio dental. Clínica iDent en Corregidora.",
    h1: "Ortodoncia infantil en Querétaro",
    keyword: "ortodoncia infantil queretaro",
    entradilla:
      "Entre los 6 y los 11 años el hueso del niño todavía está creciendo, y eso permite guiar el desarrollo en lugar de corregirlo después a la fuerza. Es la etapa en que menos se trabaja y más se resuelve.",
    datos: [
      { label: "Primera valoración", valor: "A los 6 años" },
      { label: "Primera fase", valor: "6 a 12 meses" },
      { label: "Objetivo", valor: "Guiar el crecimiento" },
    ],
    secciones: [
      {
        h2: "Por qué a los 6 años y no a los 14",
        parrafos: [
          "A los seis años ya salieron los primeros molares permanentes y los incisivos están en recambio. Con una radiografía en ese momento se ve algo que a simple vista no se nota: si hay espacio suficiente para los dientes que faltan por salir, si la mordida está cruzada y si hay un hábito que esté deformando el paladar.",
          "Detectarlo ahí cambia el pronóstico. Muchos casos que a los 14 años requieren extracciones de premolares o cirugía ortognática se habrían resuelto a los siete con un aparato de expansión durante ocho meses.",
        ],
      },
      {
        h2: "Qué revisamos en la primera valoración",
        lista: [
          "Espacio disponible para los dientes permanentes que todavía no salen.",
          "Mordida cruzada, mordida abierta o resalte excesivo.",
          "Hábitos: succión del pulgar, uso prolongado de biberón, respiración por la boca, deglución atípica.",
          "Pérdida prematura de dientes de leche, que corre de lugar a los permanentes.",
          "Frenillos labiales o linguales que estén interfiriendo.",
        ],
      },
      {
        h2: "Cómo manejamos la cita con un niño",
        parrafos: [
          "La primera cita es corta y sin instrumental en la boca más allá de lo necesario: se trata de que el niño se vaya tranquilo y quiera volver. Los papás entran al consultorio y ven las radiografías junto con el diagnóstico.",
          "Si hay que tratar, se explica primero qué pasa si no se hace nada. Hay casos en que lo correcto es esperar y volver a revisar en seis meses, y así lo decimos.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿A qué edad debe ir mi hijo al ortodoncista por primera vez?",
        a: "A los 6 años, aunque los dientes se vean derechos. A esa edad la revisión es de diagnóstico: en muchos casos la indicación es simplemente volver a revisar en seis meses, y eso ya es información valiosa.",
      },
      {
        q: "¿No es mejor esperar a que tenga todos los dientes permanentes?",
        a: "Para la parte estética, sí se puede esperar. Para la parte de crecimiento del hueso, no: después de los 12 años esa ventana se cierra y lo que se podía guiar con un aparato pasa a necesitar extracciones o cirugía.",
      },
      {
        q: "¿Mi hijo va a necesitar brackets después igual?",
        a: "Muchas veces sí, pero una segunda fase mucho más corta y simple. El objetivo de la primera fase no es evitar los brackets: es que cuando lleguen, el caso ya no sea complicado.",
      },
      {
        q: "¿Qué pasa si se chupa el dedo?",
        a: "Después de los cuatro años, la succión del pulgar deforma el paladar y adelanta los dientes de arriba. Se trabaja con aparatos que quitan el placer del hábito y con acompañamiento a los papás, no con regaños al niño.",
      },
    ],
    foto: {
      src: null,
      alt: "Niño en revisión de ortodoncia infantil en la clínica iDent de Corregidora, Querétaro",
      brief:
        "Niño de 7-9 años sentado en el sillón, sonriendo, con el doctor explicando algo. Ambiente amable, nada clínico frío. Autorización de los padres por escrito.",
      ratio: "4/3",
    },
  },
  {
    slug: "ortopedia-maxilar",
    pilar: "ortodoncia",
    nombre: "Ortopedia maxilar",
    navNombre: "Ortopedia maxilar",
    titulo: "Ortopedia maxilar en Querétaro | Expansión de paladar | iDent",
    metaDescription:
      "Ortopedia maxilar en Querétaro: expansión de paladar y guía del crecimiento de los maxilares en niños. Valoración con radiografía en la clínica iDent de Corregidora.",
    h1: "Ortopedia maxilar en Querétaro",
    keyword: "ortopedia maxilar queretaro",
    entradilla:
      "La ortodoncia mueve dientes; la ortopedia maxilar mueve hueso. Se hace solo mientras el niño está creciendo, y sirve para corregir la base sobre la que después se van a acomodar los dientes.",
    datos: [
      { label: "Edad ideal", valor: "7 a 11 años" },
      { label: "Duración", valor: "8 a 14 meses" },
      { label: "Trabaja sobre", valor: "Hueso, no dientes" },
    ],
    secciones: [
      {
        h2: "La diferencia con la ortodoncia, en una frase",
        parrafos: [
          "Si el paladar es estrecho, por más que se alineen los dientes no van a caber. La ortopedia maxilar ensancha el propio hueso del paladar aprovechando que la sutura central todavía no se ha cerrado, y eso solo es posible antes de la pubertad. Pasada esa edad, el mismo objetivo requiere cirugía.",
        ],
      },
      {
        h2: "Señales que deberían llevarte a una valoración",
        lista: [
          "El niño respira por la boca y duerme con la boca abierta o ronca.",
          "Los dientes de arriba muerden por dentro de los de abajo de un lado.",
          "La mandíbula se le desvía al cerrar.",
          "Los dientes permanentes están saliendo montados por falta de espacio.",
          "El perfil muestra la barbilla muy retraída o muy adelantada.",
        ],
      },
      {
        h2: "Qué implica para la familia",
        parrafos: [
          "El aparato de expansión se cementa y no se quita en casa. Durante las primeras semanas hay que activarlo con una llave, y eso lo hace un adulto: te enseñamos cómo en la clínica y te damos el calendario por escrito.",
          "Los primeros días el niño habla distinto y produce más saliva. Se adapta en menos de una semana. Es normal que aparezca un espacio entre los dos dientes frontales durante el proceso: significa que está funcionando y se cierra después.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Duele la expansión del paladar?",
        a: "No duele, pero se siente presión en el paladar y a veces en la nariz durante los minutos siguientes a cada activación. Se tolera bien y no suele necesitar analgésico.",
      },
      {
        q: "¿Hasta qué edad se puede hacer ortopedia maxilar?",
        a: "Mientras la sutura del paladar siga abierta, lo que en general ocurre hasta los 12 o 13 años en niñas y un poco después en niños. La radiografía nos dice el estado real, que no siempre coincide con la edad.",
      },
      {
        q: "¿Mi hijo va a hablar raro con el aparato?",
        a: "Los primeros tres a cinco días sí, porque la lengua necesita reaprender dónde apoyarse. Después habla normal. Ayuda que lea en voz alta unos minutos al día esa primera semana.",
      },
      {
        q: "¿Sirve para que deje de roncar?",
        a: "En niños con paladar estrecho y respiración bucal, ensanchar el maxilar mejora el paso de aire nasal y en muchos casos el ronquido disminuye. No sustituye la valoración con el otorrinolaringólogo cuando hay sospecha de apnea.",
      },
    ],
    foto: {
      src: null,
      alt: "Aparato de expansión de paladar usado en ortopedia maxilar en iDent Querétaro",
      brief:
        "Aparato de expansión sobre fondo neutro, con una moneda o regla al lado para dar escala. Más radiografía de antes y después de la expansión.",
      ratio: "4/3",
    },
  },

  // ───────────────────────── ENDODONCIA ─────────────────────────
  {
    slug: "tratamiento-de-conductos",
    pilar: "endodoncia",
    nombre: "Tratamiento de conductos",
    navNombre: "Tratamiento de conductos",
    titulo: "Tratamiento de conductos en Querétaro | Endodoncia | iDent",
    metaDescription:
      "Tratamiento de conductos en Querétaro sin dolor, con anestesia y radiografía de control. Clínica iDent en Corregidora. Escribe por WhatsApp y te atendemos hoy.",
    h1: "Tratamiento de conductos en Querétaro",
    keyword: "tratamiento de conductos queretaro",
    entradilla:
      "Cuando la caries o un golpe alcanzan el nervio del diente, el nervio se infecta y duele. El tratamiento de conductos retira ese tejido, desinfecta el interior de la raíz y la sella. El diente deja de doler y se conserva: eso es lo que está en juego.",
    datos: [
      { label: "Sesiones", valor: "1 a 2" },
      { label: "Duración por sesión", valor: "60 a 90 min" },
      { label: "Anestesia", valor: "Siempre" },
    ],
    secciones: [
      {
        h2: "Cómo saber si lo necesitas",
        lista: [
          "Dolor espontáneo que aparece sin que estés comiendo, sobre todo de noche.",
          "Dolor que sigue latiendo un buen rato después de tomar algo frío o caliente.",
          "El diente te duele al morder o lo sientes más alto que los demás.",
          "Se te oscureció un diente después de un golpe, aunque no duela.",
          "Apareció una bolita de pus en la encía, cerca de la raíz.",
        ],
      },
      {
        h2: "Qué pasa el día del tratamiento",
        parrafos: [
          "Se anestesia la zona y se aísla el diente con una goma para que nada del resto de la boca contamine el interior de la raíz. Ese aislamiento no es un extra: es la diferencia entre una endodoncia que dura veinte años y una que se reinfecta en dos.",
          "Después se retira el tejido infectado, se limpian y se dan forma a los conductos, se desinfectan y se rellenan con un material que los sella herméticamente. Al final se toma una radiografía de control para comprobar que el sellado llegó hasta el final de la raíz.",
        ],
      },
      {
        h2: "La parte que muchos se saltan: la corona",
        parrafos: [
          "Un diente endodonciado queda sin riego sanguíneo y con menos estructura, así que se vuelve frágil. Si se deja solo con una resina grande y se sigue masticando con él, hay un riesgo real de que se fracture por la mitad, y una fractura vertical ya no tiene arreglo: se pierde el diente.",
          "Por eso en molares la indicación es colocar una corona después. Te lo decimos desde el primer día, con el costo incluido, para que no sea una sorpresa tres semanas más tarde.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Duele un tratamiento de conductos?",
        a: "Durante el procedimiento no: se trabaja con anestesia y no se empieza hasta que la zona está dormida por completo. Lo que duele es el diente antes de tratarlo. Después hay molestia al morder de dos a cuatro días, que se controla con analgésico.",
      },
      {
        q: "¿Cuántas citas son?",
        a: "La mayoría se resuelve en una sola sesión de 60 a 90 minutos. Se pasa a dos citas cuando hay infección activa con pus y conviene dejar medicación dentro del conducto unos días.",
      },
      {
        q: "¿Es mejor sacar el diente y poner un implante?",
        a: "Casi nunca. Un diente natural con endodoncia bien hecha y corona tiene muy buen pronóstico a largo plazo, cuesta bastante menos que un implante y conserva el hueso. La extracción se reserva para dientes con fractura vertical o sin estructura suficiente.",
      },
      {
        q: "¿Cuánto dura un diente con endodoncia?",
        a: "Con la corona colocada a tiempo y buena higiene, puede durar toda la vida. Los fracasos suelen venir de dos cosas: posponer la corona o un sellado incompleto del conducto.",
      },
    ],
    foto: {
      src: null,
      alt: "Radiografía de control tras un tratamiento de conductos realizado en iDent Querétaro",
      brief:
        "Radiografía periapical de antes y después del tratamiento, lado a lado. Más foto del aislamiento con dique de goma en boca (transmite rigor clínico).",
      ratio: "16/9",
    },
  },
  {
    slug: "retratamiento",
    pilar: "endodoncia",
    nombre: "Retratamiento de conductos",
    navNombre: "Retratamiento",
    titulo: "Retratamiento de conductos en Querétaro | Endodoncia fallida | iDent",
    metaDescription:
      "Retratamiento de conductos en Querétaro cuando una endodoncia previa falló o volvió el dolor. Diagnóstico con radiografía en la clínica iDent de Corregidora.",
    h1: "Retratamiento de conductos en Querétaro",
    keyword: "retratamiento de conductos queretaro",
    entradilla:
      "Un diente que ya tuvo endodoncia y vuelve a doler o a infectarse no está perdido. En la mayoría de los casos se puede reabrir, retirar el material anterior, limpiar lo que quedó sin tratar y volver a sellar.",
    datos: [
      { label: "Sesiones", valor: "1 a 3" },
      { label: "Dificultad", valor: "Mayor que la primera vez" },
      { label: "Objetivo", valor: "Conservar el diente" },
    ],
    secciones: [
      {
        h2: "Por qué falla una endodoncia",
        lista: [
          "Conductos que quedaron sin localizar: los molares a veces tienen un cuarto conducto difícil de ver.",
          "Sellado incompleto, que deja espacio para que las bacterias vuelvan a colonizar.",
          "La corona o la resina definitiva nunca se colocó y el diente se filtró por arriba.",
          "Una fractura o una caries nueva que reinfectó el interior.",
        ],
      },
      {
        h2: "Qué hacemos distinto en un retratamiento",
        parrafos: [
          "Lo primero es un diagnóstico serio: radiografía y, cuando el caso lo pide, tomografía, porque hay que entender por qué falló antes de volver a entrar. Repetir el mismo procedimiento sin saber qué se escapó la primera vez es repetir el mismo resultado.",
          "Después se retira el material de relleno anterior, que a veces incluye quitar un poste, se localizan los conductos no tratados, se desinfecta con más tiempo y se vuelve a sellar. Es un trabajo más lento y más delicado que una endodoncia primaria, y así está planteado el tiempo de la cita.",
        ],
      },
      {
        h2: "Cuándo el retratamiento no es la mejor opción",
        parrafos: [
          "Si el diente tiene una fractura vertical de raíz, no hay retratamiento que lo salve y hay que decirlo con claridad. Lo mismo si queda tan poca estructura que no puede sostener una corona. En esos casos la conversación cambia a extracción e implante, y te damos las dos cotizaciones para que decidas con números.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Vale la pena retratar o mejor extraer?",
        a: "Si la raíz está íntegra y queda estructura para una corona, el retratamiento tiene buen pronóstico y es más barato que un implante. Con fractura vertical de raíz, la extracción es la indicación correcta.",
      },
      {
        q: "¿Por qué me volvió a doler si ya me habían matado el nervio?",
        a: "Porque lo que duele no es el nervio, que ya no está: es el hueso alrededor de la punta de la raíz, inflamado por bacterias que siguen dentro del conducto. Por eso se resuelve volviendo a limpiar y sellar.",
      },
      {
        q: "¿Cuánto cuesta respecto a una endodoncia normal?",
        a: "Cuesta más, porque toma más tiempo clínico y a veces hay que retirar postes o coronas existentes. El costo exacto depende de lo que se encuentre, y se cierra después de ver la radiografía.",
      },
      {
        q: "¿Puedo retratarme un diente que me hicieron en otra clínica?",
        a: "Sí, es lo más habitual. No necesitamos nada del tratamiento anterior más que la radiografía si la tienes; si no, la tomamos aquí.",
      },
    ],
    foto: {
      src: null,
      alt: "Radiografía de diente con endodoncia previa fallida antes del retratamiento, iDent Querétaro",
      brief:
        "Radiografía que muestre un sellado incompleto o una lesión en la punta de la raíz, junto a la del retratamiento terminado.",
      ratio: "16/9",
    },
  },
  {
    slug: "urgencia-dolor-dental",
    pilar: "endodoncia",
    nombre: "Urgencias y dolor dental",
    navNombre: "Urgencia por dolor",
    titulo: "Urgencia dental en Querétaro | Dolor de muela hoy | iDent Corregidora",
    metaDescription:
      "Urgencia dental en Querétaro: atención el mismo día para dolor de muela, absceso o diente fracturado. Escribe por WhatsApp a la clínica iDent en Corregidora.",
    h1: "Urgencia dental en Querétaro: atención el mismo día",
    keyword: "urgencia dental queretaro",
    entradilla:
      "Si estás con dolor ahora mismo, lo primero es quitar el dolor. Escríbenos por WhatsApp describiendo qué te pasa y te decimos en minutos si hay espacio hoy y qué puedes hacer mientras llegas.",
    datos: [
      { label: "Respuesta WhatsApp", valor: "En minutos" },
      { label: "Objetivo de la cita", valor: "Quitar el dolor" },
      { label: "Atención", valor: "Mismo día según agenda" },
    ],
    secciones: [
      {
        h2: "Qué sí es una urgencia dental",
        lista: [
          "Dolor que no cede con analgésico o que te despierta de madrugada.",
          "Hinchazón de la cara o de la encía, con o sin pus.",
          "Golpe que fracturó, aflojó o sacó un diente.",
          "Se te cayó una corona o una resina y el diente quedó sensible.",
          "Dolor después de un tratamiento dental reciente que va en aumento.",
        ],
      },
      {
        h2: "Qué hacer mientras llegas a la clínica",
        lista: [
          "Toma el analgésico que uses habitualmente, respetando la dosis del empaque.",
          "Aplica frío por fuera de la mejilla, nunca calor: el calor extiende la infección.",
          "Enjuaga con agua tibia y sal si hay encía inflamada.",
          "No pongas aspirina directamente sobre la encía: quema el tejido.",
          "Si te sacaron un diente de un golpe, guárdalo en leche y ven de inmediato; hay una ventana de una hora.",
        ],
      },
      {
        h2: "Por qué el dolor desaparece solo y eso no es buena noticia",
        parrafos: [
          "Es frecuente: duele tres días con todo, y de pronto se calma. Lo que pasó en muchos casos es que el nervio terminó de morir. La infección sigue ahí, avanzando hacia el hueso sin avisar, y vuelve semanas después convertida en un absceso.",
          "Si tuviste un dolor fuerte que se quitó solo, vale la pena una radiografía aunque hoy estés bien.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Atienden urgencias el mismo día?",
        a: "Reservamos espacios de urgencia en la agenda diaria. Escribe por WhatsApp describiendo el dolor y te confirmamos en minutos a qué hora puedes venir hoy.",
      },
      {
        q: "¿Qué hago si me duele de madrugada?",
        a: "Analgésico según la dosis del empaque, frío por fuera de la mejilla, duerme con la cabeza elevada y evita acostarte del lado que duele. Mándanos el mensaje aunque sea de noche: lo vemos a primera hora y te damos el primer espacio.",
      },
      {
        q: "¿Me van a sacar el diente?",
        a: "La extracción es el último recurso. En la mayoría de las urgencias por dolor, la solución es abrir el diente, drenar y empezar la endodoncia: ahí mismo se va el dolor y el diente se conserva.",
      },
      {
        q: "¿Cuánto cuesta la consulta de urgencia?",
        a: "La consulta de urgencia tiene un costo fijo que te decimos por WhatsApp antes de que vengas, junto con el costo del tratamiento si se puede estimar. Sin sorpresas en el mostrador.",
      },
    ],
    foto: {
      src: null,
      alt: "Atención de urgencia dental por dolor de muela en la clínica iDent de Corregidora, Querétaro",
      brief:
        "Consultorio listo con el equipo preparado, o recepción con el teléfono en mano. Transmitir disponibilidad inmediata, no dolor.",
      ratio: "16/9",
    },
  },
];

export const servicioPorSlug = (slug: string) =>
  SERVICIOS.find((s) => s.slug === slug);

export const serviciosDe = (pilar: "ortodoncia" | "endodoncia") =>
  SERVICIOS.filter((s) => s.pilar === pilar);
