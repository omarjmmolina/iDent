import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import { VERTICALES_ORDENADAS } from "@/content/verticales";

const ICONOS: Record<string, React.ReactNode> = {
  escudo: (
    <path d="M12 3.2 5 5.8v5.4c0 4.3 2.9 8.3 7 9.6 4.1-1.3 7-5.3 7-9.6V5.8L12 3.2Z" />
  ),
  pieza: (
    <>
      <path d="M8.5 3.5c-2.4 0-4 1.9-4 4.4 0 3.2 1.2 5.3 1.8 8 .4 1.8.6 4.1 2 4.1 1.6 0 1.5-3.3 3.7-3.3s2.1 3.3 3.7 3.3c1.4 0 1.6-2.3 2-4.1.6-2.7 1.8-4.8 1.8-8 0-2.5-1.6-4.4-4-4.4-1.8 0-2.6.9-3.5.9s-1.7-.9-3.5-.9Z" />
      <path d="M9.5 9.5h5" />
    </>
  ),
  brackets: (
    <>
      <rect x="4" y="8" width="16" height="8" rx="2" />
      <path d="M4 12h16M9 8v8M15 8v8" />
    </>
  ),
  brillo: (
    <>
      <path d="m12 3 1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4L12 3Z" />
      <path d="M18 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
    </>
  ),
  diente: (
    <>
      <path d="M8.5 3.5c-2.4 0-4 1.9-4 4.4 0 3.2 1.2 5.3 1.8 8 .4 1.8.6 4.1 2 4.1 1.6 0 1.5-3.3 3.7-3.3s2.1 3.3 3.7 3.3c1.4 0 1.6-2.3 2-4.1.6-2.7 1.8-4.8 1.8-8 0-2.5-1.6-4.4-4-4.4-1.8 0-2.6.9-3.5.9s-1.7-.9-3.5-.9Z" />
    </>
  ),
  encia: (
    <>
      <path d="M4 14c0-3 3.6-5 8-5s8 2 8 5" />
      <path d="M4 14c0 3.3 3.6 6 8 6s8-2.7 8-6" />
      <path d="M8 9.4V6M12 9V5M16 9.4V6" />
    </>
  ),
  bisturi: (
    <>
      <path d="M14.5 3.5 20 9l-9.2 9.2a3 3 0 0 1-2.1.9H4.5v-4.2a3 3 0 0 1 .9-2.1l9.1-9.3Z" />
      <path d="m11 7 6 6" />
    </>
  ),
  nino: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 20.5c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
      <path d="M9.5 6.8h.01M14.5 6.8h.01" />
    </>
  ),
};

/**
 * Las ocho verticales de servicio, en tarjetas.
 *
 * Cada tarjeta lleva el nombre en lenguaje de paciente y, debajo, la
 * especialidad en lenguaje clínico. Así el visitante entiende de qué se
 * trata y la página conserva la palabra clave semántica.
 */
export function Verticales({
  titulo = "Todo lo que hacemos",
  bajada = "Ocho especialidades en una sola clínica, en El Pueblito, Corregidora. Ortodoncia y endodoncia son la casa; el resto se atiende aquí mismo.",
  fondo = "blanco",
}: {
  titulo?: string;
  bajada?: string;
  fondo?: "blanco" | "sand";
}) {
  return (
    <section className={`py-16 sm:py-24 ${fondo === "sand" ? "bg-sand-50" : ""}`}>
      <Container>
        <div className="reveal max-w-2xl">
          <Eyebrow>Tratamientos</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-navy-800 sm:text-4xl">
            {titulo}
          </h2>
          <p className="mt-4 text-lg text-navy-600">{bajada}</p>
        </div>

        <ul className="reveal-grupo mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VERTICALES_ORDENADAS.map((v) => (
            <li key={v.clave}>
              <Link
                href={`/${v.slug}`}
                className="grupo-flecha tarjeta-hover group/c relative flex h-full min-h-[21rem] flex-col justify-end overflow-hidden rounded-3xl bg-navy-800"
              >
                <Image
                  src={v.imagen}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-70 transition duration-500 group-hover/c:scale-105 group-hover/c:opacity-60"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/75 to-navy-900/10"
                />

                <span className="relative p-6">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-white/95 text-navy-700 shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="size-5"
                    >
                      {ICONOS[v.icono]}
                    </svg>
                  </span>
                  <span className="block font-display text-xl leading-tight font-bold text-white">
                    {v.nombre}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold tracking-[0.12em] text-teal-300 uppercase">
                    {v.nombreClinico}
                  </span>
                  <span className="mt-3 block border-l-2 border-teal-400/70 pl-3 text-sm leading-relaxed text-navy-100">
                    {v.resumen}
                  </span>
                  <span className="mt-4 block text-sm font-semibold text-white">
                    Ver tratamiento{" "}
                    <span className="flecha inline-block">→</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
