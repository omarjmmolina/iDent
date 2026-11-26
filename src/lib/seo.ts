import type { Metadata } from "next";
import { SITE_URL, CLINICA, DOMINIO_DEFINITIVO } from "@/content/clinica";

type Args = {
  title: string;
  description: string;
  /** Ruta absoluta del sitio, empezando con "/" */
  path: string;
  /** Si la página no debe indexarse (p. ej. gracias, 404) */
  noIndex?: boolean;
  /** Ruta de la imagen para Open Graph, empezando con "/" */
  imagen?: string;
};

/**
 * Construye el <head> de cada página: título, meta description, canónica y
 * Open Graph. La canónica es obligatoria en las 25 páginas para que el
 * sitio no compita contra sí mismo.
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex,
  imagen,
}: Args): Metadata {
  const url = `${SITE_URL}${path}`;
  /**
   * Imagen de Open Graph: la tarjeta que se ve al pegar el enlace en
   * WhatsApp, Facebook o Slack. Sin esto sale un recuadro vacío, y la
   * clínica comparte su sitio sobre todo por WhatsApp. Cada página puede
   * pasar la suya; si no, va la genérica de la marca.
   */
  const imagenes = [
    {
      url: imagen ?? "/og.png",
      width: 1200,
      height: 630,
      alt: `${CLINICA.nombreLegal} · ${CLINICA.tagline}`,
    },
  ];
  return {
    title,
    description,
    alternates: { canonical: url },
    // Explícito en cada página: si se deja en undefined, Next lo toma
    // como "sin valor" y pisa lo que define el layout.
    robots:
      noIndex || !DOMINIO_DEFINITIVO
        ? { index: false, follow: false }
        : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "es_MX",
      url,
      siteName: `${CLINICA.nombre} · ${CLINICA.tagline}`,
      title,
      description,
      images: imagenes,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imagenes,
    },
  };
}
