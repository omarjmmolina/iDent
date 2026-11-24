import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { Proceso } from "@/components/Proceso";
import { Resenas } from "@/components/Resenas";
import { Validadores } from "@/components/Validadores";
import { BlogRelacionado } from "@/components/BlogRelacionado";
import { Carrusel } from "@/components/Carrusel";
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
import { VERTICALES_ORDENADAS, type Vertical } from "@/content/verticales";
import { ZONAS } from "@/content/zonas";
import { ARTICULOS } from "@/content/blog";

/**
 * Página de una vertical de servicio.
 *
 * Sirve a las seis verticales que no tienen sub-páginas propias.
 * Ortodoncia y endodoncia siguen usando PaginaPilar, que además lista sus
 * tratamientos como páginas independientes.
 */
export function PaginaVertical({
  vertical: v,
  articulos = [],
}: {
  vertical: Vertical;
  articulos?: typeof ARTICULOS;
}) {
  const path = `/${v.slug}`;
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: v.nombre, path },
  ];
  const otras = VERTICALES_ORDENADAS.filter((o) => o.clave !== v.clave);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(migas),
          ...(v.faqs ? [faqSchema(v.faqs)] : []),
          servicioSchema({
            nombre: v.nombreClinico,
            descripcion: v.metaDescription,
            path,
          }),
        ]}
      />

      {/* ── Portada ── */}
      <section className="relative overflow-hidden bg-sand-50 pt-6 pb-14 sm:pb-20">
        <div
          aria-hidden="true"
          className="aura absolute -top-28 -right-24 size-[24rem] rounded-full bg-teal-200/40 blur-3xl"
        />
        <Container className="relative">
          <Migas items={migas} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Eyebrow>{v.nombreClinico}</Eyebrow>
              <h1 className="mt-4 text-3xl leading-[1.08] font-bold text-navy-800 sm:text-4xl lg:text-[2.9rem]">
                {v.h1}
              </h1>
              {v.entradilla && (
                <p className="mt-5 text-lg leading-relaxed text-navy-600">
                  {v.entradilla}
                </p>
              )}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BotonWhatsApp
                  mensaje={`Hola, quiero información sobre ${v.nombre.toLowerCase()} en iDent.`}
                >
                  Agendar valoración
                </BotonWhatsApp>
                <BotonTelefono />
              </div>

              {/* Sinónimos: lo mismo, dicho como lo busca la gente */}
              {v.tambienBuscado.length > 0 && (
                <div className="mt-8">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-navy-400 uppercase">
                    También se busca como
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {v.tambienBuscado.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-white px-3.5 py-1.5 text-sm text-navy-600 ring-1 ring-navy-100"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <figure className="zoom-foto">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-100">
                <Image
                  src={v.imagen}
                  alt={`${v.h1}, clínica iDent en Corregidora`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-navy-400">
                Imagen ilustrativa
              </figcaption>
            </figure>
          </div>

          {v.datos && (
            <dl className="mt-10 grid gap-3 sm:grid-cols-3">
              {v.datos.map((d) => (
                <Dato key={d.label} label={d.label} valor={d.valor} />
              ))}
            </dl>
          )}
        </Container>
      </section>

      <Validadores fondo="blanco" />

      {/* ── Tratamientos de la vertical ── */}
      {v.tratamientos && (
        <section className="py-14 sm:py-20">
          <Container>
            <div className="reveal max-w-2xl">
              <Eyebrow>Qué incluye</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
                Tratamientos de {v.nombre.toLowerCase()}
              </h2>
            </div>
            <ul className="reveal-grupo mt-10 grid gap-5 sm:grid-cols-2">
              {v.tratamientos.map((t, i) => (
                <li
                  key={t.nombre}
                  className="tarjeta-hover flex gap-5 rounded-3xl border border-navy-100 p-6 sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-bold text-teal-500"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg leading-tight font-semibold text-navy-800">
                      {t.nombre}
                    </h3>
                    <p className="mt-2 leading-relaxed text-navy-600">
                      {t.descripcion}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ── Secciones de contenido ── */}
      {v.secciones && (
        <article className="bg-sand-50 py-14 sm:py-20">
          <Container className="max-w-3xl">
            {v.secciones.map((sec, i) => (
              <section key={sec.h2} className="reveal mb-14 last:mb-0">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-bold text-teal-500"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                    {sec.h2}
                  </h2>
                </div>
                {sec.parrafos?.map((p, n) => (
                  <p
                    key={p.slice(0, 40)}
                    className={
                      n === 0
                        ? "mt-5 border-l-2 border-teal-200 pl-5 text-lg leading-relaxed text-navy-700"
                        : "mt-4 text-lg leading-relaxed text-navy-600"
                    }
                  >
                    {p}
                  </p>
                ))}
                {sec.lista && (
                  <ul className="mt-6 grid gap-3">
                    {sec.lista.map((li) => (
                      <li
                        key={li}
                        className="flex gap-3 rounded-2xl bg-white px-5 py-4"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          className="mt-1 size-5 shrink-0 text-teal-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m5 13 4 4L19 7"
                          />
                        </svg>
                        <span className="leading-relaxed text-navy-700">
                          {li}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </Container>
        </article>
      )}

      <Proceso />

      {v.faqs && (
        <section className="pb-14 sm:pb-20">
          <Container className="max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-navy-800 sm:text-3xl">
              Preguntas sobre {v.nombre.toLowerCase()}
            </h2>
            <Faqs faqs={v.faqs} />
          </Container>
        </section>
      )}

      <Resenas fondo="sand" compacto />

      {/* ── Otras verticales ── */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Otros tratamientos</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-navy-800 sm:text-3xl">
              Todo lo que atendemos en la clínica
            </h2>
          </div>
          <Carrusel etiqueta="Otras especialidades" className="mt-8">
            {otras.map((o) => (
              <li key={o.clave} className="w-[17rem] sm:w-[19rem]">
                <Link
                  href={`/${o.slug}`}
                  className="grupo-flecha tarjeta-hover flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white"
                >
                  <span className="zoom-foto relative block aspect-[16/9] overflow-hidden bg-navy-100">
                    <Image
                      src={o.imagen}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="19rem"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-semibold tracking-[0.12em] text-teal-600 uppercase">
                      {o.nombreClinico}
                    </span>
                    <span className="mt-1.5 font-display text-lg leading-tight font-semibold text-navy-800">
                      {o.nombre}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                      {o.resumen}
                    </span>
                    <span className="mt-4 text-sm font-semibold text-teal-700">
                      Ver más <span className="flecha inline-block">→</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </Carrusel>
        </Container>
      </section>

      {articulos.length > 0 && <BlogRelacionado articulos={articulos} fondo="sand" />}

      {/* ── Zonas ── */}
      <section className="border-t border-navy-100 py-12">
        <Container>
          <Eyebrow>De dónde vienen nuestros pacientes</Eyebrow>
          <p className="mt-3 max-w-2xl text-navy-600">
            La clínica es una y está en El Pueblito, Corregidora. Estas son
            las zonas desde las que se trasladan.
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
        </Container>
      </section>

      <CtaFinal
        mensaje={`Hola, quiero una valoración de ${v.nombre.toLowerCase()}.`}
      />
    </>
  );
}
