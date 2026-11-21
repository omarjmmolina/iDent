import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { PaginaServicio } from "@/components/PaginaServicio";
import { PILARES, serviciosDe, servicioPorSlug } from "@/content/servicios";

const PILAR = "endodoncia" as const;

export function generateStaticParams() {
  return serviciosDe(PILAR).map((s) => ({ servicio: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servicio: string }>;
}) {
  const { servicio } = await params;
  const s = servicioPorSlug(servicio);
  if (!s) return {};
  return buildMetadata({
    title: s.titulo,
    description: s.metaDescription,
    path: `/${PILARES[PILAR].slug}/${s.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ servicio: string }>;
}) {
  const { servicio } = await params;
  const s = servicioPorSlug(servicio);
  if (!s || s.pilar !== PILAR) notFound();
  return <PaginaServicio servicio={s} />;
}
