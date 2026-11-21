/**
 * Datos de la clínica (NAP) — FUENTE ÚNICA DE VERDAD.
 *
 * ✅ VERIFICADO contra la ficha de Google Business Profile el 21-nov-2026:
 * https://maps.app.goo.gl/49F15e9GqALj7oEYA
 *
 * La ficha resolvió los dos conflictos que había:
 *   · Dirección: es el 955, no el 953 que aparece en Facebook.
 *   · Teléfono: es 775 144 8793, no el 7793 de Facebook.
 * Facebook está desactualizado en los dos campos. Hay que corregirlo allá,
 * porque Google premia que el NAP coincida carácter por carácter en todos
 * lados y castiga lo contrario.
 */

export const CLINICA = {
  nombre: "iDent",
  /** Tal como aparece en la ficha de Google. */
  nombreLegal: "Clínica Dental iDent",
  tagline: "Sonreír es solo el comienzo",
  descripcionCorta:
    "Clínica dental en El Pueblito, Corregidora, especializada en ortodoncia y endodoncia, con atención para todo Querétaro.",

  // --- Contacto -------------------------------------------------------
  // ✅ Google Business Profile
  telefono: "+527751448793",
  telefonoVisible: "775 144 8793",
  /** ⚠️ POR CONFIRMAR: ¿el WhatsApp es este mismo número? */
  whatsapp: "527751448793",
  email: "", // TODO: correo del dominio. En Facebook hay uno personal.

  // --- Dirección ------------------------------------------------------
  // ✅ Google Business Profile
  direccion: {
    calle: "Av. Prolongación El Jacal 955, Local 23",
    plaza: "Plaza El Jacal",
    colonia: "El Pueblito",
    municipio: "Corregidora",
    estado: "Querétaro",
    cp: "76910",
    pais: "MX",
  },

  /** ✅ Coordenadas exactas del pin de Google. */
  geo: { lat: 20.5598265, lng: -100.4313485 },
  /** Plus code de Google. */
  plusCode: "HH59+WF El Pueblito, Querétaro",

  googleMapsUrl: "https://maps.app.goo.gl/49F15e9GqALj7oEYA",
  googleCid: "9457323074947018289",
  /**
   * ⚠️ PENDIENTE: enlace directo para dejar reseña (g.page/r/…).
   * Se saca del panel de Google Business Profile, en "Pedir reseñas".
   * Es la pieza que hace funcionar el sistema de reseñas del plan.
   */
  googleReviewUrl: "",

  // --- Horarios ✅ Google Business Profile -----------------------------
  horarios: [
    { dias: "Lunes a viernes", abre: "09:00", cierra: "21:00" },
    { dias: "Sábado", abre: "10:00", cierra: "18:00" },
    { dias: "Domingo", abre: null, cierra: null },
  ],

  horariosSchema: [
    {
      dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      abre: "09:00",
      cierra: "21:00",
    },
    { dias: ["Saturday"], abre: "10:00", cierra: "18:00" },
  ],

  /** ✅ Google Business Profile, 21-nov-2026. Meta del plan: 50. */
  resenas: { calificacion: 4.9, total: 47 },

  /**
   * Marcado aggregateRating en el schema: desactivado a propósito.
   * Google no acepta reseñas auto-servidas: un negocio no debe marcar en
   * su propio sitio una calificación sobre sí mismo. No genera estrellas y
   * sí puede acarrear una acción manual. Las estrellas que cuentan son las
   * de la ficha, y esas se ganan con reseñas reales.
   */
  marcarAggregateRating: false,

  /**
   * Especialidades que la clínica comunica en Facebook: odontología
   * general, endodoncia, ortodoncia e implantología. El sitio cubre las
   * dos del plan. ⚠️ PREGUNTAR si quieren página de implantología.
   */
  especialidadesFacebook: [
    "Odontología general",
    "Endodoncia",
    "Ortodoncia",
    "Implantología",
  ],

  /**
   * ⚠️ POR CONFIRMAR: Facebook promociona "Evaluación de sonrisa GRATIS".
   * Si sigue vigente conviene ponerlo en la portada.
   */
  valoracionGratis: false,

  /**
   * Hallazgos de la ficha que el plan convierte en trabajo inmediato:
   *   · No tiene sitio web enlazado. Es lo primero que hay que poner.
   *   · Solo 4 fotos cargadas. El frente 04 del plan pide cargarlas por
   *     servicio.
   */
  fichaGoogle: { tieneSitioWeb: false, fotos: 4 },

  redes: {
    facebook: "https://www.facebook.com/IDentClinicaDentalQro/",
    instagram: "", // TODO: ¿@identclinicadentalqro?
  },
} as const;

/** Dominio final del sitio. TODO: cambiar al dominio real antes de publicar. */
export const SITE_URL = "https://identqueretaro.com";

export const direccionUnaLinea = [
  CLINICA.direccion.calle,
  CLINICA.direccion.plaza,
  `${CLINICA.direccion.cp} ${CLINICA.direccion.colonia}`,
  `${CLINICA.direccion.municipio}, ${CLINICA.direccion.estado}`,
].join(", ");

export const waLink = (mensaje: string) =>
  `https://wa.me/${CLINICA.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const telLink = `tel:${CLINICA.telefono}`;
