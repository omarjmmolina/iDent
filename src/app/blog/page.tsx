import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Resenas } from "@/components/Resenas";
import { Container, Eyebrow, CtaFinal, Migas } from "@/components/ui";
import {
  ARTICULOS,
  CATEGORIAS,
  articulosDeCategoria,
  type CategoriaId,
} from "@/content/blog";
import { SITE_URL } from "@/content/clinica";

export const metadata = buildMetadata({
  title: "Blog dental | Ortodoncia y endodoncia en Querétaro | iDent",
  description:
    "40 artículos sobre ortodoncia, endodoncia, precios, dolor y cuidados, escritos por la clínica iDent de Corregidora, Querétaro. Sin tecnicismos y sin rodeos.",
  path: "/blog",
});

const ORDEN: CategoriaId[] = [
  "precios",
  "comparativas",
  "dolor",
  "tiempos",
  "cuidados",
  "infantil",
  "senales",
];

function fecha(f: string) {
  return new Date(f).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function Page() {
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Blog", path: "/blog" },
  ];
  const destacados = ARTICULOS.slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(migas),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog de iDent",
            url: `${SITE_URL}/blog`,
            blogPost: ARTICULOS.map((a) => ({
              "@type": "BlogPosting",
              headline: a.titulo,
              url: `${SITE_URL}/blog/${a.slug}`,
              datePublished: a.fecha,
            })),
          },
        ]}
      />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-16">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Blog · {ARTICULOS.length} artículos</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.06] font-bold text-navy-800 sm:text-5xl">
              Lo que preguntan los pacientes
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Escribimos sobre las dudas que llegan por WhatsApp antes de la
              primera cita: cuánto cuesta algo, si duele, si vale la pena y
              qué pasa si no se trata. Sin rodeos y sin tecnicismos.
            </p>
          </div>

          <nav aria-label="Categorías del blog" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {ORDEN.map((id) => (
                <li key={id}>
                  <a
                    href={`#${CATEGORIAS[id].slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition hover:border-teal-300 hover:text-teal-700"
                  >
                    {CATEGORIAS[id].nombre}
                    <span className="text-navy-300">
                      {articulosDeCategoria(id).length}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {/* Destacados */}
      <section className="py-14 sm:py-16">
        <Container>
          <Eyebrow>Lo más reciente</Eyebrow>
          <ul className="reveal-grupo mt-6 grid gap-6 lg:grid-cols-2">
            {destacados.map((a) => (
              <li key={a.slug}>
                <article className="tarjeta-hover flex h-full flex-col rounded-4xl border border-navy-100 p-7 hover:border-teal-300 sm:p-9">
                  <p className="text-xs font-semibold tracking-[0.12em] text-teal-600 uppercase">
                    {CATEGORIAS[a.categoria].nombre}
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-tight font-bold text-navy-800">
                    <Link href={`/blog/${a.slug}`} className="transition hover:text-teal-700">
                      {a.titulo}
                    </Link>
                  </h2>
                  <p className="mt-4 flex-1 leading-relaxed text-navy-600">
                    {a.resumen}
                  </p>
                  <p className="mt-5 text-sm text-navy-400">
                    <time dateTime={a.fecha}>{fecha(a.fecha)}</time> · {a.lectura}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Por categoría */}
      {ORDEN.map((id, i) => {
        const cat = CATEGORIAS[id];
        const articulos = articulosDeCategoria(id);
        return (
          <section
            key={id}
            id={cat.slug}
            className={`scroll-mt-24 py-12 sm:py-14 ${i % 2 === 0 ? "bg-sand-50" : ""}`}
          >
            <Container>
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                  {cat.nombre}
                </h2>
                <p className="mt-2 text-navy-600">{cat.descripcion}</p>
              </div>
              <ul className="reveal-grupo mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {articulos.map((a) => (
                  <li key={a.slug} className="border-t border-navy-100 pt-4">
                    <h3 className="font-display text-lg leading-snug font-semibold text-navy-800">
                      <Link
                        href={`/blog/${a.slug}`}
                        className="transition hover:text-teal-700"
                      >
                        {a.titulo}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {a.resumen}
                    </p>
                    <p className="mt-2 text-xs text-navy-400">{a.lectura}</p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <Resenas fondo="blanco" compacto />
      <CtaFinal mensaje="Hola, leí el blog y quiero agendar una valoración." />
    </>
  );
}
