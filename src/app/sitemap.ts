import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/clinica";
import { PILARES, SERVICIOS } from "@/content/servicios";
import { ZONAS } from "@/content/zonas";
import { ARTICULOS } from "@/content/blog";

/**
 * Sitemap de las 25 URLs indexables.
 * El plan lo pide explícitamente: los dos competidores tienen 2 URLs y
 * 0 sitemaps entre los dos.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const hoy = new Date();

  const estaticas: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: `/${PILARES.ortodoncia.slug}`, priority: 0.9 },
    { path: `/${PILARES.endodoncia.slug}`, priority: 0.9 },
    { path: "/precios", priority: 0.8 },
    { path: "/casos", priority: 0.7 },
    { path: "/equipo", priority: 0.6 },
    { path: "/contacto", priority: 0.8 },
    { path: "/blog", priority: 0.6 },
    { path: "/aviso-de-privacidad", priority: 0.2 },
  ];

  return [
    ...estaticas.map((e) => ({
      url: `${SITE_URL}${e.path}`,
      lastModified: hoy,
      changeFrequency: "monthly" as const,
      priority: e.priority,
    })),
    ...SERVICIOS.map((s) => ({
      url: `${SITE_URL}/${PILARES[s.pilar].slug}/${s.slug}`,
      lastModified: hoy,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...ZONAS.map((z) => ({
      url: `${SITE_URL}/zonas/${z.slug}`,
      lastModified: hoy,
      changeFrequency: "monthly" as const,
      priority: z.prioridad === 1 ? 0.9 : 0.7,
    })),
    ...ARTICULOS.map((a) => ({
      url: `${SITE_URL}/blog/${a.slug}`,
      lastModified: new Date(a.actualizado ?? a.fecha),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
