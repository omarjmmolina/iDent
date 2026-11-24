import { buildMetadata } from "@/lib/seo";
import { PaginaVertical } from "@/components/PaginaVertical";
import { verticalPorClave } from "@/content/verticales";
import { ARTICULOS } from "@/content/blog";

const v = verticalPorClave("preventiva");

const RELACIONADOS = [
  "como-limpiar-los-brackets",
  "por-que-se-mueven-los-dientes-en-adultos",
  "que-no-comer-con-brackets",
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
