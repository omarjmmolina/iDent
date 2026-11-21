import Link from "next/link";
import type { ReactNode } from "react";
import { waLink, telLink, CLINICA } from "@/content/clinica";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.16em] text-teal-600 uppercase">
      {children}
    </p>
  );
}

/** Botón principal: WhatsApp. Es el CTA que más convierte en dental. */
export function BotonWhatsApp({
  mensaje,
  children = "Escribir por WhatsApp",
  className = "",
}: {
  mensaje: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={waLink(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      data-evento="click_whatsapp"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-teal-600 active:scale-[0.98] ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.53 3.7-8.22 8.23-8.22 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.69 8.21-8.23 8.21Z" />
      </svg>
      {children}
    </a>
  );
}

export function BotonTelefono({ className = "" }: { className?: string }) {
  return (
    <a
      href={telLink}
      data-evento="click_telefono"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3.5 text-base font-semibold text-navy-700 transition hover:border-navy-300 hover:bg-navy-50 active:scale-[0.98] ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 5.5c0-1.1.9-2 2-2h2.1c.9 0 1.7.6 1.9 1.5l.7 2.6c.2.7 0 1.5-.6 2l-1.2 1a14.5 14.5 0 0 0 6 6l1-1.2c.5-.6 1.3-.8 2-.6l2.6.7c.9.2 1.5 1 1.5 1.9v2.1c0 1.1-.9 2-2 2h-1C9.8 21.5 2.5 14.2 2.5 6.5v-1Z"
        />
      </svg>
      Llamar {CLINICA.telefonoVisible}
    </a>
  );
}

/** Banda de cierre que se repite al final de cada página de contenido. */
export function CtaFinal({
  titulo = "¿Empezamos con una valoración?",
  texto = "Te decimos qué necesita tu caso, cuánto cuesta y cuánto tarda. Sin compromiso y con el costo por escrito.",
  mensaje,
}: {
  titulo?: string;
  texto?: string;
  mensaje: string;
}) {
  return (
    <section className="bg-navy-700 py-16 text-white sm:py-20">
      <Container className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{titulo}</h2>
        <p className="mt-4 text-lg text-navy-100">{texto}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BotonWhatsApp mensaje={mensaje} />
          <a
            href={telLink}
            data-evento="click_telefono"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Llamar {CLINICA.telefonoVisible}
          </a>
        </div>
      </Container>
    </section>
  );
}

export function Faqs({ faqs }: { faqs: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-navy-100 border-y border-navy-100">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex items-start justify-between gap-4 text-left">
            <h3 className="font-display text-lg font-semibold text-navy-800">
              {f.q}
            </h3>
            <span
              aria-hidden="true"
              className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-navy-200 text-navy-500 transition group-open:rotate-45"
            >
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-navy-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Migas({
  items,
}: {
  items: { nombre: string; path: string }[];
}) {
  return (
    <nav aria-label="Ruta de navegación" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-navy-400">
        {items.map((item, i) => {
          const ultimo = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {ultimo ? (
                <span className="text-navy-600" aria-current="page">
                  {item.nombre}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition hover:text-teal-600">
                    {item.nombre}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function Dato({ label, valor }: { label: string; valor: string }) {
  return (
    <div className="rounded-2xl bg-sand-100 px-5 py-4">
      <dt className="text-[11px] font-semibold tracking-[0.12em] text-navy-400 uppercase">
        {label}
      </dt>
      <dd className="mt-1 font-display text-lg font-semibold text-navy-800">
        {valor}
      </dd>
    </div>
  );
}
