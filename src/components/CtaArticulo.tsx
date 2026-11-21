import Link from "next/link";
import { waLink, telLink, CLINICA } from "@/content/clinica";
import { PILARES, SERVICIOS } from "@/content/servicios";

/**
 * Llamado a la acción intercalado en el cuerpo de un artículo.
 *
 * Van tres por artículo, repartidos, y cada uno con una forma distinta
 * para que no se lean como el mismo anuncio repetido. El contenido del
 * CTA cambia según el tratamiento del que habla el artículo.
 */
export function CtaArticulo({
  variante,
  servicio,
  titulo,
}: {
  variante: 1 | 2 | 3;
  /** Slug del tratamiento relacionado, si el artículo tiene uno. */
  servicio?: string;
  /** Título del artículo, para el mensaje de WhatsApp. */
  titulo: string;
}) {
  const s = servicio ? SERVICIOS.find((x) => x.slug === servicio) : undefined;
  const mensaje = s
    ? `Hola, leí el artículo "${titulo}" y quiero información sobre ${s.nombre.toLowerCase()}.`
    : `Hola, leí el artículo "${titulo}" en su sitio y quiero agendar una valoración.`;

  // ── 1. Franja con WhatsApp ──
  if (variante === 1) {
    return (
      <aside className="my-10 rounded-3xl bg-teal-50 p-6 sm:p-7">
        <p className="font-display text-xl leading-snug font-bold text-navy-800">
          ¿Prefieres que te lo digamos para tu caso?
        </p>
        <p className="mt-2 leading-relaxed text-navy-600">
          Mándanos una foto por WhatsApp y, si tienes radiografía, también.
          Te damos una orientación antes de que vengas a la clínica.
        </p>
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          data-evento="click_whatsapp"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-teal-600"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.53 3.7-8.22 8.23-8.22 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.69 8.21-8.23 8.21Z" />
          </svg>
          Escribir por WhatsApp
        </a>
      </aside>
    );
  }

  // ── 2. Tarjeta del tratamiento relacionado ──
  if (variante === 2) {
    if (s) {
      const pilar = PILARES[s.pilar];
      return (
        <aside className="my-10 overflow-hidden rounded-3xl border border-navy-100">
          <div className="grid sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="p-6 sm:p-7">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-teal-600 uppercase">
                Lo tratamos en la clínica
              </p>
              <p className="mt-2 font-display text-xl leading-snug font-bold text-navy-800">
                {s.h1}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-600">
                {s.datos.map((d) => `${d.label}: ${d.valor}`).join(" · ")}
              </p>
            </div>
            <div className="px-6 pb-6 sm:px-7 sm:pb-0">
              <Link
                href={`/${pilar.slug}/${s.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-navy-800"
              >
                Ver el tratamiento
              </Link>
            </div>
          </div>
        </aside>
      );
    }
    return (
      <aside className="my-10 rounded-3xl border border-navy-100 p-6 sm:p-7">
        <p className="font-display text-xl leading-snug font-bold text-navy-800">
          Una valoración resuelve esto en una cita
        </p>
        <p className="mt-2 leading-relaxed text-navy-600">
          Revisión con radiografía y un plan por escrito con el tiempo y el
          costo cerrado. Puedes llevártelo para compararlo.
        </p>
        <Link
          href="/contacto"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
        >
          Agendar valoración
        </Link>
      </aside>
    );
  }

  // ── 3. Bloque oscuro de cierre, con teléfono ──
  return (
    <aside className="my-10 rounded-3xl bg-navy-800 p-6 text-white sm:p-8">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-teal-300 uppercase">
        iDent · Corregidora, Querétaro
      </p>
      <p className="mt-3 font-display text-2xl leading-snug font-bold">
        Te decimos qué necesitas, cuánto cuesta y cuánto tarda
      </p>
      <p className="mt-3 leading-relaxed text-navy-100">
        Atendemos ortodoncia y endodoncia desde El Pueblito, para pacientes
        de todo Querétaro. El costo se cierra por escrito en la valoración y
        no cambia después.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          data-evento="click_whatsapp"
          className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-teal-400"
        >
          Agendar por WhatsApp
        </a>
        <a
          href={telLink}
          data-evento="click_telefono"
          className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
          Llamar {CLINICA.telefonoVisible}
        </a>
      </div>
    </aside>
  );
}
