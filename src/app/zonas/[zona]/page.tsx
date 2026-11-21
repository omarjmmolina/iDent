import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Container,
  Eyebrow,
  BotonWhatsApp,
  BotonTelefono,
  CtaFinal,
  Faqs,
  Migas,
  Dato,
} from "@/components/ui";
import { ZONAS, zonaPorSlug } from "@/content/zonas";
import { PILARES, serviciosDe } from "@/content/servicios";
import { CLINICA, direccionUnaLinea } from "@/content/clinica";
import { Proceso } from "@/components/Proceso";
import { BlogRelacionado } from "@/components/BlogRelacionado";
import { Resenas } from "@/components/Resenas";
import { ARTICULOS } from "@/content/blog";

export function generateStaticParams() {
  return ZONAS.map((z) => ({ zona: z.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zona: string }>;
}) {
  const { zona } = await params;
  const z = zonaPorSlug(zona);
  if (!z) return {};
  return buildMetadata({
    title: z.titulo,
    description: z.metaDescription,
    path: `/zonas/${z.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ zona: string }>;
}) {
  const { zona } = await params;
  const z = zonaPorSlug(zona);
  if (!z) notFound();

  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: z.nombreCorto, path: `/zonas/${z.slug}` },
  ];
  const otras = ZONAS.filter((o) => o.slug !== z.slug);
  // Para zonas se eligen artículos de decisión: precios y comparativas son
  // lo que más consulta alguien que está valorando si vale el traslado.
  const articulos = ARTICULOS.filter(
    (a) => a.categoria === "precios" || a.categoria === "comparativas",
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(migas), faqSchema(z.faqs)]} />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-20">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>
              {z.municipio === "Querétaro"
                ? "Querétaro"
                : `${z.municipio}, Querétaro`}
            </Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.06] font-bold text-navy-800 sm:text-5xl">
              {z.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              {z.entradilla}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BotonWhatsApp
                mensaje={`Hola, vengo desde ${z.nombreCorto} y quiero agendar una cita en iDent.`}
              >
                Agendar desde {z.nombreCorto}
              </BotonWhatsApp>
              <BotonTelefono />
            </div>
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            <Dato label="Tiempo de traslado" valor={z.traslado.tiempo} />
            <Dato label="Trayecto" valor={z.traslado.distancia} />
            <Dato label="Ruta principal" valor={z.traslado.ruta} />
          </dl>
        </Container>
      </section>

      {/* Cómo llegar */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                Cómo llegar desde {z.nombreCorto}
              </h2>
              <ol className="mt-6 space-y-4">
                {z.comoLlegar.map((paso, i) => (
                  <li key={paso} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-7 shrink-0 place-items-center rounded-full bg-teal-500 text-xs font-bold text-white"
                    >
                      {i + 1}
                    </span>
                    <span className="leading-relaxed text-navy-600">{paso}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl border border-navy-100 bg-sand-50 p-5">
                <h3 className="font-display text-base font-semibold text-navy-800">
                  Estacionamiento
                </h3>
                <p className="mt-2 text-navy-600">{z.estacionamiento}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                Dónde estamos
              </h2>
              <address className="mt-4 text-lg leading-relaxed text-navy-600 not-italic">
                {direccionUnaLinea}
              </address>
              {CLINICA.googleMapsUrl ? (
                <a
                  href={CLINICA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-teal-700 underline underline-offset-4"
                >
                  Abrir ruta en Google Maps →
                </a>
              ) : (
                <p className="mt-3 rounded-xl border border-dashed border-navy-300 bg-navy-50 px-4 py-3 font-mono text-xs text-navy-500">
                  Pendiente: enlace de Google Maps en CLINICA.googleMapsUrl
                </p>
              )}

              <div
                className="mt-6 grid aspect-[4/3] place-items-center rounded-3xl border-2 border-dashed border-navy-300 bg-navy-50 p-6 text-center"
                data-pendiente="mapa"
              >
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-teal-700 uppercase">
                    Mapa pendiente
                  </p>
                  <p className="mt-2 text-sm text-navy-600">
                    Aquí va el mapa incrustado de Google con el pin de la
                    clínica. Se activa en cuanto tengamos el Place ID de la
                    ficha de Google Business Profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contexto propio de la zona */}
      <article className="border-t border-navy-100 py-14 sm:py-20">
        <Container className="max-w-3xl">
          {z.contexto.map((sec) => (
            <section key={sec.h2} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                {sec.h2}
              </h2>
              {sec.parrafos.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-navy-600">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </Container>
      </article>

      {/* Cómo trabajamos con pacientes que se trasladan */}
      <section className="bg-navy-800 py-14 text-white sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-teal-300 uppercase">
              Si te trasladas
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Cómo organizamos tus citas desde {z.nombreCorto}
            </h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Confirmación el día anterior",
                d: "Te escribimos por WhatsApp. Si vamos retrasados por una urgencia, te avisamos antes de que salgas de casa.",
              },
              {
                t: "Citas agrupadas",
                d: "Valoración, radiografía y lo que haga falta en una sola visita, en vez de repartirlo en tres.",
              },
              {
                t: "Serie completa agendada",
                d: "En tratamientos largos dejamos todas las citas apartadas desde el inicio, siempre en el mismo horario.",
              },
              {
                t: "Cotización antes de viajar",
                d: "Mándanos fotos y radiografía por WhatsApp: te damos un rango antes de que subas al coche.",
              },
            ].map((item) => (
              <div key={item.t}>
                <h3 className="font-display text-lg font-semibold">{item.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-200">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-navy-300">
            Tiempo estimado desde {z.nombreCorto}: {z.traslado.tiempo}. Las
            horas más cargadas del área metropolitana son de 7:30 a 9:30 y de
            18:00 a 20:00; si puedes elegir, media mañana o media tarde se
            hacen mucho mejor.
          </p>
        </Container>
      </section>

      {/* Cada zona enlaza a los dos servicios principales (plan, frente 02) */}
      <section className="bg-sand-50 py-14 sm:py-20">
        <Container>
          <Eyebrow>Qué puedes resolver aquí</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-navy-800 sm:text-3xl">
            Tratamientos para pacientes de {z.nombreCorto}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {(["ortodoncia", "endodoncia"] as const).map((k) => {
              const p = PILARES[k];
              return (
                <div key={k} className="rounded-3xl bg-white p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-navy-800">
                    <Link href={`/${p.slug}`} className="transition hover:text-teal-700">
                      {p.nombre} en Querétaro
                    </Link>
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {serviciosDe(k).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${p.slug}/${s.slug}`}
                          className="text-[15px] text-navy-600 underline-offset-4 transition hover:text-teal-700 hover:underline"
                        >
                          {s.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-navy-800 sm:text-3xl">
            Preguntas de pacientes de {z.nombreCorto}
          </h2>
          <Faqs faqs={z.faqs} />
        </Container>
      </section>

      <Proceso fondo="sand" />

      <Resenas fondo="blanco" />

      <BlogRelacionado
        articulos={articulos}
        titulo="Antes de decidir si vale el traslado"
        fondo="sand"
      />

      <section className="border-t border-navy-100 py-12">
        <Container>
          <Eyebrow>Otras zonas</Eyebrow>
          <ul className="mt-4 flex flex-wrap gap-2">
            {otras.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/zonas/${o.slug}`}
                  className="inline-block rounded-full border border-navy-200 px-4 py-2 text-sm text-navy-600 transition hover:border-teal-300 hover:text-teal-700"
                >
                  {o.nombreCorto}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaFinal
        titulo={`¿Vienes desde ${z.nombreCorto}?`}
        texto="Escríbenos antes de salir: te confirmamos el horario, te decimos qué llevar y, si tienes radiografía previa, adelantamos el diagnóstico."
        mensaje={`Hola, vengo desde ${z.nombreCorto} y quiero agendar una cita.`}
      />
    </>
  );
}
