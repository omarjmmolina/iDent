import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Foto } from "@/components/Foto";
import { Container, Eyebrow, CtaFinal, Migas } from "@/components/ui";
import { Resenas } from "@/components/Resenas";

export const metadata = buildMetadata({
  title: "Casos antes y después | Ortodoncia y endodoncia | iDent Querétaro",
  description:
    "Casos reales de ortodoncia y endodoncia tratados en la clínica iDent de Corregidora, Querétaro, publicados con autorización firmada del paciente.",
  path: "/casos",
});

/**
 * ⚠️ PENDIENTE: cada caso necesita la foto de antes y la de después, más la
 * autorización firmada del paciente. Mientras `src` sea null se muestra el
 * marcador con el brief de la toma.
 */
const CASOS = [
  {
    id: "caso-01",
    titulo: "Apiñamiento severo en arcada superior",
    tratamiento: "Brackets metálicos",
    duracion: "22 meses",
    resumen:
      "Paciente adulta con falta de espacio en la arcada superior y dos caninos montados. Se resolvió sin extracciones.", // TODO: sustituir por un caso real de la clínica
  },
  {
    id: "caso-02",
    titulo: "Mordida abierta anterior",
    tratamiento: "Brackets estéticos",
    duracion: "24 meses",
    resumen:
      "Caso con antecedente de succión del pulgar en la infancia. Cierre de mordida y corrección de la posición de los incisivos.", // TODO
  },
  {
    id: "caso-03",
    titulo: "Diagnóstico y recuperación de molar",
    tratamiento: "Tratamiento de conductos y corona",
    duracion: "2 citas",
    resumen:
      "Molar inferior con caries profunda y dolor nocturno. Se conservó la pieza y se restauró con corona.", // TODO
  },
  {
    id: "caso-04",
    titulo: "Espacios entre dientes anteriores",
    tratamiento: "Alineadores invisibles",
    duracion: "14 meses",
    resumen:
      "Cierre de diastemas en paciente que no podía traer brackets visibles por trabajo.", // TODO
  },
  {
    id: "caso-05",
    titulo: "Expansión de paladar en paciente infantil",
    tratamiento: "Ortopedia maxilar",
    duracion: "10 meses",
    resumen:
      "Niño de 8 años con mordida cruzada unilateral y respiración bucal. Se ganó espacio para los permanentes.", // TODO
  },
  {
    id: "caso-06",
    titulo: "Endodoncia previa fallida",
    tratamiento: "Retratamiento de conductos",
    duracion: "3 citas",
    resumen:
      "Pieza tratada años atrás que volvió a infectarse por un conducto sin localizar.", // TODO
  },
];

export default function Page() {
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Casos", path: "/casos" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(migas)} />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-20">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Resultados</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.06] font-bold text-navy-800 sm:text-5xl">
              Casos antes y después
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Casos tratados en la clínica, con la misma luz y el mismo
              encuadre en las dos tomas para que la comparación sea honesta.
              Todos se publican con autorización firmada del paciente.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CASOS.map((c) => (
              <li key={c.id}>
                <article className="flex h-full flex-col">
                  <div className="grid grid-cols-2 gap-2">
                    <Foto
                      archivo={`${c.id}-antes`}
                      foto={{
                        src: null,
                        ratio: "1/1",
                        alt: `${c.titulo}: antes del tratamiento en iDent Querétaro`,
                        brief: "Antes",
                      }}
                    />
                    <Foto
                      archivo={`${c.id}-despues`}
                      foto={{
                        src: null,
                        ratio: "1/1",
                        alt: `${c.titulo}: después del tratamiento en iDent Querétaro`,
                        brief: "Después",
                      }}
                    />
                  </div>
                  <h2 className="mt-5 font-display text-lg leading-tight font-semibold text-navy-800">
                    {c.titulo}
                  </h2>
                  <p className="mt-2 text-sm text-teal-700">
                    {c.tratamiento} · {c.duracion}
                  </p>
                  <p className="mt-3 leading-relaxed text-navy-600">
                    {c.resumen}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-3xl rounded-2xl bg-sand-100 px-6 py-5 text-sm leading-relaxed text-navy-500">
            Cada caso es distinto. Los tiempos y resultados mostrados
            corresponden a esos pacientes en particular y no constituyen una
            promesa de resultado para otro caso. La única forma de saber qué
            se puede lograr en tu boca es una valoración con radiografía.
          </p>
        </Container>
      </section>

      <Resenas fondo="sand" />

      <CtaFinal
        titulo="¿Quieres saber qué se puede hacer en tu caso?"
        texto="En la valoración revisamos tu caso con radiografía y te decimos qué resultado es realista y en cuánto tiempo."
        mensaje="Hola, vi los casos en la web y quiero una valoración."
      />
    </>
  );
}
