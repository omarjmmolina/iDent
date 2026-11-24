import { buildMetadata } from "@/lib/seo";
import { PaginaVertical } from "@/components/PaginaVertical";
import { verticalPorClave } from "@/content/verticales";
import { ARTICULOS } from "@/content/blog";

const v = verticalPorClave("periodoncia");

const RELACIONADOS = [
  "por-que-se-mueven-los-dientes-en-adultos",
  "como-limpiar-los-brackets",
  "absceso-dental-que-hacer",
];

export const metadata = buildMetadata({
  title: v.titulo,
  description: v.metaDescription,
  path: `/${v.slug}`,
  imagen: v.imagen,
});

export default function Page() {
  const articulos = RELACIONADOS.map((s) =>
    ARTICULOS.find((a) => a.slug === s),
  ).filter((a) => a !== undefined);
  return <PaginaVertical vertical={v} articulos={articulos} />;
}
