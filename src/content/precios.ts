/**
 * Precios — FUENTE ÚNICA DE VERDAD.
 *
 * ⚠️ PENDIENTE DEL CLIENTE: ninguno de estos importes está confirmado.
 * Mientras `desde` sea null, el sitio muestra "Consultar" y el botón de
 * WhatsApp en vez de un precio inventado. En cuanto Omar y Karely pasen
 * la lista real, se llenan aquí y se reflejan en las 25 páginas.
 *
 * Contexto de mercado (del plan de trabajo, nov 2026):
 *   · Dr. Alonso Lozano publica valoración desde $800.
 *   · Los competidores facturan procedimientos de $15,000 a $20,000.
 */

export type Precio = {
  /** Importe mínimo en MXN. null = aún sin confirmar. */
  desde: number | null;
  /** Nota corta que acompaña al precio (p. ej. "por arcada"). */
  nota?: string;
  /** ¿Aplica meses sin intereses? */
  msi?: boolean;
};

export const PRECIOS: Record<string, Precio> = {
  valoracion: { desde: null, nota: "Incluye radiografía y plan de tratamiento" }, // TODO
  "brackets-metalicos": { desde: null, nota: "Tratamiento completo", msi: true }, // TODO
  "brackets-esteticos": { desde: null, nota: "Tratamiento completo", msi: true }, // TODO
  "alineadores-invisibles": { desde: null, nota: "Según número de alineadores", msi: true }, // TODO
  "ortodoncia-infantil": { desde: null, nota: "Primera fase", msi: true }, // TODO
  "ortopedia-maxilar": { desde: null, nota: "Aparatología incluida", msi: true }, // TODO
  "tratamiento-de-conductos": { desde: null, nota: "Por pieza dental" }, // TODO
  retratamiento: { desde: null, nota: "Por pieza dental" }, // TODO
  "urgencia-dolor-dental": { desde: null, nota: "Consulta de urgencia" }, // TODO
};

export const MSI_MESES = 12; // TODO: confirmar a cuántos meses sin intereses se ofrece

export const formatoMXN = (n: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);

export const precioTexto = (clave: string) => {
  const p = PRECIOS[clave];
  if (!p || p.desde === null) return "Consultar";
  return `Desde ${formatoMXN(p.desde)}`;
};
