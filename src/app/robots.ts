import type { MetadataRoute } from "next";
import { SITE_URL, DOMINIO_DEFINITIVO } from "@/content/clinica";

export default function robots(): MetadataRoute.Robots {
  // Sin dominio definitivo el sitio vive en la URL de Vercel y se queda
  // fuera del índice: indexar una dirección temporal reparte señales y
  // obliga a redirigir todo después.
  if (!DOMINIO_DEFINITIVO) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
