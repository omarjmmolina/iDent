/**
 * Páginas de zona (SEO local / GEO).
 *
 * ⚠️ REGLA QUE NO SE ROMPE: iDent tiene UNA sola clínica, en Plaza El
 * Jacal, El Pueblito, Corregidora. No hay sucursales en Juriquilla, en
 * Zibatá, en El Marqués, en Huimilpan ni en San Juan del Río.
 *
 * Estas páginas existen porque los pacientes de esas zonas se trasladan,
 * no porque atendamos allá. Por eso:
 *   · Las que no son sede llevan slug "dentista-para-…", nunca "en".
 *   · El título dice de dónde es el paciente y dónde está la clínica.
 *   · Cada página abre con un aviso explícito de que la sede es
 *     Corregidora.
 *   · El mapa es siempre el mismo: el de la clínica en Corregidora.
 *
 * Prometer una presencia que no existe es, además de deshonesto, lo que
 * Google llama doorway page y penaliza.
 *
 * Regla del plan: "se abre una página de zona solo cuando hay contenido
 * real que ponerle". Por eso cada una lleva su ruta, su tiempo y su
 * contexto propio, y no una plantilla con el municipio cambiado.
 *
 * ⚠️ PENDIENTE: los tiempos de traslado son estimaciones en tráfico
 * normal. Conviene contrastarlos con lo que reportan los pacientes.
 */

export type Zona = {
  slug: string;
  municipio: string;
  nombreCorto: string;
  prioridad: 1 | 2 | 3 | 4 | 5;
  /** true solo donde está físicamente la clínica. */
  sede: boolean;
  titulo: string;
  metaDescription: string;
  h1: string;
  keyword: string;
  /** Aviso que abre la página, visible y sin rodeos. */
  aclaracion: string;
  entradilla: string;
  traslado: { tiempo: string; distancia: string; ruta: string };
  comoLlegar: string[];
  estacionamiento: string;
  contexto: { h2: string; parrafos: string[] }[];
  faqs: { q: string; a: string }[];
};

export const ZONAS: Zona[] = [
  {
    slug: "dentista-en-corregidora",
    municipio: "Corregidora",
    nombreCorto: "Corregidora",
    prioridad: 1,
    sede: true,
    titulo: "Dentista en Corregidora, Querétaro | Ortodoncia y endodoncia | iDent",
    metaDescription:
      "Clínica dental en El Pueblito, Corregidora: ortodoncia, endodoncia y urgencias por dolor dental. Aquí está la clínica, sin que tengas que cruzar la ciudad.",
    h1: "Dentista en Corregidora, Querétaro",
    keyword: "dentista corregidora queretaro",
    aclaracion:
      "La clínica está aquí, en Corregidora: Plaza El Jacal, en El Pueblito.",
    entradilla:
      "iDent está en Corregidora. No somos una clínica de la capital que también atiende por acá: la silla, el equipo y los doctores están en el municipio, y eso cambia por completo lo que te cuesta ir a una cita de ajuste de veinte minutos.",
    traslado: {
      tiempo: "Estás en casa",
      distancia: "Dentro del municipio",
      ruta: "Sin salir de Corregidora",
    },
    comoLlegar: [
      "Desde Candiles y Los Olvera: por Av. Candiles en dirección a El Pueblito.",
      "Desde el centro de El Pueblito: a pocos minutos de la plaza principal.",
      "Desde Tejeda y Balvanera: tomando Paseo Constituyentes hacia el poniente.",
      "Desde Santa Bárbara y El Mirador: bajando por Camino Real a El Pueblito.",
    ],
    estacionamiento: "Estacionamiento disponible para pacientes en Plaza El Jacal.", // TODO: confirmar condiciones
    contexto: [
      {
        h2: "Por qué Corregidora estaba desatendida",
        parrafos: [
          "Hasta ahora, un paciente de Corregidora que buscaba ortodoncia terminaba encontrando clínicas en Juriquilla o en la zona de Centro Sur. La consecuencia práctica es un tratamiento de dos años con una cita mensual, donde cada cita de veinte minutos se convierte en una tarde perdida entre traslado y tráfico.",
          "Ese es el motivo por el que abrimos aquí. Una ortodoncia son entre dieciocho y veinticuatro visitas: la cercanía no es un detalle de comodidad, es lo que determina si el tratamiento se termina o se abandona a la mitad.",
        ],
      },
      {
        h2: "Qué atendemos en la clínica",
        parrafos: [
          "Las dos especialidades de la casa son ortodoncia y endodoncia. En ortodoncia cubrimos brackets metálicos, brackets estéticos, alineadores invisibles, ortodoncia infantil y ortopedia maxilar. En endodoncia, tratamiento de conductos, retratamiento y urgencias por dolor.",
          "Para las urgencias reservamos espacios en la agenda de cada día. Si vives en Corregidora y te agarra un dolor de muela un martes a las once de la mañana, estás a minutos de que te lo resuelvan.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Dónde está exactamente la clínica en Corregidora?",
        a: "En Plaza El Jacal, sobre Av. Prolongación El Jacal 955, local 23, en El Pueblito, código postal 76910. En esta misma página tienes el mapa con el pin exacto.",
      },
      {
        q: "¿Atienden urgencias de dolor el mismo día?",
        a: "Sí. Guardamos espacios de urgencia diarios. Escribe por WhatsApp contando qué te pasa y te confirmamos en minutos a qué hora puedes venir.",
      },
      {
        q: "¿Necesito cita o puedo llegar directo?",
        a: "Para valoración y tratamientos programados, conviene cita para no esperar. Para una urgencia con dolor, escribe antes por WhatsApp: así preparamos el consultorio y no pierdes tiempo en la sala.",
      },
    ],
  },
  {
    slug: "dentista-en-el-pueblito",
    municipio: "Corregidora",
    nombreCorto: "El Pueblito",
    prioridad: 1,
    sede: true,
    titulo: "Dentista en El Pueblito, Corregidora | Ortodoncia y endodoncia | iDent",
    metaDescription:
      "Clínica dental en El Pueblito, Corregidora: ortodoncia, endodoncia y urgencias dentales en Plaza El Jacal. Agenda tu valoración por WhatsApp.",
    h1: "Dentista en El Pueblito, Corregidora",
    keyword: "dentista el pueblito corregidora",
    aclaracion:
      "Aquí es donde está la clínica: Plaza El Jacal, Av. Prolongación El Jacal 955.",
    entradilla:
      "El Pueblito es la cabecera de Corregidora y es donde está nuestra clínica. Aquí se concentra la vida del municipio: el mercado, la plaza, las escuelas y los trámites. Atender aquí significa que la cita del dentista cabe en una mañana en la que ya ibas a salir.",
    traslado: {
      tiempo: "Aquí está la clínica",
      distancia: "Cabecera municipal",
      ruta: "Plaza El Jacal, El Pueblito",
    },
    comoLlegar: [
      "Desde la plaza principal de El Pueblito: a pocos minutos en coche.",
      "Desde Camino Real a El Pueblito, llegando desde la zona de Pie de la Cuesta.",
      "Desde Av. Constituyentes poniente, entrando al centro de El Pueblito.",
      "Transporte público: rutas que llegan al centro de El Pueblito.", // TODO: confirmar números de ruta
    ],
    estacionamiento:
      "Estacionamiento de Plaza El Jacal; en horas de centro conviene llegar con cinco minutos de margen.", // TODO
    contexto: [
      {
        h2: "La ventaja de tratarte donde ya haces tu vida",
        parrafos: [
          "Una ortodoncia implica volver cada cuatro semanas durante dos años. Cuando la clínica está en el mismo lugar donde dejas a los niños en la escuela o haces el súper, esa cita deja de competir con tu día: se encaja en él.",
          "Es la razón por la que los tratamientos largos se terminan más cuando la clínica está cerca. No tiene que ver con la voluntad del paciente, tiene que ver con la logística.",
        ],
      },
      {
        h2: "Atención para toda la familia",
        parrafos: [
          "En El Pueblito atendemos muchos casos de ortodoncia infantil, que es la revisión que recomendamos a partir de los seis años. Es una cita corta, de diagnóstico, y en muchos casos la indicación es simplemente volver a revisar en seis meses.",
          "Para los papás que ya vienen con el niño, la valoración de ortodoncia de adulto se puede hacer en la misma visita.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué tan cerca están de la plaza de El Pueblito?",
        a: "Estamos en Plaza El Jacal, a pocos minutos en coche de la plaza principal. En esta página está el mapa con el pin exacto.",
      },
      {
        q: "¿Atienden niños?",
        a: "Sí. Recomendamos la primera valoración de ortodoncia a los seis años, aunque los dientes se vean derechos: a esa edad se detecta la falta de espacio y las mordidas cruzadas, que después cuestan mucho más resolver.",
      },
      {
        q: "¿Puedo llevar a dos personas de la familia el mismo día?",
        a: "Sí, y conviene decirlo al agendar para reservar el tiempo seguido y que no tengas que volver otro día.",
      },
    ],
  },
  {
    slug: "dentista-para-juriquilla",
    municipio: "Querétaro",
    nombreCorto: "Juriquilla",
    prioridad: 3,
    sede: false,
    titulo:
      "Ortodoncia y endodoncia para pacientes de Juriquilla | iDent Corregidora",
    metaDescription:
      "¿Vives en Juriquilla y buscas ortodoncia o endodoncia? Nuestra clínica está en Corregidora y organizamos las citas para que el traslado valga la pena.",
    h1: "Ortodoncia y endodoncia para pacientes de Juriquilla",
    keyword: "dentista juriquilla queretaro",
    aclaracion:
      "No tenemos sucursal en Juriquilla. Nuestra única clínica está en El Pueblito, Corregidora, a unos 40 minutos, y así organizamos las citas de quien viene desde el norte.",
    entradilla:
      "Si vives en Juriquilla, venir a tratarte implica cruzar el área metropolitana. Por eso con los pacientes de esta zona trabajamos distinto: citas más largas y menos frecuentes, confirmación el día anterior y la hora respetada. Si vas a manejar cuarenta minutos, lo mínimo es que no esperes en la sala.",
    traslado: {
      tiempo: "Aprox. 40 minutos",
      distancia: "Del norte al suroeste del área metropolitana",
      ruta: "Anillo Vial Fray Junípero Serra y Bernardo Quintana",
    },
    comoLlegar: [
      "Por Anillo Vial II Fray Junípero Serra hacia el sur, enlazando con Bernardo Quintana.",
      "Por Bernardo Quintana en dirección sur hasta Paseo Constituyentes.",
      "Paseo Constituyentes al poniente hasta entrar a Corregidora.",
      "Alternativa con menos semáforos a media mañana: Anillo Vial III en dirección poniente.",
    ],
    estacionamiento: "Estacionamiento de Plaza El Jacal para pacientes.", // TODO: confirmar
    contexto: [
      {
        h2: "Por qué un paciente de Juriquilla se traslada a Corregidora",
        parrafos: [
          "Pasa todos los días, y no es por falta de dentistas en el norte de la ciudad. Es por especialidad y por precio: la ortodoncia y la endodoncia en la zona de Juriquilla y Santa Rosa Jáuregui se cotizan a un nivel que no siempre corresponde a la diferencia técnica del tratamiento.",
          "Cuando la diferencia en un tratamiento completo es de varios miles de pesos, cuarenta minutos de camino una vez al mes dejan de parecer un problema. Lo que sí sería un problema es llegar y esperar media hora.",
        ],
      },
      {
        h2: "Cómo organizamos tus citas si vienes desde el norte",
        parrafos: [
          "Agrupamos procedimientos: si necesitas valoración, radiografía y limpieza, se hace en una sola visita en vez de tres. En ortodoncia, cuando el caso lo permite, espaciamos los ajustes a seis semanas en vez de cuatro.",
          "Para alineadores invisibles el esquema es todavía más cómodo: las revisiones son cada seis a ocho semanas y te entregamos varios juegos de férulas por adelantado.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Tienen consultorio en Juriquilla?",
        a: "No. Tenemos una sola clínica y está en Plaza El Jacal, El Pueblito, Corregidora. Lo que sí tenemos es un esquema de citas pensado para pacientes que se trasladan desde el norte de la ciudad.",
      },
      {
        q: "¿Cuánto se hace de Juriquilla a la clínica?",
        a: "Alrededor de cuarenta minutos en tráfico normal. Las horas más pesadas son de 7:30 a 9:30 y de 18:00 a 20:00; si puedes, agenda a media mañana o a media tarde.",
      },
      {
        q: "¿Vale la pena el traslado?",
        a: "Depende del tratamiento. Para una limpieza, probablemente no. Para una ortodoncia completa o una endodoncia con corona, la diferencia de costo suele ser de varios miles de pesos y ahí sí compensa. Te damos la cotización por WhatsApp antes de que te muevas de casa.",
      },
      {
        q: "¿Pueden darme todas las citas de una vez?",
        a: "Sí. A los pacientes que vienen de Juriquilla les dejamos agendada la serie completa de ajustes al inicio del tratamiento, para que elijas siempre el mismo horario y lo puedas organizar con tiempo.",
      },
    ],
  },
  {
    slug: "dentista-para-zibata",
    municipio: "El Marqués",
    nombreCorto: "Zibatá",
    prioridad: 3,
    sede: false,
    titulo:
      "Ortodoncia y endodoncia para pacientes de Zibatá | iDent Corregidora",
    metaDescription:
      "Pacientes de Zibatá, El Marqués: nuestra clínica está en Corregidora. Citas agrupadas, horario respetado y costo cerrado desde la valoración.",
    h1: "Ortodoncia y endodoncia para pacientes de Zibatá",
    keyword: "dentista zibata queretaro",
    aclaracion:
      "No tenemos sucursal en Zibatá. Nuestra única clínica está en El Pueblito, Corregidora, a unos 35 o 45 minutos cruzando la ciudad.",
    entradilla:
      "Zibatá creció rápido y con población joven: familias con niños en edad de primera valoración de ortodoncia y adultos que postergaron el tratamiento por falta de tiempo. Atendemos a esos pacientes en nuestra clínica de Corregidora, con un esquema pensado para que vengas lo menos posible.",
    traslado: {
      tiempo: "Aprox. 35 a 45 minutos",
      distancia: "Del oriente al suroeste del área metropolitana",
      ruta: "Anillo Vial III y Paseo Constituyentes",
    },
    comoLlegar: [
      "Saliendo de Zibatá hacia el Anillo Vial III Paso Ancho–Galeras.",
      "Anillo Vial III en dirección poniente, bordeando la ciudad.",
      "Enlace con Paseo Constituyentes y continuar hacia Corregidora.",
      "Alternativa en hora pico: Bernardo Quintana en dirección sur.",
    ],
    estacionamiento: "Estacionamiento de Plaza El Jacal para pacientes.", // TODO: confirmar
    contexto: [
      {
        h2: "Una zona joven, con mucha ortodoncia pendiente",
        parrafos: [
          "El perfil de Zibatá es distinto al del resto del área metropolitana: muchas familias jóvenes que llegaron en los últimos años. Eso se traduce en dos tipos de consulta muy concretos: niños de seis a once años que nunca han tenido una valoración de ortodoncia, y adultos de treinta y tantos que quieren corregir algo que arrastran desde la adolescencia.",
          "Para el primer caso el momento es ahora, porque la ventana de crecimiento del hueso se cierra. Para el segundo, los alineadores invisibles suelen ser la vía, porque no interfieren con el trabajo.",
        ],
      },
      {
        h2: "Citas pensadas para quien cruza la ciudad",
        parrafos: [
          "Confirmamos la cita el día anterior por WhatsApp y respetamos la hora. Si venimos retrasados por una urgencia, te avisamos antes de que salgas de casa: preferimos reagendar a que manejes cuarenta minutos para esperar.",
          "Cuando hay dos personas de la misma familia en tratamiento, las citas se programan seguidas para hacer un solo viaje.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Tienen consultorio en Zibatá?",
        a: "No. Nuestra única clínica está en Plaza El Jacal, El Pueblito, Corregidora. Atendemos a pacientes de Zibatá que se trasladan, y organizamos las citas pensando en eso.",
      },
      {
        q: "¿Cuánto tardo de Zibatá a la clínica?",
        a: "Entre treinta y cinco y cuarenta y cinco minutos según la hora. El Anillo Vial III fluye bien fuera de las horas pico de entrada y salida de las empresas de la zona.",
      },
      {
        q: "¿Qué recomiendan para un adulto que trabaja y no puede traer brackets visibles?",
        a: "Alineadores invisibles o brackets estéticos. La diferencia está en el costo y en la disciplina: el alineador hay que traerlo veintidós horas al día; el bracket estético trabaja solo. En la valoración vemos cuál encaja con tu caso y tu rutina.",
      },
      {
        q: "¿Atienden a niños de Zibatá para primera valoración?",
        a: "Sí, y recomendamos hacerla a los seis años. Es una cita corta, de diagnóstico, y muchas veces la conclusión es esperar y revisar en seis meses.",
      },
    ],
  },
  {
    slug: "dentista-para-el-marques-y-huimilpan",
    municipio: "El Marqués y Huimilpan",
    nombreCorto: "El Marqués y Huimilpan",
    prioridad: 4,
    sede: false,
    titulo:
      "Dentista para El Marqués y Huimilpan | Clínica en Corregidora | iDent",
    metaDescription:
      "Pacientes de El Marqués y Huimilpan: ortodoncia, endodoncia y urgencias en nuestra clínica de Corregidora, más cerca que el centro de Querétaro.",
    h1: "Ortodoncia y endodoncia para El Marqués y Huimilpan",
    keyword: "dentista el marques huimilpan",
    aclaracion:
      "No tenemos sucursal en estos municipios. Nuestra clínica está en El Pueblito, Corregidora, que desde buena parte de Huimilpan queda más cerca que el centro de Querétaro.",
    entradilla:
      "Son los dos municipios conurbados donde la oferta de especialidad es más escasa: hay odontología general, pero para una endodoncia o una ortodoncia la gente termina moviéndose a la capital. Nuestra clínica en Corregidora queda, para buena parte de estas localidades, más cerca que el centro de Querétaro.",
    traslado: {
      tiempo: "Aprox. 25 a 40 minutos",
      distancia: "Según la localidad de origen",
      ruta: "Carretera Querétaro–Huimilpan o Anillo Vial III",
    },
    comoLlegar: [
      "Desde Huimilpan cabecera: por la carretera estatal hacia Corregidora, subida directa sin cruzar la ciudad.",
      "Desde La Noria y Lagunillas: tomando la misma carretera en dirección norte.",
      "Desde La Pila y Pueblo Nuevo, El Marqués: por Paseo Constituyentes en dirección poniente.",
      "Desde El Colorado y Chichimequillas: por el Anillo Vial III rodeando la ciudad.",
    ],
    estacionamiento:
      "Estacionamiento de Plaza El Jacal, con espacio para camioneta.", // TODO: confirmar
    contexto: [
      {
        h2: "La razón por la que trabajamos estas zonas",
        parrafos: [
          "En El Marqués y en Huimilpan hay consultorios de odontología general bien resueltos, pero la especialidad es otra cosa. Cuando un paciente necesita un tratamiento de conductos o una ortodoncia completa, la indicación habitual es trasladarse a la capital, con el tiempo y el costo que eso implica.",
          "Desde Huimilpan, Corregidora queda en el camino: se llega antes aquí que al centro de Querétaro, y sin meterse al tráfico de la ciudad.",
        ],
      },
      {
        h2: "Todo el presupuesto antes de que te muevas",
        parrafos: [
          "A los pacientes que vienen de lejos les damos la cotización por WhatsApp antes de la primera visita, con la información que puedan compartirnos y, si la tienen, una radiografía previa. Así el viaje se hace sabiendo el número, no para averiguarlo.",
          "En la valoración presencial el costo se confirma por escrito y queda cerrado: lo que se cotizó es lo que se cobra.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Tienen consultorio en El Marqués o en Huimilpan?",
        a: "No. Tenemos una sola clínica, en Plaza El Jacal, El Pueblito, Corregidora. Atendemos a pacientes de los dos municipios que se trasladan hasta allá.",
      },
      {
        q: "¿Desde Huimilpan cuánto se hace?",
        a: "Entre veinticinco y treinta y cinco minutos desde la cabecera, por la carretera que sube directo a Corregidora. Es menos de lo que se hace al centro de Querétaro.",
      },
      {
        q: "¿Pueden resolver todo en una sola visita?",
        a: "Para una endodoncia, en la mayoría de los casos sí: una sesión de sesenta a noventa minutos. Para ortodoncia se necesita la valoración y después la cita de colocación, pero podemos dejarlas lo más juntas posible.",
      },
      {
        q: "¿Atienden urgencias de pacientes de estos municipios?",
        a: "Sí. Escribe por WhatsApp describiendo el dolor y te confirmamos el espacio del día antes de que salgas, para que no hagas el camino en balde.",
      },
    ],
  },
  {
    slug: "dentista-para-san-juan-del-rio",
    municipio: "San Juan del Río",
    nombreCorto: "San Juan del Río",
    prioridad: 5,
    sede: false,
    titulo:
      "Ortodoncia y endodoncia para San Juan del Río | iDent Corregidora",
    metaDescription:
      "Pacientes de San Juan del Río: nuestra clínica está en Corregidora, a una hora por la 57. Citas agrupadas y cotización por WhatsApp antes de viajar.",
    h1: "Ortodoncia y endodoncia para pacientes de San Juan del Río",
    keyword: "ortodoncista san juan del rio",
    aclaracion:
      "No tenemos sucursal en San Juan del Río. Nuestra clínica está en El Pueblito, Corregidora, a cerca de una hora por la carretera 57.",
    entradilla:
      "San Juan del Río es el segundo mercado del estado y está a casi una hora de nuestra clínica por la 57. Con esa distancia, un tratamiento solo tiene sentido si las citas se reducen al mínimo y cada visita resuelve varias cosas. Así es como planteamos los casos de esta zona.",
    traslado: {
      tiempo: "Aprox. 55 a 65 minutos",
      distancia: "Por la carretera federal 57",
      ruta: "México–Querétaro 57 en dirección norte",
    },
    comoLlegar: [
      "Carretera federal 57 en dirección a Querétaro.",
      "Continuar hacia Paseo Constituyentes o el Anillo Vial III, según el tráfico del día.",
      "Entrada a Corregidora por Paseo Constituyentes poniente.",
      "Conviene evitar el regreso entre 18:00 y 20:00, cuando la 57 se carga.",
    ],
    estacionamiento: "Estacionamiento de Plaza El Jacal, sin costo.", // TODO: confirmar
    contexto: [
      {
        h2: "Cuándo tiene sentido venir desde San Juan del Río",
        parrafos: [
          "Para una limpieza o una resina, no: eso se resuelve en tu ciudad. El traslado se justifica en dos escenarios. El primero, una endodoncia o un retratamiento complejo, donde lo que buscas es que lo haga alguien dedicado a eso y se resuelva en una sola sesión. El segundo, una ortodoncia con alineadores invisibles, donde las revisiones son cada seis a ocho semanas.",
          "Si tu caso no encaja en ninguno de los dos, te lo vamos a decir. Preferimos perder la consulta a que hagas dos horas de carretera para algo que no lo ameritaba.",
        ],
      },
      {
        h2: "Cómo trabajamos a distancia antes de la primera cita",
        parrafos: [
          "Nos mandas por WhatsApp fotos de la zona y, si tienes, la radiografía que te hayan tomado. Con eso te damos una estimación de qué tratamiento se necesita, cuántas sesiones y qué rango de costo, antes de que subas al coche.",
          "La valoración presencial confirma el diagnóstico con nuestra propia radiografía y cierra el costo por escrito.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Tienen sucursal en San Juan del Río?",
        a: "No. Nuestra única clínica está en Plaza El Jacal, El Pueblito, Corregidora. Atendemos a pacientes de San Juan del Río que se trasladan, y planteamos el tratamiento para que sean los menos viajes posibles.",
      },
      {
        q: "¿Cuánto se hace de San Juan del Río a Corregidora?",
        a: "Alrededor de una hora por la 57 en tráfico normal. El tramo se complica los viernes por la tarde y los domingos por la noche.",
      },
      {
        q: "¿Cuántas veces tendría que viajar por una ortodoncia?",
        a: "Con alineadores invisibles, cada seis a ocho semanas, y te entregamos varios juegos de férulas por adelantado. Con brackets, los ajustes son mensuales: para esa distancia solemos recomendar primero los alineadores si el caso lo permite.",
      },
      {
        q: "¿Puedo saber el costo antes de ir?",
        a: "Sí. Mándanos fotos y la radiografía que tengas por WhatsApp y te damos un rango antes de que viajes. El costo final se cierra en la valoración presencial.",
      },
    ],
  },
];

export const zonaPorSlug = (slug: string) => ZONAS.find((z) => z.slug === slug);

/** Zonas donde está físicamente la clínica. */
export const ZONAS_SEDE = ZONAS.filter((z) => z.sede);
/** Zonas desde las que los pacientes se trasladan. */
export const ZONAS_TRASLADO = ZONAS.filter((z) => !z.sede);
