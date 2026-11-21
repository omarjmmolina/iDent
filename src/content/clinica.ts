/**
 * Datos de la clínica (NAP) — FUENTE ÚNICA DE VERDAD.
 *
 * ⚠️ POR CONFIRMAR CON LA CLÍNICA. Los datos marcados con «⚠️ directorio»
 * se tomaron de directorios públicos (buscodentista.com.mx y cybo.com,
 * consultados el 21-nov-2026) y coinciden entre sí, pero NO están
 * verificados por Omar ni por Karely. Antes de publicar hay que
 * confirmarlos uno por uno.
 *
 * El NAP (nombre, dirección, teléfono) tiene que ser IDÉNTICO aquí, en la
 * ficha de Google Business Profile y en cualquier directorio. Si no
 * coincide carácter por carácter, el posicionamiento local se castiga.
 */

export const CLINICA = {
  nombre: "iDent",
  // ⚠️ directorio: aparece como "Clínica Dental, Ident"
  nombreLegal: "iDent Clínica Dental",
  tagline: "Sonreír es solo el comienzo",
  descripcionCorta:
    "Clínica dental en El Pueblito, Corregidora, especializada en ortodoncia y endodoncia, con atención para todo Querétaro.",

  // --- Contacto -------------------------------------------------------
  // 🚨 CONFLICTO DE NAP — RESOLVER ANTES DE PUBLICAR.
  // Hay TRES números distintos circulando:
  //   · 775 144 7793 — Facebook oficial (sección "Información de contacto")
  //   · 775 144 8793 — buscodentista.com.mx y cybo.com
  //   · 442 143 7966 — imagen de portada de Facebook
  // Un anuncio antiguo muestra además un 44 21 85 67 81 incompleto.
  // Google premia que el teléfono sea idéntico en todos lados y castiga lo
  // contrario. Hay que elegir UNO, ponerlo aquí y corregir el resto.
  // Mientras tanto se usa el de Facebook, que es la fuente propia.
  telefono: "+527751447793",
  telefonoVisible: "775 144 7793",
  // ⚠️ POR CONFIRMAR: Facebook tiene botón de WhatsApp. ¿A qué número va?
  whatsapp: "527751447793",
  // ⚠️ omarmmolina@outlook.com aparece en Facebook. No conviene publicar un
  // correo personal en el sitio: pedir uno del dominio (contacto@...).
  email: "",

  // --- Dirección ------------------------------------------------------
  // 🚨 CONFLICTO: Facebook dice 953, los directorios dicen 955.
  // Se usa el 953 por ser la fuente propia de la clínica. CONFIRMAR.
  direccion: {
    calle: "Av. Prolongación El Jacal 953, Local 23",
    plaza: "Plaza El Jacal",
    colonia: "El Pueblito",
    municipio: "Corregidora",
    estado: "Querétaro",
    cp: "76910",
    pais: "MX",
  },

  // TODO: coordenadas exactas del pin de Google Maps (estas son aproximadas
  // al centro de El Pueblito y hay que sustituirlas por las reales).
  geo: { lat: 20.5446, lng: -100.4432 },

  googleMapsUrl: "", // TODO: URL corta del perfil de Google Business Profile
  googleReviewUrl: "", // TODO: enlace directo para dejar reseña (g.page/r/...)

  // Reseñas según directorios (nov 2026). Meta del plan: 50.
  // ⚠️ CONFIRMAR con la ficha real de Google Business Profile.
  resenas: { calificacion: 4.9, total: 27 },

  /**
   * Especialidades que la clínica comunica en Facebook:
   * odontología general · endodoncia · ortodoncia · implantología.
   * El sitio se concentra en ortodoncia y endodoncia por decisión del plan
   * de trabajo. ⚠️ PREGUNTAR si quieren página para implantología.
   */
  especialidadesFacebook: [
    "Odontología general",
    "Endodoncia",
    "Ortodoncia",
    "Implantología",
  ],

  /**
   * ⚠️ POR CONFIRMAR: Facebook promociona "Evaluación de sonrisa GRATIS".
   * Si sigue vigente es el mejor gancho del sitio y hay que ponerlo en la
   * portada. Si ya no, hay que bajar ese post.
   */
  valoracionGratis: false,

  // --- Horarios -------------------------------------------------------
  // ⚠️ POR CONFIRMAR: los dos directorios no coinciden en viernes y sábado.
  // buscodentista: L-V 9-21, Sáb 10-18 · cybo: Vie 10-21, Sáb 10-16.
  // Aquí se usa la versión de buscodentista.
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

  redes: {
    facebook: "https://www.facebook.com/IDentClinicaDentalQro/",
    instagram: "", // TODO: ¿@identclinicadentalqro?
    // Facebook: 408 seguidores, 1 opinión (nov 2026)
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
