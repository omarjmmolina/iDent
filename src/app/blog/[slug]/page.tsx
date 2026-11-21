import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Container, CtaFinal, Faqs, Migas } from "@/components/ui";
import { ARTICULOS, articuloPorSlug } from "@/content/blog";
import { SITE_URL, CLINICA } from "@/content/clinica";

export function generateStaticParams() {
  return ARTICULOS.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articuloPorSlug(slug);
  if (!a) return {};
  return buildMetadata({
    title: a.tituloSeo,
    description: a.metaDescription,
    path: `/blog/${a.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articuloPorSlug(slug);
  if (!a) notFound();

  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Blog", path: "/blog" },
    { nombre: a.titulo, path: `/blog/${a.slug}` },
  ];
  const otros = ARTICULOS.filter((o) => o.slug !== a.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(migas),
          ...(a.faqs ? [faqSchema(a.faqs)] : []),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.titulo,
            description: a.metaDescription,
            datePublished: a.fecha,
            dateModified: a.actualizado ?? a.fecha,
            mainEntityOfPage: `${SITE_URL}/blog/${a.slug}`,
            author: { "@type": "Organization", name: CLINICA.nombreLegal },
            publisher: {
              "@type": "Organization",
              name: CLINICA.nombreLegal,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo-ident.jpg`,
              },
            },
          },
        ]}
      />

      <article>
        <header className="bg-sand-50 pt-6 pb-12 sm:pb-16">
          <Container className="max-w-3xl">
            <Migas items={migas} />
            <p className="mt-8 text-sm text-navy-400">
              <time dateTime={a.fecha}>
                {new Date(a.fecha).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </time>{" "}
              · {a.lectura} de lectura
            </p>
            <h1 className="mt-3 text-3xl leading-[1.1] font-bold text-navy-800 sm:text-4xl lg:text-[2.75rem]">
              {a.titulo}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              {a.resumen}
            </p>
          </Container>
        </header>

        <div className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            {a.cuerpo.map((b, i) => {
              if (b.tipo === "h2")
                return (
                  <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-navy-800 sm:text-3xl">
                    {b.texto}
                  </h2>
                );
              if (b.tipo === "h3")
                return (
                  <h3 key={i} className="mt-7 mb-3 font-display text-xl font-semibold text-navy-800">
                    {b.texto}
                  </h3>
                );
              if (b.tipo === "lista")
                return (
                  <ul key={i} className="my-5 space-y-3">
                    {b.items.map((li) => (
                      <li key={li} className="flex gap-3 text-lg leading-relaxed text-navy-600">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-500" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                );
              if (b.tipo === "nota")
                return (
                  <aside key={i} className="my-8 rounded-3xl bg-teal-50 px-6 py-5 text-lg leading-relaxed text-navy-700">
                    {b.texto}
                  </aside>
                );
              return (
                <p key={i} className="mt-4 text-lg leading-relaxed text-navy-600">
                  {b.texto}
                </p>
              );
            })}
          </Container>
        </div>

        {a.faqs && (
          <section className="pb-12 sm:pb-16">
            <Container className="max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-navy-800 sm:text-3xl">
                Preguntas frecuentes
              </h2>
              <Faqs faqs={a.faqs} />
            </Container>
          </section>
        )}
      </article>

      <section className="border-t border-navy-100 py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-lg font-semibold text-navy-800">
            Seguir leyendo
          </h2>
          <ul className="mt-4 space-y-3">
            {otros.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/blog/${o.slug}`}
                  className="text-lg text-teal-700 underline-offset-4 hover:underline"
                >
                  {o.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaFinal mensaje="Hola, leí un artículo del blog y quiero agendar una cita." />
    </>
  );
}
