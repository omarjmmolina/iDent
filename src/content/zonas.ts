/**
 * Páginas de zona (SEO local / GEO).
 *
 * ⚠️ CRITERIO (24-nov-2026): solo se publican zonas a **25 minutos o
 * menos** de la clínica. Las que estaban más lejos se retiraron a
 * petición del cliente: Juriquilla (40 min), Zibatá (35-45), El Marqués
 * y Huimilpan (25-40) y San Juan del Río (55-65).
 *
 * El razonamiento: una ortodoncia son entre dieciocho y veinticuatro
 * visitas. A cuarenta minutos por trayecto, el tratamiento se abandona a
 * la mitad más veces de las que se termina, así que atraer ese tráfico
 * no construye pacientes, construye citas perdidas.
 *
 * ⚠️ REGLA QUE NO SE ROMPE: iDent tiene UNA sola clínica, en Plaza El
 * Jacal, El Pueblito, Corregidora. Si alguna vez se vuelve a abrir una
 * zona de traslado, lleva slug "dentista-para-…", nunca "en", y su aviso
 * de que no hay sucursal allí. Los bloques retirados están en el
 * historial de git.
 *
 * Regla del plan: "se abre una página de zona solo cuando hay contenido
 * real que ponerle". Cada una lleva su ruta y su contexto propio, nunca
 * una plantilla con el municipio cambiado.
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
];

export const zonaPorSlug = (slug: string) => ZONAS.find((z) => z.slug === slug);

/** Zonas donde está físicamente la clínica. */
export const ZONAS_SEDE = ZONAS.filter((z) => z.sede);
/** Zonas desde las que los pacientes se trasladan. */
export const ZONAS_TRASLADO = ZONAS.filter((z) => !z.sede);
