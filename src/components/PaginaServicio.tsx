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
  Dato,
} from "@/components/ui";
import { faqSchema, breadcrumbSchema, servicioSchema } from "@/lib/schema";
import { PILARES, serviciosDe, type Servicio } from "@/content/servicios";
import { PRECIOS, precioTexto, MSI_MESES } from "@/content/precios";
import { ZONAS } from "@/content/zonas";

export function PaginaServicio({ servicio }: { servicio: Servicio }) {
  const pilar = PILARES[servicio.pilar];
  const path = `/${pilar.slug}/${servicio.slug}`;
  const hermanos = serviciosDe(servicio.pilar).filter(
    (s) => s.slug !== servicio.slug,
  );
  const precio = PRECIOS[servicio.slug];
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: pilar.nombre, path: `/${pilar.slug}` },
    { nombre: servicio.nombre, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(migas),
          faqSchema(servicio.faqs),
          servicioSchema({
            nombre: servicio.nombre,
            descripcion: servicio.metaDescription,
            path,
          }),
        ]}
      />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-20">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Eyebrow>{pilar.nombre} en Querétaro</Eyebrow>
              <h1 className="mt-4 text-3xl leading-[1.08] font-bold text-navy-800 sm:text-4xl lg:text-[2.9rem]">
                {servicio.h1}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-navy-600">
                {servicio.entradilla}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BotonWhatsApp
                  mensaje={`Hola, me interesa información sobre ${servicio.nombre.toLowerCase()} en iDent.`}
                >
                  Preguntar por WhatsApp
                </BotonWhatsApp>
                <BotonTelefono />
              </div>
            </div>
            <Foto archivo={servicio.slug} foto={servicio.foto} priority />
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {servicio.datos.map((d) => (
              <Dato key={d.label} label={d.label} valor={d.valor} />
            ))}
            <div className="rounded-2xl bg-navy-700 px-5 py-4 text-white">
              <dt className="text-[11px] font-semibold tracking-[0.12em] text-teal-300 uppercase">
                Inversión
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold">
                {precioTexto(servicio.slug)}
              </dd>
              <dd className="mt-0.5 text-xs text-navy-200">
                {precio?.desde === null
                  ? "Te lo decimos por WhatsApp"
                  : precio?.msi
                    ? `Hasta ${MSI_MESES} mensualidades`
                    : (precio?.nota ?? "Consulta el detalle")}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <article className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          {servicio.secciones.map((sec) => (
            <section key={sec.h2} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                {sec.h2}
              </h2>
              {sec.parrafos?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-navy-600">
                  {p}
                </p>
              ))}
              {sec.lista && (
                <ul className="mt-5 space-y-3">
                  {sec.lista.map((li) => (
                    <li key={li} className="flex gap-3 text-lg leading-relaxed text-navy-600">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-500"
                      />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </Container>
      </article>

      <section className="pb-14 sm:pb-20">
        <Container className="max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-navy-800 sm:text-3xl">
            Preguntas sobre {servicio.nombre.toLowerCase()}
          </h2>
          <Faqs faqs={servicio.faqs} />
        </Container>
      </section>

      {/* Enlazado interno: cada sub-servicio enlaza a su pilar y a sus hermanos */}
      <section className="border-t border-navy-100 py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <Eyebrow>Otros tratamientos de {pilar.nombre.toLowerCase()}</Eyebrow>
              <ul className="mt-5 space-y-2.5">
                {hermanos.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${pilar.slug}/${s.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl bg-sand-100 px-4 py-3 text-[15px] font-medium text-navy-700 transition hover:bg-navy-50"
                    >
                      {s.nombre}
                      <span aria-hidden="true" className="text-navy-300 transition group-hover:text-teal-600">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${pilar.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-teal-700 underline underline-offset-4"
              >
                Ver todo sobre {pilar.nombre.toLowerCase()} en Querétaro →
              </Link>
            </div>
            <div>
              <Eyebrow>¿Desde dónde vienes?</Eyebrow>
              <p className="mt-3 text-navy-600">
                Atendemos desde Corregidora a pacientes de buena parte del
                área metropolitana. Cada zona tiene su ruta y su tiempo de
                traslado.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
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
            </div>
          </div>
        </Container>
      </section>

      <CtaFinal
        mensaje={`Hola, quiero una valoración para ${servicio.nombre.toLowerCase()}.`}
      />
    </>
  );
}
