import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import { VERTICALES_ORDENADAS } from "@/content/verticales";
import { IconoVertical } from "@/components/iconos";

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
                    <IconoVertical nombre={v.icono} />
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
