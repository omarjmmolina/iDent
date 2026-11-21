import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { CuerpoArticulo } from "@/components/CuerpoArticulo";
import { Resenas } from "@/components/Resenas";
import {
  Container,
  CtaFinal,
  Faqs,
  Migas,
  BotonWhatsApp,
  Eyebrow,
} from "@/components/ui";
import {
  ARTICULOS,
  CATEGORIAS,
  articuloPorSlug,
  relacionados,
} from "@/content/blog";
import { imagenDe } from "@/content/blog/imagenes";
import { SERVICIOS, PILARES } from "@/content/servicios";
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
    imagen: imagenDe(a.slug).src,
  });
}

function fecha(f: string) {
  return new Date(f).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
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

  const cat = CATEGORIAS[a.categoria];
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Blog", path: "/blog" },
    { nombre: a.titulo, path: `/blog/${a.slug}` },
  ];
  const otros = relacionados(a, 3);
  const servicio = a.servicio
    ? SERVICIOS.find((s) => s.slug === a.servicio)
    : undefined;
  const imagen = imagenDe(a.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(migas),
          ...(a.faqs ? [faqSchema(a.faqs)] : []),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: a.titulo,
            description: a.metaDescription,
            image: `${SITE_URL}${imagenDe(a.slug).src}`,
            articleSection: cat.nombre,
            datePublished: a.fecha,
            dateModified: a.actualizado ?? a.fecha,
            inLanguage: "es-MX",
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
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-400">
              <Link
                href={`/blog#${cat.slug}`}
                className="font-semibold text-teal-700 uppercase tracking-[0.1em] text-xs"
              >
                {cat.nombre}
              </Link>
              <span aria-hidden="true">·</span>
              <time dateTime={a.fecha}>{fecha(a.fecha)}</time>
              <span aria-hidden="true">·</span>
              <span>{a.lectura} de lectura</span>
            </p>
            <h1 className="mt-3 text-3xl leading-[1.1] font-bold text-navy-800 sm:text-4xl lg:text-[2.75rem]">
              {a.titulo}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              {a.resumen}
            </p>
          </Container>

          <Container className="mt-8 max-w-5xl">
            <figure className="zoom-foto relative aspect-[16/9] overflow-hidden rounded-3xl bg-navy-100 sm:aspect-[2/1]">
              <Image
                src={imagen.src}
                alt={imagen.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 64rem"
                className="object-cover"
              />
            </figure>
            <figcaption className="mt-2 text-xs text-navy-400">
              Imagen ilustrativa
            </figcaption>
          </Container>
        </header>

        <div className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            <CuerpoArticulo
              bloques={a.cuerpo}
              titulo={a.titulo}
              servicio={a.servicio}
            />
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

      {/* Servicio relacionado */}
      {servicio && (
        <section className="border-t border-navy-100 py-12 sm:py-14">
          <Container className="max-w-3xl">
            <div className="rounded-4xl bg-navy-800 p-7 text-white sm:p-9">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-teal-300 uppercase">
                Tratamiento relacionado
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold">
                {servicio.h1}
              </h2>
              <p className="mt-3 leading-relaxed text-navy-100">
                {servicio.entradilla}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`/${PILARES[servicio.pilar].slug}/${servicio.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-navy-800 transition hover:bg-navy-50"
                >
                  Ver {servicio.nombre.toLowerCase()}
                </Link>
                <BotonWhatsApp
                  mensaje={`Hola, leí el artículo "${a.titulo}" y quiero información sobre ${servicio.nombre.toLowerCase()}.`}
                >
                  Preguntar por WhatsApp
                </BotonWhatsApp>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Relacionados */}
      {otros.length > 0 && (
        <section className="py-12 sm:py-14">
          <Container className="max-w-3xl">
            <Eyebrow>Seguir leyendo</Eyebrow>
            <ul className="mt-5 divide-y divide-navy-100 border-y border-navy-100">
              {otros.map((o) => (
                <li key={o.slug} className="py-4">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-teal-600 uppercase">
                    {CATEGORIAS[o.categoria].nombre}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-navy-800">
                    <Link href={`/blog/${o.slug}`} className="transition hover:text-teal-700">
                      {o.titulo}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-navy-500">{o.resumen}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-6 inline-block text-sm font-semibold text-teal-700 underline underline-offset-4"
            >
              Ver los {ARTICULOS.length} artículos →
            </Link>
          </Container>
        </section>
      )}

      {/* Aviso: contenido informativo */}
      <section className="pb-12">
        <Container className="max-w-3xl">
          <p className="rounded-2xl bg-sand-100 px-6 py-5 text-sm leading-relaxed text-navy-500">
            Este artículo es información general y no sustituye una
            valoración. Cada caso es distinto y lo que aplica en uno puede no
            aplicar en el tuyo: la única forma de saber qué necesitas es una
            revisión con radiografía.
          </p>
        </Container>
      </section>

      <Resenas fondo="sand" compacto />
      <CtaFinal mensaje="Hola, leí un artículo del blog y quiero agendar una cita." />
    </>
  );
}
