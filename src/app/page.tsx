import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { Foto } from "@/components/Foto";
import {
  Container,
  Eyebrow,
  BotonWhatsApp,
  BotonTelefono,
  CtaFinal,
  Faqs,
} from "@/components/ui";
import { CLINICA, direccionUnaLinea } from "@/content/clinica";
import { PILARES, SERVICIOS, serviciosDe } from "@/content/servicios";
import { ZONAS } from "@/content/zonas";

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

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Eyebrow>Corregidora · El Pueblito · Querétaro</Eyebrow>
              <h1 className="mt-4 text-4xl leading-[1.05] font-bold text-navy-800 sm:text-5xl lg:text-[3.4rem]">
                Ortodoncia y endodoncia en Corregidora
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Dos especialidades, una clínica, y el costo por escrito desde la
                primera cita. Atendemos a pacientes de todo Querétaro sin que
                tengan que cruzar la ciudad para un ajuste de veinte minutos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BotonWhatsApp mensaje="Hola, quiero agendar una valoración en iDent." >
                  Agendar valoración
                </BotonWhatsApp>
                <BotonTelefono />
              </div>

              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-navy-100 pt-6">
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

            <Foto
              archivo="fachada-clinica-ident-corregidora"
              priority
              foto={{
                src: null,
                ratio: "4/3",
                alt: "Fachada de la clínica dental iDent en Plaza El Jacal, El Pueblito, Corregidora",
                brief:
                  "Fachada o recepción de la clínica en Plaza El Jacal. Horizontal, luz de día, con el logotipo visible. Es la primera imagen que va a ver el paciente.",
              }}
            />
          </div>
        </Container>
      </section>

      {/* ───────── Urgencias ───────── */}
      <section className="border-y border-teal-100 bg-teal-50">
        <Container className="flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-navy-700">
            <strong className="font-semibold text-navy-800">
              ¿Te duele una muela ahora mismo?
            </strong>{" "}
            Escríbenos y te decimos si hay espacio hoy.
          </p>
          <Link
            href={`/${PILARES.endodoncia.slug}/urgencia-dolor-dental`}
            className="shrink-0 text-sm font-semibold text-teal-700 underline underline-offset-4 transition hover:text-teal-800"
          >
            Ver urgencias dentales →
          </Link>
        </Container>
      </section>

      {/* ───────── Las dos vertientes ───────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
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

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[PILARES.ortodoncia, PILARES.endodoncia].map((p) => {
              const hijos = p.slug === PILARES.ortodoncia.slug ? orto : endo;
              return (
                <article
                  key={p.slug}
                  className="flex flex-col rounded-4xl border border-navy-100 bg-white p-7 transition hover:border-navy-200 sm:p-9"
                >
                  <h3 className="font-display text-2xl font-bold text-navy-800">
                    <Link href={`/${p.slug}`} className="transition hover:text-teal-700">
                      {p.h1}
                    </Link>
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy-600">{p.intro}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {hijos.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${p.slug}/${s.slug}`}
                          className="group flex items-center justify-between gap-3 rounded-xl border border-transparent bg-sand-100 px-4 py-3 text-[15px] font-medium text-navy-700 transition hover:border-navy-200 hover:bg-white"
                        >
                          {s.nombre}
                          <span
                            aria-hidden="true"
                            className="text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-teal-600"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${p.slug}`}
                    className="mt-6 text-sm font-semibold text-teal-700 underline underline-offset-4 transition hover:text-teal-800"
                  >
                    Ver {p.nombre.toLowerCase()} en Querétaro →
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────── Por qué iDent ───────── */}
      <section className="bg-navy-800 py-16 text-white sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-teal-300 uppercase">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Tres cosas que decidimos hacer distinto
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
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
              <div key={item.n}>
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

      {/* ───────── Zonas ───────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Cobertura</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
              De dónde vienen nuestros pacientes
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Estamos en Corregidora y atendemos a buena parte del área
              metropolitana. Cada zona tiene su propia página con la ruta, el
              tiempo de traslado y cómo organizamos las citas.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ZONAS.map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/zonas/${z.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-navy-100 p-6 transition hover:border-teal-300 hover:bg-teal-50/40"
                >
                  <h3 className="font-display text-lg font-semibold text-navy-800">
                    {z.nombreCorto}
                  </h3>
                  <p className="mt-1 text-sm text-navy-400">{z.municipio}</p>
                  <p className="mt-4 text-sm font-medium text-teal-700">
                    {z.traslado.tiempo}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ───────── Equipo y casos ───────── */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col">
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
              className="mt-6 text-sm font-semibold text-teal-700 underline underline-offset-4"
            >
              Conocer al equipo →
            </Link>
          </div>

          <div className="flex flex-col">
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
              className="mt-6 text-sm font-semibold text-teal-700 underline underline-offset-4"
            >
              Ver casos →
            </Link>
          </div>
        </Container>
      </section>

      {/* ───────── Todos los tratamientos ───────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>Tratamientos</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
            Todo lo que resolvemos
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICIOS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${PILARES[s.pilar].slug}/${s.slug}`}
                  className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-sand-100 p-6 transition hover:bg-navy-50"
                >
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-teal-600 uppercase">
                      {PILARES[s.pilar].nombre}
                    </p>
                    <h3 className="mt-2 font-display text-lg leading-tight font-semibold text-navy-800">
                      {s.nombre}
                    </h3>
                  </div>
                  <p className="text-sm text-navy-500">{s.datos[0].valor}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="pb-16 sm:pb-24">
        <Container className="max-w-4xl">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-3 mb-8 text-3xl font-bold text-navy-800 sm:text-4xl">
            Lo que más nos preguntan
          </h2>
          <Faqs faqs={FAQS_HOME} />
        </Container>
      </section>

      <CtaFinal mensaje="Hola, vengo del sitio web y quiero agendar una valoración." />
    </>
  );
}
