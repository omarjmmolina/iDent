import type { Bloque } from "../tipos";
import { AMP_PRECIOS } from "./precios";
import { AMP_COMPARATIVAS } from "./comparativas";
import { AMP_DOLOR, AMP_TIEMPOS } from "./dolor-tiempos";
import {
  AMP_CUIDADOS,
  AMP_INFANTIL,
  AMP_SENALES,
} from "./cuidados-ninos-senales";

/**
 * Apartados que se añaden a cada artículo.
 *
 * Están aparte del texto original para que ampliar un artículo no obligue
 * a reescribir el archivo entero. Se insertan antes del último bloque de
 * tipo "nota", que es el cierre de cada pieza, para que la nota siga
 * cerrando.
 */
export const AMPLIACIONES: Record<string, Bloque[]> = {
  ...AMP_PRECIOS,
  ...AMP_COMPARATIVAS,
  ...AMP_DOLOR,
  ...AMP_TIEMPOS,
  ...AMP_CUIDADOS,
  ...AMP_INFANTIL,
  ...AMP_SENALES,
};
