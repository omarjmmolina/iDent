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
    "photo-1777331903190-341a3dd0441b",
    "Odontólogo explicando un tratamiento de ortodoncia a una paciente en consulta",
  ),
  endodoncia: u(
    "endodoncia",
    "photo-1588776814546-1ffcf47267a5",
    "Odontólogo revisando radiografías dentales en un negatoscopio",
  ),
  "brackets-metalicos": u(
    "brackets-metalicos",
    "photo-1720685193942-5a1c5ac7fd80",
    "Modelo dental con brackets metálicos colocados en ambas arcadas",
  ),
  "brackets-esteticos": u(
    "brackets-esteticos",
    "photo-1656514894252-fb336a3ad6a6",
    "Primer plano de una sonrisa con brackets",
  ),
  "alineadores-invisibles": u(
    "alineadores-invisibles",
    "photo-1609840114035-3c981b782dfe",
    "Paciente colocándose un alineador dental transparente",
  ),
  "ortodoncia-infantil": u(
    "ortodoncia-infantil",
    "photo-1758205307836-0829c799890b",
    "Odontólogo revisando los dientes de un niño en consulta",
  ),
  "ortopedia-maxilar": u(
    "ortopedia-maxilar",
    "photo-1631051103633-24959376b92d",
    "Niño sonriendo sentado en el sillón dental antes de una revisión",
  ),
  "tratamiento-de-conductos": u(
    "tratamiento-de-conductos",
    "photo-1606811971618-4486d14f3f99",
    "Revisión dental con espejo e instrumental en boca",
  ),
  retratamiento: u(
    "retratamiento",
    "photo-1777793389944-f7165259a05c",
    "Modelo anatómico que muestra el interior de la raíz de un diente y sus conductos",
  ),
  "urgencia-dolor-dental": u(
    "urgencia-dolor-dental",
    "photo-1758600432436-f8abdbf44bde",
    "Persona con gesto de dolor llevándose la mano a la mandíbula",
  ),
} as const;

export type ClaveStock = keyof typeof STOCK;
