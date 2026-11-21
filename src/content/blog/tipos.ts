export type Bloque =
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "lista"; items: string[] }
  | { tipo: "pasos"; items: string[] }
  | { tipo: "tabla"; encabezados: string[]; filas: string[][] }
  | { tipo: "nota"; texto: string }
  | { tipo: "alerta"; texto: string };

export type CategoriaId =
  | "precios"
  | "comparativas"
  | "dolor"
  | "tiempos"
  | "cuidados"
  | "infantil"
  | "senales";

export type Articulo = {
  slug: string;
  categoria: CategoriaId;
  titulo: string;
  tituloSeo: string;
  metaDescription: string;
  keyword: string;
  resumen: string;
  fecha: string;
  actualizado?: string;
  lectura: string;
  cuerpo: Bloque[];
  faqs?: { q: string; a: string }[];
  /** Slug del servicio con el que se enlaza (de src/content/servicios.ts). */
  servicio?: string;
};

export const CATEGORIAS: Record<
  CategoriaId,
  { nombre: string; slug: string; descripcion: string }
> = {
  precios: {
    nombre: "Precios",
    slug: "precios",
    descripcion:
      "Qué mueve el costo de cada tratamiento y cómo comparar presupuestos sin que te sorprendan después.",
  },
  comparativas: {
    nombre: "Comparativas",
    slug: "comparativas",
    descripcion:
      "Dos opciones enfrentadas, con las ventajas y los inconvenientes reales de cada una.",
  },
  dolor: {
    nombre: "Dolor y miedo",
    slug: "dolor-y-miedo",
    descripcion:
      "Qué duele de verdad, cuánto dura y qué hacer mientras llegas a la clínica.",
  },
  tiempos: {
    nombre: "Tiempos",
    slug: "tiempos",
    descripcion:
      "Cuánto tarda cada tratamiento y de qué depende que se alargue.",
  },
  cuidados: {
    nombre: "Cuidados",
    slug: "cuidados",
    descripcion:
      "Cómo cuidar tu tratamiento para que el resultado dure y no haya que rehacerlo.",
  },
  infantil: {
    nombre: "Niños",
    slug: "ninos",
    descripcion:
      "Ortodoncia infantil, hábitos y lo que conviene revisar a tiempo.",
  },
  senales: {
    nombre: "Señales de alerta",
    slug: "senales-de-alerta",
    descripcion:
      "Síntomas que no conviene dejar pasar y qué significan.",
  },
};
