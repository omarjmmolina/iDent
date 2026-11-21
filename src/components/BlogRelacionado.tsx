import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import { Carrusel } from "@/components/Carrusel";
import { CATEGORIAS, type Articulo } from "@/content/blog";
import { imagenDe } from "@/content/blog/imagenes";

/**
 * Carrusel de artículos del blog relacionados con la página actual.
 * Los artículos son enlaces normales en el HTML: el carrusel solo cambia
 * cómo se recorren, no si existen.
 */
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
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>Del blog</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-navy-800 sm:text-3xl">
              {titulo}
            </h2>
          </div>
          <Link
            href="/blog"
            className="grupo-flecha text-sm font-semibold text-teal-700"
          >
            <span className="subraya">Ver todos los artículos</span>{" "}
            <span className="flecha inline-block">→</span>
          </Link>
        </div>

        <Carrusel etiqueta="Artículos del blog" className="mt-8">
          {articulos.map((a) => (
            <li key={a.slug} className="w-[18rem] sm:w-[21rem]">
              <article className="tarjeta-hover flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white hover:border-teal-300">
                <Link
                  href={`/blog/${a.slug}`}
                  className="zoom-foto relative block aspect-[16/9] overflow-hidden bg-navy-100"
                >
                  <Image
                    src={imagenDe(a.slug).src}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="21rem"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-teal-600 uppercase">
                  {CATEGORIAS[a.categoria].nombre}
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug font-semibold text-navy-800">
                  <Link
                    href={`/blog/${a.slug}`}
                    className="grupo-flecha transition hover:text-teal-700"
                  >
                    {a.titulo}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">
                  {a.resumen}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs text-navy-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                    className="size-3.5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" d="M12 7v5l3 2" />
                  </svg>
                  {a.lectura}
                </p>
                </div>
              </article>
            </li>
          ))}
        </Carrusel>
      </Container>
    </section>
  );
}
