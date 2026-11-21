import { CLINICA } from "./clinica";

/**
 * Reseñas de la ficha de Google Business Profile.
 *
 * ✅ Tomadas de https://maps.app.goo.gl/49F15e9GqALj7oEYA el 21-nov-2026.
 *
 * Regla de la casa: solo se publican reseñas reales, con el nombre tal
 * como aparece en Google y con enlace a la ficha para que cualquiera
 * pueda comprobarlas. No se inventan ni se editan los textos; si hay que
 * recortar, se marca el recorte.
 */

export type FuenteResena = {
  id: string;
  nombre: string;
  url: string;
  calificacion: number | null;
  total: number | null;
  consultado: string;
  nota?: string;
  /** La fuente que manda. Las demás son secundarias. */
  principal?: boolean;
};

export const FUENTES_RESENAS: FuenteResena[] = [
  {
    id: "google",
    nombre: "Google Maps",
    url: CLINICA.googleMapsUrl,
    calificacion: 4.9,
    total: 47,
    consultado: "2026-11-21",
    principal: true,
  },
  {
    id: "buscodentista",
    nombre: "Busco Dentista",
    url: "https://buscodentista.com.mx/queretaro/corregidora/clínica-dental-ident/",
    calificacion: 4.9,
    total: 27,
    consultado: "2026-11-21",
    nota: "Directorio que copió la ficha hace tiempo: va retrasado en el número de reseñas.",
  },
  {
    id: "facebook",
    nombre: "Facebook",
    url: CLINICA.redes.facebook,
    calificacion: null,
    total: 1,
    consultado: "2026-11-21",
    nota: "1 opinión en la página, además de 408 seguidores.",
  },
];

export const FUENTE_PRINCIPAL = FUENTES_RESENAS[0];

export type Resena = {
  autor: string;
  /** Lo que Google muestra bajo el nombre, p. ej. "Local Guide · 9 opiniones" */
  credencial?: string;
  estrellas: number;
  texto: string;
  fecha: string;
  /** true cuando el texto viene recortado por Google en la vista pública. */
  recortada?: boolean;
};

/** Reseñas con autor, tal como aparecen en la ficha. */
export const RESENAS: Resena[] = [
  {
    autor: "Gonzalo Hernández",
    credencial: "2 opiniones",
    estrellas: 5,
    fecha: "Hace una semana",
    texto:
      "Excelente servicio y atención. Desde el primer momento fueron muy amables, profesionales y atentos. Quedé muy satisfecho con la experiencia. Totalmente recomendable.",
  },
  {
    autor: "Torrez Daniel",
    credencial: "10 opiniones · 3 fotos",
    estrellas: 5,
    fecha: "Hace 10 meses",
    texto:
      "Excelente atención de principio a fin. Me realizaron la extracción de una muela con endodoncia y todo el procedimiento fue muy profesional, sin dolor y con explicaciones claras en cada paso. También me colocaron brackets y la experiencia ha…",
    recortada: true,
  },
  {
    autor: "Ricardo Malagón",
    credencial: "Local Guide · 9 opiniones",
    estrellas: 5,
    fecha: "Hace 2 meses",
    texto:
      "Excelente servicio, atención, calidad e higiene impecable. Totalmente recomendados.",
  },
];

/**
 * Frases que Google destaca en el resumen de opiniones de la ficha. No
 * llevan autor porque Google no lo muestra en ese resumen, y así se
 * identifican en el sitio: como destacados de Google, no como testimonios
 * atribuidos.
 */
export const DESTACADOS_GOOGLE: string[] = [
  "Mis dientes quedaron bien hermosos, ¡muchas gracias!",
  "Excelente servicio, muy profesional y atenta.",
  "Muy buena atención y excelente trato.",
];

/** Meta del plan: 50 reseñas bastan para disputar el mapa local. */
export const META_RESENAS = 50;

/** Referencia de la competencia (plan de trabajo, nov 2026). */
export const COMPETENCIA_RESENAS = [
  { nombre: "Dr. Alonso Lozano", zona: "Juriquilla", total: 13, calificacion: 5.0 },
  { nombre: "Dento Studio", zona: "Plaza Sky Center", total: 36, calificacion: 4.9 },
];
