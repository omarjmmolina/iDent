import { Container, Eyebrow } from "@/components/ui";

const PASOS = [
  {
    n: "01",
    t: "Escribes por WhatsApp",
    d: "Cuéntanos qué te pasa. Si tienes una radiografía previa, mándala: adelantamos el diagnóstico y te damos un rango de costo antes de que vengas.",
  },
  {
    n: "02",
    t: "Valoración con radiografía",
    d: "Revisión clínica, radiografía y revisión de la mordida. Aquí se ve el caso completo, no solo lo que se nota a simple vista.",
  },
  {
    n: "03",
    t: "Plan por escrito",
    d: "Te entregamos qué tratamiento necesitas, cuánto tiempo lleva, cuántas citas son y el costo cerrado. Puedes llevártelo para compararlo.",
  },
  {
    n: "04",
    t: "Decides tú",
    d: "Sin presión y sin que el precio cambie después. Si lo correcto es esperar seis meses y volver a revisar, también te lo decimos.",
  },
];

/** Cómo funciona el proceso, de la primera pregunta al tratamiento. */
export function Proceso({ fondo = "blanco" }: { fondo?: "blanco" | "sand" }) {
  return (
    <section className={`py-14 sm:py-20 ${fondo === "sand" ? "bg-sand-50" : ""}`}>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Cómo funciona</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
            De la primera pregunta al tratamiento
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Cuatro pasos, sin letra pequeña. Lo que se cotiza en el paso tres
            es lo que se cobra hasta el final.
          </p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((p) => (
            <li key={p.n} className="relative rounded-3xl bg-sand-100 p-6">
              <span className="font-display text-sm font-bold text-teal-600">
                {p.n}
              </span>
              <h3 className="mt-2 font-display text-lg leading-tight font-semibold text-navy-800">
                {p.t}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
                {p.d}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
