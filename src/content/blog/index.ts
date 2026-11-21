import type { Articulo, CategoriaId } from "./tipos";
import { PRECIOS_ARTICULOS } from "./precios";
import { COMPARATIVAS_ARTICULOS } from "./comparativas";
import { DOLOR_ARTICULOS } from "./dolor";
import { TIEMPOS_ARTICULOS } from "./tiempos";
import { CUIDADOS_ARTICULOS } from "./cuidados";
import { INFANTIL_ARTICULOS } from "./infantil";
import { SENALES_ARTICULOS } from "./senales";

export * from "./tipos";

/** Los 40 artículos, ordenados del más reciente al más antiguo. */
export const ARTICULOS: Articulo[] = [
  ...PRECIOS_ARTICULOS,
  ...COMPARATIVAS_ARTICULOS,
  ...DOLOR_ARTICULOS,
  ...TIEMPOS_ARTICULOS,
  ...CUIDADOS_ARTICULOS,
  ...INFANTIL_ARTICULOS,
  ...SENALES_ARTICULOS,
].sort((a, b) => b.fecha.localeCompare(a.fecha));

export const articuloPorSlug = (slug: string) =>
  ARTICULOS.find((a) => a.slug === slug);

export const articulosDeCategoria = (categoria: CategoriaId) =>
  ARTICULOS.filter((a) => a.categoria === categoria);

export const articulosDeServicio = (servicio: string) =>
  ARTICULOS.filter((a) => a.servicio === servicio);

/**
 * Artículos relacionados: primero los de la misma categoría, y si no
 * alcanzan, se completa con los del mismo servicio.
 */
export const relacionados = (articulo: Articulo, cuantos = 3) => {
  const mismaCategoria = ARTICULOS.filter(
    (a) => a.slug !== articulo.slug && a.categoria === articulo.categoria,
  );
  const mismoServicio = ARTICULOS.filter(
    (a) =>
      a.slug !== articulo.slug &&
      a.categoria !== articulo.categoria &&
      articulo.servicio &&
      a.servicio === articulo.servicio,
  );
  return [...mismaCategoria, ...mismoServicio].slice(0, cuantos);
};
