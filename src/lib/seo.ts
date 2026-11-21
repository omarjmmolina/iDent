import type { Metadata } from "next";
import { SITE_URL, CLINICA } from "@/content/clinica";

type Args = {
  title: string;
  description: string;
  /** Ruta absoluta del sitio, empezando con "/" */
  path: string;
  /** Si la página no debe indexarse (p. ej. gracias, 404) */
  noIndex?: boolean;
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
}: Args): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      locale: "es_MX",
      url,
      siteName: `${CLINICA.nombre} · ${CLINICA.tagline}`,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
