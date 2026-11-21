import { CLINICA, SITE_URL, direccionUnaLinea } from "@/content/clinica";
import { ZONAS } from "@/content/zonas";
import type { Faq } from "@/content/servicios";

const CLINICA_ID = `${SITE_URL}/#clinica`;

/**
 * Datos estructurados de la clínica (Frente 03 del plan).
 * Declara la zona de cobertura municipio por municipio: es lo que le dice
 * a Google que esta clínica es relevante fuera de su propia calle.
 */
export function clinicaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": CLINICA_ID,
    name: CLINICA.nombreLegal,
    alternateName: CLINICA.nombre,
    slogan: CLINICA.tagline,
    description: CLINICA.descripcionCorta,
    url: SITE_URL,
    telephone: CLINICA.telefono,
    image: `${SITE_URL}/logo-ident.jpg`,
    logo: `${SITE_URL}/logo-ident.jpg`,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CLINICA.direccion.calle}, ${CLINICA.direccion.plaza}`,
      addressLocality: CLINICA.direccion.colonia,
      addressRegion: CLINICA.direccion.estado,
      postalCode: CLINICA.direccion.cp,
      addressCountry: CLINICA.direccion.pais,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINICA.geo.lat,
      longitude: CLINICA.geo.lng,
    },
    openingHoursSpecification: CLINICA.horariosSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dias,
      opens: h.abre,
      closes: h.cierra,
    })),
    areaServed: [
      ...new Set(ZONAS.flatMap((z) => z.municipio.split(" y "))),
    ].map((m) => ({
      "@type": "City",
      name: m,
      containedInPlace: { "@type": "State", name: "Querétaro" },
    })),
    medicalSpecialty: ["Orthodontic", "Endodontic"],
    availableService: [
      { "@type": "MedicalProcedure", name: "Ortodoncia" },
      { "@type": "MedicalProcedure", name: "Brackets metálicos" },
      { "@type": "MedicalProcedure", name: "Brackets estéticos" },
      { "@type": "MedicalProcedure", name: "Alineadores invisibles" },
      { "@type": "MedicalProcedure", name: "Ortodoncia infantil" },
      { "@type": "MedicalProcedure", name: "Ortopedia maxilar" },
      { "@type": "MedicalProcedure", name: "Endodoncia" },
      { "@type": "MedicalProcedure", name: "Tratamiento de conductos" },
      { "@type": "MedicalProcedure", name: "Retratamiento de conductos" },
      { "@type": "MedicalProcedure", name: "Urgencias dentales" },
    ],
    sameAs: [CLINICA.redes.facebook, CLINICA.redes.instagram].filter(Boolean),
    ...(CLINICA.resenas.total > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: CLINICA.resenas.calificacion,
        reviewCount: CLINICA.resenas.total,
      },
    }),
  };
}

/** Marcado de preguntas frecuentes: habilita los desplegables en Google. */
export function faqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Migas de pan: Google las usa para mostrar la ruta bajo el título. */
export function breadcrumbSchema(items: { nombre: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nombre,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function servicioSchema(args: {
  nombre: string;
  descripcion: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: args.nombre,
    description: args.descripcion,
    url: `${SITE_URL}${args.path}`,
    provider: { "@id": CLINICA_ID },
  };
}

export { direccionUnaLinea };
