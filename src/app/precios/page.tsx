import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Container,
  Eyebrow,
  BotonWhatsApp,
  CtaFinal,
  Faqs,
  Migas,
} from "@/components/ui";
import { SERVICIOS, PILARES } from "@/content/servicios";
import { PRECIOS, precioTexto, MSI_MESES } from "@/content/precios";

export const metadata = buildMetadata({
  title: "Precios de ortodoncia y endodoncia en Querétaro | iDent",
  description:
    "Precios de ortodoncia, brackets, alineadores invisibles y endodoncia en la clínica iDent de Corregidora. Costo cerrado por escrito desde la valoración y meses sin intereses.",
  path: "/precios",
});

const FAQS = [
  {
    q: "¿Por qué no publican una lista de precios cerrada?",
    a: "Porque el precio honesto depende del caso. Dos ortodoncias que se ven iguales por fuera pueden necesitar tratamientos distintos, y publicar un número bajo para después subirlo en el mostrador es la práctica que más desconfianza genera en este sector. Lo que sí hacemos es darte el costo exacto de tu caso en la valoración, por escrito, y respetarlo.",
  },
  {
    q: "¿Qué incluye el precio de una ortodoncia?",
    a: "El estudio inicial, la colocación, todos los ajustes del tratamiento, el retiro y los retenedores. Lo que se cotiza al inicio es el total: no se cobran los ajustes por separado.",
  },
  {
    q: "¿Manejan meses sin intereses?",
    a: `Sí. Los tratamientos de ortodoncia se pueden pagar en mensualidades que coinciden con las citas de ajuste, hasta en ${MSI_MESES} pagos. En la valoración te damos el desglose exacto.`,
  },
  {
    q: "¿Cuánto cuesta la valoración?",
    a: "La valoración incluye revisión, radiografía y plan de tratamiento por escrito. Te decimos el costo por WhatsApp antes de que agendes, para que no haya sorpresas.",
  },
  {
    q: "¿Aceptan tarjeta?",
    a: "Sí, aceptamos tarjeta de débito y crédito, además de efectivo y transferencia.",
  },
];

export default function Page() {
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Precios", path: "/precios" },
  ];
  const sinConfirmar = SERVICIOS.every((s) => PRECIOS[s.slug]?.desde === null);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(migas), faqSchema(FAQS)]} />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-20">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Inversión</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.06] font-bold text-navy-800 sm:text-5xl">
              Precios de ortodoncia y endodoncia en Querétaro
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              El costo de un tratamiento dental depende del caso, no del
              catálogo. Lo que sí podemos prometerte es cómo trabajamos el
              dinero: te damos el precio total por escrito en la valoración y
              ese es el que se cobra hasta el final.
            </p>
            <div className="mt-8">
              <BotonWhatsApp mensaje="Hola, quiero saber el costo de un tratamiento en iDent.">
                Pedir cotización por WhatsApp
              </BotonWhatsApp>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
            Tratamientos y rangos
          </h2>

          {sinConfirmar && (
            <p className="mt-6 rounded-2xl border border-dashed border-navy-300 bg-navy-50 px-5 py-4 font-mono text-xs leading-relaxed text-navy-500">
              Pendiente: cargar los importes reales en
              src/content/precios.ts. Mientras estén en null, esta tabla
              muestra &quot;Consultar&quot; en vez de inventar cifras.
            </p>
          )}

          <div className="mt-8 overflow-hidden rounded-3xl border border-navy-100">
            <table className="w-full text-left">
              <caption className="sr-only">
                Tratamientos de ortodoncia y endodoncia con su costo
              </caption>
              <thead className="bg-sand-100">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-navy-800">
                    Tratamiento
                  </th>
                  <th scope="col" className="hidden px-5 py-4 text-sm font-semibold text-navy-800 sm:table-cell">
                    Duración
                  </th>
                  <th scope="col" className="px-5 py-4 text-right text-sm font-semibold text-navy-800">
                    Desde
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                {SERVICIOS.map((s) => (
                  <tr key={s.slug} className="transition hover:bg-sand-50">
                    <th scope="row" className="px-5 py-4 text-left font-normal">
                      <Link
                        href={`/${PILARES[s.pilar].slug}/${s.slug}`}
                        className="font-medium text-navy-800 underline-offset-4 hover:text-teal-700 hover:underline"
                      >
                        {s.nombre}
                      </Link>
                      <span className="block text-xs text-navy-400">
                        {PILARES[s.pilar].nombre}
                      </span>
                    </th>
                    <td className="hidden px-5 py-4 text-sm text-navy-500 sm:table-cell">
                      {s.datos[0].valor}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <span className="font-display font-semibold text-navy-800">
                        {precioTexto(s.slug)}
                      </span>
                      {PRECIOS[s.slug]?.msi && PRECIOS[s.slug]?.desde !== null && (
                        <span className="block text-xs text-teal-700">
                          hasta {MSI_MESES} MSI
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-sand-100 p-6">
              <h3 className="font-display text-lg font-semibold text-navy-800">
                Qué incluye siempre
              </h3>
              <ul className="mt-4 space-y-2.5 text-navy-600">
                {[
                  "Estudio inicial con radiografía",
                  "Plan de tratamiento por escrito",
                  "Todas las citas de control del tratamiento",
                  "Retenedores al terminar una ortodoncia",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-navy-700 p-6 text-white">
              <h3 className="font-display text-lg font-semibold">
                Qué se cotiza aparte
              </h3>
              <ul className="mt-4 space-y-2.5 text-navy-100">
                {[
                  "Corona después de una endodoncia en molares",
                  "Limpiezas y tratamiento de caries previos",
                  "Extracciones que el caso requiera",
                  "Reposición de aparatos por pérdida o rotura",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container className="max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-navy-800 sm:text-3xl">
            Preguntas sobre precios y pagos
          </h2>
          <Faqs faqs={FAQS} />
        </Container>
      </section>

      <CtaFinal
        titulo="¿Quieres el número de tu caso?"
        texto="Mándanos una foto por WhatsApp y, si tienes radiografía, también. Te damos un rango antes de que vengas."
        mensaje="Hola, quiero una cotización para mi caso."
      />
    </>
  );
}
