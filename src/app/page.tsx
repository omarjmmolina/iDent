import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { Foto } from "@/components/Foto";
import { Carrusel } from "@/components/Carrusel";
import { Proceso } from "@/components/Proceso";
import { BlogRelacionado } from "@/components/BlogRelacionado";
import { Resenas } from "@/components/Resenas";
import { Validadores } from "@/components/Validadores";
import {
  Container,
  Eyebrow,
  BotonWhatsApp,
  BotonTelefono,
  CtaFinal,
  Faqs,
} from "@/components/ui";
import { CLINICA, direccionUnaLinea, waLink } from "@/content/clinica";
import { PILARES, SERVICIOS, serviciosDe } from "@/content/servicios";
import { ZONAS } from "@/content/zonas";
import { STOCK } from "@/content/imagenes";
import { MapaClinica } from "@/components/MapaClinica";
import { ARTICULOS } from "@/content/blog";

export const metadata = buildMetadata({
  title:
    "Dentista en Corregidora, Querétaro | Ortodoncia y endodoncia | iDent",
  description:
    "Clínica dental en El Pueblito, Corregidora: ortodoncia, endodoncia y urgencias por dolor dental. Valoración con plan y costo cerrado por escrito. Agenda por WhatsApp.",
  path: "/",
});

const FAQS_HOME = [
  {
    q: "¿Dónde está iDent?",
    a: `Estamos en ${direccionUnaLinea}. Atendemos a pacientes de Corregidora, El Pueblito, Santiago de Querétaro, Juriquilla, Zibatá, El Marqués, Huimilpan y San Juan del Río.`,
  },
  {
    q: "¿Qué incluye la valoración?",
    a: "Revisión clínica, radiografía y un plan de tratamiento por escrito con el tiempo estimado y el costo cerrado. Sales sabiendo qué necesitas, cuánto cuesta y cuánto tarda.",
  },
  {
    q: "¿Atienden urgencias por dolor el mismo día?",
    a: "Sí. Reservamos espacios de urgencia cada día. Escribe por WhatsApp describiendo el dolor y te confirmamos en minutos a qué hora puedes venir.",
  },
  {
    q: "¿Manejan meses sin intereses?",
    a: "Los tratamientos de ortodoncia se pueden pagar en mensualidades que coinciden con las citas de ajuste. En la valoración te damos el desglose exacto de tu caso.",
  },
  {
    q: "¿Necesito que me refieran para una endodoncia?",
    a: "No. Puedes llegar directo, con o sin radiografía previa. Si te la tomaron en otra clínica, mándanosla por WhatsApp y adelantamos el diagnóstico.",
  },
];

export default function Home() {
  const orto = serviciosDe("ortodoncia");
  const endo = serviciosDe("endodoncia");

  return (
    <>
      <JsonLd data={faqSchema(FAQS_HOME)} />

      {/* ───────── Portada ───────── */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="aura absolute -top-32 -right-24 size-[28rem] rounded-full bg-teal-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="aura absolute -bottom-40 -left-32 size-[26rem] rounded-full bg-navy-200/40 blur-3xl"
          style={{ animationDelay: "3s" }}
        />

        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <div className="entra entra-1">
                <Eyebrow>Corregidora · El Pueblito · Querétaro</Eyebrow>
              </div>
              <h1 className="entra entra-2 mt-4 text-4xl leading-[1.05] font-bold text-navy-800 sm:text-5xl lg:text-[3.4rem]">
                Ortodoncia y endodoncia{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">en Corregidora</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1.5 z-0 h-3 rounded-sm bg-teal-200/70 sm:bottom-2 sm:h-4"
                  />
                </span>
              </h1>
              <p className="entra entra-3 mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Dos especialidades, una clínica, y el costo por escrito desde
                la primera cita. Atendemos a pacientes de todo Querétaro sin
                que tengan que cruzar la ciudad para un ajuste de veinte
                minutos.
              </p>

              <div className="entra entra-4 mt-8 flex flex-col gap-3 sm:flex-row">
                <BotonWhatsApp mensaje="Hola, quiero agendar una valoración en iDent.">
                  Agendar valoración
                </BotonWhatsApp>
                <BotonTelefono />
              </div>

              <dl className="entra entra-4 mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-navy-100 pt-6">
                <div>
                  <dt className="text-xs text-navy-400">Google</dt>
                  <dd className="font-display text-xl font-bold text-navy-800">
                    {CLINICA.resenas.calificacion} ★
                  </dd>
                  <dd className="text-xs text-navy-400">
                    {CLINICA.resenas.total} reseñas
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-navy-400">Urgencias</dt>
                  <dd className="font-display text-xl font-bold text-navy-800">
                    Mismo día
                  </dd>
                  <dd className="text-xs text-navy-400">según agenda</dd>
                </div>
                <div>
                  <dt className="text-xs text-navy-400">Presupuesto</dt>
                  <dd className="font-display text-xl font-bold text-navy-800">
                    Por escrito
                  </dd>
                  <dd className="text-xs text-navy-400">sin sorpresas</dd>
                </div>
              </dl>
            </div>

            <div className="entra entra-3 zoom-foto">
              <Foto
                archivo="fachada-clinica-ident-corregidora"
                priority
                stock={STOCK.hero}
                foto={{
                  src: null,
                  ratio: "4/3",
                  alt: "Fachada de la clínica dental iDent en Plaza El Jacal, El Pueblito, Corregidora",
                  brief:
                    "Fachada o recepción de la clínica en Plaza El Jacal. Horizontal, luz de día, con el logotipo visible. Es la primera imagen que va a ver el paciente.",
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      <Validadores />

      {/* ───────── Urgencias ───────── */}
      <section className="border-b border-teal-100 bg-teal-50">
        <Container className="flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-navy-700">
            <strong className="font-semibold text-navy-800">
              ¿Te duele una muela ahora mismo?
            </strong>{" "}
            Escríbenos y te decimos si hay espacio hoy.
          </p>
          <Link
            href={`/${PILARES.endodoncia.slug}/urgencia-dolor-dental`}
            className="grupo-flecha shrink-0 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
          >
            <span className="subraya">Ver urgencias dentales</span>{" "}
            <span className="flecha inline-block">→</span>
          </Link>
        </Container>
      </section>

      {/* ───────── Las dos vertientes ───────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>En qué nos especializamos</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
              Dos especialidades, dos formas distintas de atenderte
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Una ortodoncia se decide en semanas y se compara mucho. Una
              endodoncia se decide el mismo día, con dolor. No se pueden
              atender igual, y por eso no lo hacemos.
            </p>
          </div>

          <div className="reveal-grupo mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            {[PILARES.ortodoncia, PILARES.endodoncia].map((p) => {
              const esOrto = p.slug === PILARES.ortodoncia.slug;
              const hijos = esOrto ? orto : endo;
              return (
                <article
                  key={p.slug}
                  className={`tarjeta-hover flex flex-col rounded-4xl border p-7 sm:p-9 ${
                    esOrto
                      ? "border-navy-100 bg-white"
                      : "border-navy-700 bg-navy-800 text-white"
                  }`}
                >
                  <div className="flex flex-col-reverse items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3
                      className={`font-display text-2xl font-bold ${esOrto ? "text-navy-800" : "text-white"}`}
                    >
                      <Link
                        href={`/${p.slug}`}
                        className={esOrto ? "transition hover:text-teal-700" : "transition hover:text-teal-300"}
                      >
                        {p.h1}
                      </Link>
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide whitespace-nowrap uppercase ${
                        esOrto
                          ? "bg-sand-100 text-navy-500"
                          : "bg-teal-500/20 text-teal-300"
                      }`}
                    >
                      {esOrto ? "Tratamiento largo" : "Decisión inmediata"}
                    </span>
                  </div>

                  <p
                    className={`mt-3 leading-relaxed ${esOrto ? "text-navy-600" : "text-navy-100"}`}
                  >
                    {p.intro}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {hijos.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${p.slug}/${s.slug}`}
                          className={`grupo-flecha flex items-center justify-between gap-3 rounded-xl border border-transparent px-4 py-3 text-[15px] font-medium transition ${
                            esOrto
                              ? "bg-sand-100 text-navy-700 hover:border-navy-200 hover:bg-white"
                              : "bg-white/5 text-navy-100 hover:bg-white/10"
                          }`}
                        >
                          {s.nombre}
                          <span
                            aria-hidden="true"
                            className={`flecha ${esOrto ? "text-navy-300" : "text-teal-400"}`}
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Bloque de cierre: equilibra las dos tarjetas y cada una
                      remata con la acción que corresponde a su urgencia. */}
                  <div className="mt-auto pt-6">
                    {esOrto ? (
                      <div className="rounded-2xl bg-teal-50 p-5">
                        <p className="font-display text-base font-semibold text-navy-800">
                          ¿No sabes cuál te toca?
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                          En la valoración medimos el espacio real de tu boca y
                          te decimos qué sistemas funcionan en tu caso, con el
                          costo de cada uno.
                        </p>
                        <Link
                          href={`/${p.slug}`}
                          className="grupo-flecha mt-3 inline-block text-sm font-semibold text-teal-700"
                        >
                          <span className="subraya">Ver ortodoncia en Querétaro</span>{" "}
                          <span className="flecha inline-block">→</span>
                        </Link>
                      </div>
                    ) : (
                      <div className="rounded-2xl bg-teal-500/15 p-5">
                        <p className="font-display text-base font-semibold text-white">
                          Si estás con dolor ahora
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-navy-100">
                          Guardamos espacios de urgencia cada día. Escríbenos
                          contando qué te pasa y te decimos en minutos si hay
                          hueco hoy.
                        </p>
                        <a
                          href={waLink("Hola, tengo dolor de muela y necesito una cita hoy.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-evento="click_whatsapp"
                          className="mt-4 inline-flex items-center justify-center rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-400"
                        >
                          Escribir por WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────── Todos los tratamientos (carrusel) ───────── */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Tratamientos</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
              Todo lo que resolvemos
            </h2>
          </div>
          <Carrusel etiqueta="Tratamientos de iDent" className="mt-10">
            {SERVICIOS.map((s) => (
              <li key={s.slug} className="w-[17rem] sm:w-[19rem]">
                <Link
                  href={`/${PILARES[s.pilar].slug}/${s.slug}`}
                  className="grupo-flecha tarjeta-hover flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white"
                >
                  <span className="zoom-foto relative block aspect-[4/3] overflow-hidden bg-navy-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/img/stock/${s.slug}.webp`}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-semibold tracking-[0.12em] text-teal-600 uppercase">
                      {PILARES[s.pilar].nombre}
                    </span>
                    <span className="mt-2 font-display text-lg leading-tight font-semibold text-navy-800">
                      {s.nombre}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                      {s.datos[0].label}: {s.datos[0].valor}
                    </span>
                    <span className="mt-4 text-sm font-semibold text-teal-700">
                      Ver tratamiento{" "}
                      <span className="flecha inline-block">→</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </Carrusel>
        </Container>
      </section>

      {/* ───────── Por qué iDent ───────── */}
      <section className="relative overflow-hidden bg-navy-800 py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="aura absolute top-1/2 -right-32 size-[30rem] -translate-y-1/2 rounded-full bg-teal-500/15 blur-3xl"
        />
        <Container className="relative">
          <div className="reveal max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-teal-300 uppercase">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Tres cosas que decidimos hacer distinto
            </h2>
          </div>
          <div className="reveal-grupo mt-12 grid gap-10 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "El costo se cierra por escrito",
                d: "En la valoración te entregamos el plan con el tiempo estimado y el precio final. Lo que se cotizó es lo que se cobra: no aparecen conceptos nuevos a mitad del tratamiento.",
              },
              {
                n: "02",
                t: "La clínica está donde vives",
                d: "Una ortodoncia son entre dieciocho y veinticuatro visitas. Estar en Corregidora no es comodidad: es lo que hace que el tratamiento se termine en vez de abandonarse.",
              },
              {
                n: "03",
                t: "Te decimos cuándo no hace falta",
                d: "Hay casos en los que lo correcto es esperar seis meses y volver a revisar. Lo decimos aunque signifique no vender el tratamiento hoy.",
              },
            ].map((item) => (
              <div key={item.n} className="border-t border-white/15 pt-5">
                <p className="font-display text-sm font-bold text-teal-400">
                  {item.n}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  {item.t}
                </h3>
                <p className="mt-3 leading-relaxed text-navy-200">{item.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Proceso fondo="sand" />

      <Resenas fondo="blanco" />

      {/* ───────── Formas de pago ───────── */}
      <section className="bg-sand-50 py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="reveal">
              <Eyebrow>Formas de pago</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
                Un tratamiento de dos años no se paga de una vez
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-600">
                Los tratamientos de ortodoncia se dividen en un pago inicial
                y mensualidades que coinciden con las citas de ajuste. El
                total se cierra en la valoración y no cambia después.
              </p>
              <Link
                href="/precios"
                className="grupo-flecha mt-6 inline-block text-sm font-semibold text-teal-700"
              >
                <span className="subraya">
                  Ver precios y qué incluye cada tratamiento
                </span>{" "}
                <span className="flecha inline-block">→</span>
              </Link>
            </div>
            <ul className="reveal-grupo grid gap-4 sm:grid-cols-2">
              {[
                { t: "Mensualidades", d: "Un pago inicial y cuotas que caen junto con cada cita de ajuste." },
                { t: "Tarjeta", d: "Débito y crédito. Consulta los plazos disponibles a meses sin intereses." },
                { t: "Efectivo y transferencia", d: "Las dos opciones, con comprobante." },
                { t: "Por etapas", d: "En endodoncia con corona, el pago se puede dividir entre las dos fases." },
              ].map((item) => (
                <li key={item.t} className="tarjeta-hover rounded-3xl bg-white p-6">
                  <h3 className="font-display text-lg font-semibold text-navy-800">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy-600">
                    {item.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ───────── Marquesina de zonas ───────── */}
      <section
        aria-label="Zonas desde las que vienen nuestros pacientes"
        className="marquesina-contenedor overflow-hidden border-y border-navy-100 bg-white py-4"
      >
        <div className="marquesina">
          {[0, 1].map((tanda) => (
            <ul
              key={tanda}
              className="flex shrink-0 gap-3 pr-3"
              aria-hidden={tanda === 1 ? "true" : undefined}
            >
              {ZONAS.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zonas/${z.slug}`}
                    tabIndex={tanda === 1 ? -1 : undefined}
                    className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-5 py-2 text-sm font-medium whitespace-nowrap text-navy-600 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-teal-400" />
                    {z.nombreCorto}
                    <span className="text-navy-300">{z.traslado.tiempo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ───────── Zonas ───────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="reveal max-w-2xl">
            <Eyebrow>Cobertura</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
              De dónde vienen nuestros pacientes
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Tenemos una sola clínica y está en El Pueblito, Corregidora.
              No hay sucursales: lo que hay son pacientes que se trasladan
              desde buena parte del área metropolitana. Cada zona tiene su
              página con la ruta, el tiempo y cómo organizamos las citas.
            </p>
          </div>
          <Carrusel etiqueta="Zonas que atendemos" className="mt-10">
            {ZONAS.map((z) => (
              <li key={z.slug} className="w-[16rem] sm:w-[18rem]">
                <Link
                  href={`/zonas/${z.slug}`}
                  className="grupo-flecha tarjeta-hover flex h-full flex-col rounded-3xl border border-navy-100 p-6 hover:border-teal-300"
                >
                  <span className="font-display text-lg font-semibold text-navy-800">
                    {z.nombreCorto}
                  </span>
                  <span className="mt-1 text-sm text-navy-400">
                    {z.sede ? "Aquí está la clínica" : `${z.municipio} · se trasladan`}
                  </span>
                  <span className="mt-6 flex items-center gap-2 text-sm font-medium text-teal-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                      className="size-4"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" d="M12 7v5l3 2" />
                    </svg>
                    {z.sede ? z.traslado.tiempo : `A ${z.traslado.tiempo.replace("Aprox. ", "")} de la clínica`}
                  </span>
                  <span className="mt-4 text-sm font-semibold text-navy-500">
                    Ver zona <span className="flecha inline-block">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </Carrusel>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <h3 className="font-display text-2xl font-bold text-navy-800">
                La clínica, una sola, en Corregidora
              </h3>
              <p className="mt-3 leading-relaxed text-navy-600">
                Plaza El Jacal, en El Pueblito. Todas las citas, de
                cualquier zona, son aquí. Si vienes de fuera del municipio,
                escríbenos antes y te confirmamos horario y ruta.
              </p>
              <Link
                href="/contacto"
                className="grupo-flecha mt-5 inline-block text-sm font-semibold text-teal-700"
              >
                <span className="subraya">Ver horarios y contacto</span>{" "}
                <span className="flecha inline-block">→</span>
              </Link>
            </div>
            <MapaClinica alto="aspect-[16/10]" />
          </div>
        </Container>
      </section>

      {/* ───────── Equipo y casos ───────── */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="reveal flex flex-col">
            <Eyebrow>Quién te atiende</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-navy-800">
              El equipo de iDent
            </h2>
            <p className="mt-4 leading-relaxed text-navy-600">
              Saber quién te va a tratar, con qué formación y en qué se
              especializa cambia la conversación. En la página de equipo está
              el perfil de cada uno.
            </p>
            <div className="mt-6">
              <Foto
                archivo="equipo-ident"
                foto={{
                  src: null,
                  ratio: "4/3",
                  alt: "Equipo de la clínica dental iDent en Corregidora, Querétaro",
                  brief:
                    "Foto del equipo completo en la clínica, con bata. Horizontal. Alternativa: retrato del doctor titular con el consultorio detrás.",
                }}
              />
            </div>
            <Link
              href="/equipo"
              className="grupo-flecha mt-6 inline-block text-sm font-semibold text-teal-700"
            >
              <span className="subraya">Conocer al equipo</span>{" "}
              <span className="flecha inline-block">→</span>
            </Link>
          </div>

          <div className="reveal flex flex-col">
            <Eyebrow>Resultados</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-navy-800">
              Casos antes y después
            </h2>
            <p className="mt-4 leading-relaxed text-navy-600">
              Casos reales de la clínica, publicados con autorización firmada
              del paciente. Es lo que más peso tiene cuando alguien está
              decidiendo una ortodoncia.
            </p>
            <div className="mt-6">
              <Foto
                archivo="caso-antes-despues-1"
                foto={{
                  src: null,
                  ratio: "4/3",
                  alt: "Caso de ortodoncia antes y después en la clínica iDent de Corregidora",
                  brief:
                    "Antes y después de un caso de ortodoncia, mismo encuadre y misma luz en las dos tomas. Requiere autorización firmada del paciente.",
                }}
              />
            </div>
            <Link
              href="/casos"
              className="grupo-flecha mt-6 inline-block text-sm font-semibold text-teal-700"
            >
              <span className="subraya">Ver casos</span>{" "}
              <span className="flecha inline-block">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="reveal">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="mt-3 mb-8 text-3xl font-bold text-navy-800 sm:text-4xl">
              Lo que más nos preguntan
            </h2>
          </div>
          <Faqs faqs={FAQS_HOME} />
        </Container>
      </section>

      <BlogRelacionado
        articulos={ARTICULOS.slice(0, 6)}
        titulo="Lo que más nos preguntan antes de la primera cita"
        fondo="sand"
      />

      <CtaFinal mensaje="Hola, vengo del sitio web y quiero agendar una valoración." />
    </>
  );
}
