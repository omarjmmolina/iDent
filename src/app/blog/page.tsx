import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Container, Eyebrow, CtaFinal, Migas } from "@/components/ui";
import { ARTICULOS } from "@/content/blog";

export const metadata = buildMetadata({
  title: "Blog dental | Ortodoncia y endodoncia en Querétaro | iDent",
  description:
    "Artículos sobre ortodoncia, endodoncia, precios y cuidado dental escritos por la clínica iDent de Corregidora, Querétaro. Sin tecnicismos y sin rodeos.",
  path: "/blog",
});

export default function Page() {
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Blog", path: "/blog" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(migas)} />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-20">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.06] font-bold text-navy-800 sm:text-5xl">
              Lo que preguntan los pacientes
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Escribimos sobre las dudas que llegan por WhatsApp antes de la
              primera cita: cuánto cuesta algo, si duele, si vale la pena y
              qué pasa si no se trata.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <ul className="grid gap-8 lg:grid-cols-2">
            {ARTICULOS.map((a) => (
              <li key={a.slug}>
                <article className="flex h-full flex-col rounded-4xl border border-navy-100 p-7 transition hover:border-teal-300 sm:p-9">
                  <p className="text-sm text-navy-400">
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
                  <h2 className="mt-3 font-display text-2xl leading-tight font-bold text-navy-800">
                    <Link href={`/blog/${a.slug}`} className="transition hover:text-teal-700">
                      {a.titulo}
                    </Link>
                  </h2>
                  <p className="mt-4 flex-1 leading-relaxed text-navy-600">
                    {a.resumen}
                  </p>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="mt-6 text-sm font-semibold text-teal-700 underline underline-offset-4"
                  >
                    Leer el artículo →
                  </Link>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-navy-400">
            El blog se alimenta en las revisiones bimestrales con los temas
            que más búsquedas estén generando.
          </p>
        </Container>
      </section>

      <CtaFinal mensaje="Hola, leí el blog y quiero agendar una valoración." />
    </>
  );
}
