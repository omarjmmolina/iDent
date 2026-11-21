import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Foto } from "@/components/Foto";
import {
  Container,
  Eyebrow,
  BotonWhatsApp,
  BotonTelefono,
  CtaFinal,
  Faqs,
  Migas,
} from "@/components/ui";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { PILARES, serviciosDe, type Faq } from "@/content/servicios";
import { precioTexto } from "@/content/precios";
import { ZONAS } from "@/content/zonas";
import { STOCK } from "@/content/imagenes";
import { Proceso } from "@/components/Proceso";
import { BlogRelacionado } from "@/components/BlogRelacionado";
import { Resenas } from "@/components/Resenas";
import { ARTICULOS } from "@/content/blog";

export function PaginaPilar({
  pilar,
  faqs,
  foto,
  cierre,
}: {
  pilar: "ortodoncia" | "endodoncia";
  faqs: Faq[];
  foto: { alt: string; brief: string; archivo: string };
  cierre: { h2: string; parrafos: string[] };
}) {
  const p = PILARES[pilar];
  const hijos = serviciosDe(pilar);
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: p.nombre, path: `/${p.slug}` },
  ];
  const slugsHijos = hijos.map((h) => h.slug);
  const articulos = ARTICULOS.filter(
    (a) => a.servicio && slugsHijos.includes(a.servicio),
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(migas), faqSchema(faqs)]} />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-20">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Eyebrow>Especialidad</Eyebrow>
              <h1 className="mt-4 text-4xl leading-[1.06] font-bold text-navy-800 sm:text-5xl">
                {p.h1}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-navy-600">
                {p.intro}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-navy-600">
                {p.bajada}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BotonWhatsApp
                  mensaje={`Hola, quiero información sobre ${p.nombre.toLowerCase()} en iDent.`}
                >
                  Agendar valoración
                </BotonWhatsApp>
                <BotonTelefono />
              </div>
            </div>
            <Foto
              archivo={foto.archivo}
              priority
              stock={STOCK[pilar]}
              foto={{ src: null, ratio: "4/3", alt: foto.alt, brief: foto.brief }}
            />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Cómo elegir</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
              Qué tratamiento te corresponde
            </h2>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {p.comoDecidir.map((c) => (
              <li
                key={c}
                className="flex gap-3 rounded-2xl bg-sand-100 px-5 py-4 text-navy-700"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-500"
                />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hijos.map((s) => (
              <article
                key={s.slug}
                className="flex flex-col rounded-3xl border border-navy-100 p-6 transition hover:border-teal-300"
              >
                <h3 className="font-display text-xl leading-tight font-bold text-navy-800">
                  <Link href={`/${p.slug}/${s.slug}`} className="transition hover:text-teal-700">
                    {s.nombre}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-navy-600">
                  {s.entradilla.split(". ")[0]}.
                </p>
                <dl className="mt-5 space-y-1.5 border-t border-navy-100 pt-4 text-sm">
                  {s.datos.slice(0, 2).map((d) => (
                    <div key={d.label} className="flex justify-between gap-3">
                      <dt className="text-navy-400">{d.label}</dt>
                      <dd className="font-medium text-navy-700">{d.valor}</dd>
                    </div>
                  ))}
                  <div className="flex justify-between gap-3">
                    <dt className="text-navy-400">Inversión</dt>
                    <dd className="font-medium text-navy-700">
                      {precioTexto(s.slug)}
                    </dd>
                  </div>
                </dl>
                <Link
                  href={`/${p.slug}/${s.slug}`}
                  className="mt-5 text-sm font-semibold text-teal-700 underline underline-offset-4"
                >
                  Ver {s.nombre.toLowerCase()} →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparativa rápida entre los tratamientos del pilar */}
      <section className="bg-sand-50 py-14 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>De un vistazo</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-navy-800 sm:text-3xl">
              Los tratamientos comparados
            </h2>
            <p className="mt-3 text-navy-600">
              Las mismas cifras que verías en cada página, juntas, para que
              compares sin ir y volver.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-navy-100 bg-white">
            <table className="w-full min-w-[34rem] text-left">
              <caption className="sr-only">
                Comparativa de tratamientos de {p.nombre.toLowerCase()}
              </caption>
              <thead className="bg-sand-100">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-navy-800">
                    Tratamiento
                  </th>
                  {hijos[0].datos.map((d) => (
                    <th
                      key={d.label}
                      scope="col"
                      className="px-5 py-4 text-sm font-semibold text-navy-800"
                    >
                      {d.label}
                    </th>
                  ))}
                  <th scope="col" className="px-5 py-4 text-right text-sm font-semibold text-navy-800">
                    Desde
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {hijos.map((s) => (
                  <tr key={s.slug} className="transition hover:bg-sand-50">
                    <th scope="row" className="px-5 py-4 text-left font-normal">
                      <Link
                        href={`/${p.slug}/${s.slug}`}
                        className="font-medium text-navy-800 underline-offset-4 hover:text-teal-700 hover:underline"
                      >
                        {s.nombre}
                      </Link>
                    </th>
                    {s.datos.map((d) => (
                      <td key={d.label} className="px-5 py-4 text-[15px] text-navy-600">
                        {d.valor}
                      </td>
                    ))}
                    <td className="px-5 py-4 text-right font-display font-semibold text-navy-800">
                      {precioTexto(s.slug)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <Proceso />

      <section className="bg-navy-800 py-14 text-white sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{cierre.h2}</h2>
          {cierre.parrafos.map((t) => (
            <p key={t.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-navy-100">
              {t}
            </p>
          ))}
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-navy-800">
            Preguntas frecuentes sobre {p.nombre.toLowerCase()}
          </h2>
          <Faqs faqs={faqs} />
        </Container>
      </section>

      <section className="border-t border-navy-100 py-14 sm:py-20">
        <Container>
          <Eyebrow>Atendemos en</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-navy-800 sm:text-3xl">
            {p.nombre} para todo Querétaro
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {ZONAS.map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/zonas/${z.slug}`}
                  className="inline-block rounded-full border border-navy-200 px-4 py-2 text-sm text-navy-600 transition hover:border-teal-300 hover:text-teal-700"
                >
                  {z.nombreCorto}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Resenas fondo="sand" />

      <BlogRelacionado articulos={articulos} />

      <CtaFinal mensaje={`Hola, quiero una valoración de ${p.nombre.toLowerCase()}.`} />
    </>
  );
}
