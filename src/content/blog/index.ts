import type { Articulo, Bloque, CategoriaId } from "./tipos";
import { PRECIOS_ARTICULOS } from "./precios";
import { COMPARATIVAS_ARTICULOS } from "./comparativas";
import { DOLOR_ARTICULOS } from "./dolor";
import { TIEMPOS_ARTICULOS } from "./tiempos";
import { CUIDADOS_ARTICULOS } from "./cuidados";
import { INFANTIL_ARTICULOS } from "./infantil";
import { SENALES_ARTICULOS } from "./senales";
import { AMPLIACIONES } from "./amp";

export * from "./tipos";

/** Cuenta palabras de un bloque, para estimar el tiempo de lectura. */
function palabrasDe(b: Bloque): number {
  const contar = (t: string) => t.trim().split(/\s+/).length;
  switch (b.tipo) {
    case "lista":
    case "pasos":
      return b.items.reduce((n, i) => n + contar(i), 0);
    case "tabla":
      return (
        b.encabezados.reduce((n, h) => n + contar(h), 0) +
        b.filas.reduce(
          (n, f) => n + f.reduce((m, c) => m + contar(c), 0),
          0,
        )
      );
    default:
      return contar(b.texto);
  }
}

/**
 * Inserta los apartados añadidos antes del último bloque "nota", que es
 * el cierre del artículo. Si no hay nota, van al final.
 */
function conAmpliacion(a: Articulo): Articulo {
  const extra = AMPLIACIONES[a.slug];
  const cuerpo = (() => {
    if (!extra?.length) return a.cuerpo;
    const desdeElFinal = [...a.cuerpo].reverse().findIndex((b) => b.tipo === "nota");
    const corte =
      desdeElFinal === -1 ? a.cuerpo.length : a.cuerpo.length - 1 - desdeElFinal;
    return [...a.cuerpo.slice(0, corte), ...extra, ...a.cuerpo.slice(corte)];
  })();

  // El tiempo de lectura se recalcula para que no quede desfasado al
  // ampliar el texto: 200 palabras por minuto, incluyendo las FAQ.
  const palabras =
    cuerpo.reduce((n, b) => n + palabrasDe(b), 0) +
    (a.faqs ?? []).reduce(
      (n, f) => n + f.q.split(/\s+/).length + f.a.split(/\s+/).length,
      0,
    );
  const minutos = Math.max(3, Math.round(palabras / 200));

  return { ...a, cuerpo, lectura: `${minutos} min` };
}

/** Los 40 artículos, ordenados del más reciente al más antiguo. */
export const ARTICULOS: Articulo[] = [
  ...PRECIOS_ARTICULOS,
  ...COMPARATIVAS_ARTICULOS,
  ...DOLOR_ARTICULOS,
  ...TIEMPOS_ARTICULOS,
  ...CUIDADOS_ARTICULOS,
  ...INFANTIL_ARTICULOS,
  ...SENALES_ARTICULOS,
]
  .map(conAmpliacion)
  .sort((a, b) => b.fecha.localeCompare(a.fecha));

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
