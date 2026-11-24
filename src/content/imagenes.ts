/**
 * Imágenes de stock de Unsplash.
 *
 * SON PROVISIONALES. Están para que el sitio no se vea con huecos mientras
 * llegan las fotos reales de la clínica. En cuanto las tengamos, se
 * sustituye la ruta y listo.
 *
 * Licencia: Unsplash License (https://unsplash.com/license). Permite uso
 * comercial sin pedir permiso y sin atribución obligatoria. Aun así
 * guardamos el identificador de cada foto para poder rastrear el origen.
 *
 * 🚫 DÓNDE NO SE USA STOCK, Y NO ES NEGOCIABLE:
 *   · Retratos del equipo. Poner un modelo de banco de imágenes bajo el
 *     nombre de un doctor es engañar al paciente.
 *   · Casos de antes y después. Serían resultados de otra persona
 *     presentados como propios.
 *   · Fachada de la clínica.
 * Esos tres siguen con el marcador de foto pendiente a propósito.
 */

export type ImagenStock = {
  src: string;
  unsplashId: string;
  alt: string;
};

const u = (archivo: string, unsplashId: string, alt: string): ImagenStock => ({
  src: `/img/stock/${archivo}.webp`,
  unsplashId,
  alt,
});

export const STOCK = {
  hero: u(
    "hero-clinica",
    "photo-1629909613654-28e377c37b09",
    "Consultorio dental moderno con sillón y equipamiento",
  ),
  consultorio: u(
    "consultorio",
    "photo-1598256989800-fe5f95da9787",
    "Interior de un consultorio dental con sillón y equipo clínico",
  ),
  ortodoncia: u(
    "ortodoncia",
    "photo-1684607632829-1e5bf4f21dab",
    "Modelo dental con brackets colocados en ambas arcadas",
  ),
  endodoncia: u(
    "endodoncia",
    "photo-1777793389944-f7165259a05c",
    "Modelo anatómico que muestra el interior de un diente y sus conductos",
  ),
  "brackets-metalicos": u(
    "brackets-metalicos",
    "photo-1720685193942-5a1c5ac7fd80",
    "Modelo dental con brackets metálicos colocados en ambas arcadas",
  ),
  "brackets-esteticos": u(
    "brackets-esteticos",
    "photo-1720685193964-4529228a33c1",
    "Primer plano de brackets colocados en un modelo dental",
  ),
  "alineadores-invisibles": u(
    "alineadores-invisibles",
    "photo-1695275857301-19e5a9995108",
    "Alineador invisible transparente sostenido con guante clínico",
  ),
  "ortodoncia-infantil": u(
    "ortodoncia-infantil",
    "photo-1636307739505-413f99c224e0",
    "Modelos dentales infantiles con brackets",
  ),
  "ortopedia-maxilar": u(
    "ortopedia-maxilar",
    "photo-1720685193942-5a1c5ac7fd80",
    "Modelo dental con aparatología de ortodoncia",
  ),
  "tratamiento-de-conductos": u(
    "tratamiento-de-conductos",
    "photo-1643292116094-bd2fb3ed4d64",
    "Limas de endodoncia, el instrumental con el que se limpian los conductos",
  ),
  retratamiento: u(
    "retratamiento",
    "photo-1777793389944-f7165259a05c",
    "Modelo anatómico que muestra el interior de la raíz de un diente y sus conductos",
  ),
  "urgencia-dolor-dental": u(
    "urgencia-dolor-dental",
    "photo-1584308666744-24d5c474f2ae",
    "Blísteres de analgésicos, lo que alivia mientras llegas a la clínica",
  ),
} as const;

export type ClaveStock = keyof typeof STOCK;
