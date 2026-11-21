/**
 * Reseñas y sus fuentes.
 *
 * Regla de la casa: cualquier cifra de reseñas que se muestre en el sitio
 * lleva enlace a dónde se consultó y la fecha. Si no se puede citar, no se
 * publica. Es lo correcto y además protege a la clínica si alguien
 * cuestiona el dato.
 *
 * ⚠️ NINGUNA de estas cifras viene de la ficha de Google Business Profile,
 * que es la fuente que de verdad importa. Son directorios que la copiaron
 * en algún momento. En cuanto tengamos acceso a la ficha hay que sustituir
 * esto por el dato real.
 */

export type FuenteResena = {
  id: string;
  nombre: string;
  url: string;
  calificacion: number | null;
  total: number | null;
  consultado: string;
  /** Advertencia que se muestra junto a la fuente, si aplica. */
  nota?: string;
  /** false cuando no pudimos abrir la página y solo vimos el extracto. */
  verificadaEnFuente: boolean;
};

export const FUENTES_RESENAS: FuenteResena[] = [
  {
    id: "buscodentista",
    nombre: "Busco Dentista",
    url: "https://buscodentista.com.mx/queretaro/corregidora/clínica-dental-ident/",
    calificacion: 4.9,
    total: 27,
    consultado: "2026-11-21",
    verificadaEnFuente: true,
  },
  {
    id: "cybo",
    nombre: "Cybo",
    url: "https://es.cybo.com/MX-biz/clínica-dental-ident_2c",
    calificacion: null,
    total: null,
    consultado: "2026-11-21",
    nota: "La ficha existe pero la página no se pudo abrir para verificar las cifras.",
    verificadaEnFuente: false,
  },
  {
    id: "facebook",
    nombre: "Facebook",
    url: "https://www.facebook.com/IDentClinicaDentalQro/",
    calificacion: null,
    total: 1,
    consultado: "2026-11-21",
    nota: "1 opinión en la página, además de 408 seguidores.",
    verificadaEnFuente: true,
  },
  {
    id: "google",
    nombre: "Google Maps",
    url: "", // TODO: URL del perfil de Google Business Profile
    calificacion: null,
    total: null,
    consultado: "",
    nota: "Pendiente de acceso a la ficha. Es la fuente que cuenta.",
    verificadaEnFuente: false,
  },
];

/** La fuente que se usa para la cifra destacada del sitio. */
export const FUENTE_PRINCIPAL = FUENTES_RESENAS[0];

export type Testimonio = {
  autor: string;
  estrellas: number;
  texto: string;
  fuente: string;
  fuenteUrl: string;
  /** Dónde lo vimos, para poder rastrearlo. */
  origen: string;
};

/**
 * ⚠️ Solo un testimonio está documentado hasta ahora, y lo vimos en una
 * publicación de Facebook de la clínica que reproducía una reseña de
 * Google. Antes de publicarlo conviene localizarlo en la ficha real.
 *
 * No se inventan testimonios. Cuando tengamos la ficha de Google se
 * cargan los reales aquí.
 */
export const TESTIMONIOS: Testimonio[] = [
  {
    autor: "Fernando Hernández",
    estrellas: 5,
    texto:
      "Excelente servicio y buena atención a paciente, fueron muy amables y me ayudaron con las dudas que tenía respecto a mis tratamientos.",
    fuente: "Reseña en Google",
    fuenteUrl: "https://www.facebook.com/IDentClinicaDentalQro/",
    origen:
      "Publicación de la clínica en Facebook del 12 de agosto que reproduce la reseña",
  },
];

/** Meta del plan de trabajo: 50 reseñas bastan para disputar el mapa. */
export const META_RESENAS = 50;

/** Referencia de la competencia (plan de trabajo, nov 2026). */
export const COMPETENCIA_RESENAS = [
  { nombre: "Dr. Alonso Lozano", zona: "Juriquilla", total: 13, calificacion: 5.0 },
  { nombre: "Dento Studio", zona: "Plaza Sky Center", total: 36, calificacion: 4.9 },
];
