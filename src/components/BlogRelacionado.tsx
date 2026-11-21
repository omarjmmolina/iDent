import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import { CATEGORIAS, type Articulo } from "@/content/blog";

/** Bloque de artículos del blog relacionados con la página actual. */
export function BlogRelacionado({
  articulos,
  titulo = "Para resolver dudas antes de decidir",
  fondo = "blanco",
}: {
  articulos: Articulo[];
  titulo?: string;
  fondo?: "blanco" | "sand";
}) {
  if (articulos.length === 0) return null;

  return (
    <section
      className={`border-t border-navy-100 py-14 sm:py-16 ${fondo === "sand" ? "bg-sand-50" : ""}`}
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>Del blog</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-navy-800 sm:text-3xl">
              {titulo}
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-teal-700 underline underline-offset-4"
          >
            Ver todos los artículos →
          </Link>
        </div>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articulos.map((a) => (
            <li key={a.slug}>
              <article className="flex h-full flex-col rounded-3xl border border-navy-100 p-6 transition hover:border-teal-300">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-teal-600 uppercase">
                  {CATEGORIAS[a.categoria].nombre}
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug font-semibold text-navy-800">
                  <Link href={`/blog/${a.slug}`} className="transition hover:text-teal-700">
                    {a.titulo}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">
                  {a.resumen}
                </p>
                <p className="mt-4 text-xs text-navy-400">{a.lectura}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
