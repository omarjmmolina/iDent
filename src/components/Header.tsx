"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CLINICA, waLink } from "@/content/clinica";
import { PILARES, serviciosDe } from "@/content/servicios";
import { VERTICALES_ORDENADAS } from "@/content/verticales";
import { ZONAS } from "@/content/zonas";
import { IconoVertical } from "@/components/iconos";

/** Sub-páginas de las dos verticales que las tienen. */
const SUBPAGINAS: Record<string, { nombre: string; href: string }[]> = {
  ortodoncia: serviciosDe("ortodoncia").map((s) => ({
    nombre: s.navNombre,
    href: `/${PILARES.ortodoncia.slug}/${s.slug}`,
  })),
  endodoncia: serviciosDe("endodoncia").map((s) => ({
    nombre: s.navNombre,
    href: `/${PILARES.endodoncia.slug}/${s.slug}`,
  })),
};

const SIMPLES = [
  { nombre: "Precios", href: "/precios" },
  { nombre: "Casos", href: "/casos" },
  { nombre: "Equipo", href: "/equipo" },
  { nombre: "Blog", href: "/blog" },
  { nombre: "Contacto", href: "/contacto" },
];

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const pathname = usePathname();
  const cerrar = () => setAbierto(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/logo-ident.jpg"
            alt="iDent, clínica dental en Corregidora, Querétaro"
            width={44}
            height={44}
            priority
            className="rounded-xl"
          />
          <span className="sr-only">{CLINICA.nombre}</span>
        </Link>

        {/* ── Navegación de escritorio ── */}
        <nav aria-label="Principal" className="ml-2 hidden items-center lg:flex">
          {/* Mega-menú de tratamientos */}
          <div className="group static">
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium text-navy-700 transition group-hover:text-teal-700"
            >
              Tratamientos
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-3.5 text-navy-300 transition group-hover:text-teal-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div className="invisible absolute inset-x-0 top-full z-50 pt-1 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="rounded-3xl border border-navy-100 bg-white p-5 shadow-xl shadow-navy-900/10">
                  {/* Columnas que fluyen, no rejilla: con una rejilla la
                      altura de cada fila la marca el bloque más alto
                      (ortodoncia, con cinco sub-páginas) y el resto queda
                      con huecos enormes. Así el contenido se reparte y las
                      tres columnas quedan parejas solas. */}
                  <ul className="columns-3 gap-x-10">
                    {VERTICALES_ORDENADAS.map((v) => (
                      <li key={v.clave} className="mb-1 break-inside-avoid">
                        <Link
                          href={`/${v.slug}`}
                          className="group/v flex gap-3 rounded-xl p-2.5 transition hover:bg-sand-50"
                        >
                          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-sand-100 text-navy-500 transition group-hover/v:bg-teal-50 group-hover/v:text-teal-700">
                            <IconoVertical nombre={v.icono} className="size-[18px]" />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-display text-[15px] leading-tight font-semibold text-navy-800 transition group-hover/v:text-teal-700">
                              {v.nombre}
                            </span>
                            <span className="mt-0.5 block text-[10.5px] leading-tight tracking-[0.08em] text-navy-400 uppercase">
                              {v.nombreClinico}
                            </span>
                          </span>
                        </Link>
                        {SUBPAGINAS[v.clave] && (
                          <ul className="mt-1 mb-2 ml-[3.4rem] border-l border-navy-100 pl-3">
                            {SUBPAGINAS[v.clave].map((sp) => (
                              <li key={sp.href}>
                                <Link
                                  href={sp.href}
                                  className="block rounded-md py-1 text-[13.5px] text-navy-500 transition hover:text-teal-700"
                                >
                                  {sp.nombre}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-navy-100 pt-4 text-sm text-navy-500">
                    Todos los tratamientos se realizan en nuestra clínica de
                    El Pueblito, Corregidora.{" "}
                    <Link
                      href="/contacto"
                      className="font-medium text-teal-700 underline underline-offset-2"
                    >
                      Ver ubicación
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Zonas */}
          <div className="group relative">
            <Link
              href={`/zonas/${ZONAS[0].slug}`}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium text-navy-700 transition hover:text-teal-700"
            >
              Zonas
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-3.5 text-navy-300 transition group-hover:text-teal-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <div className="invisible absolute top-full left-0 w-72 pt-1 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="rounded-2xl border border-navy-100 bg-white p-2 shadow-lg shadow-navy-900/5">
                {ZONAS.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zonas/${z.slug}`}
                      className="flex items-baseline justify-between gap-3 rounded-xl px-3 py-2 text-[15px] text-navy-600 transition hover:bg-navy-50 hover:text-navy-900"
                    >
                      {z.nombreCorto}
                      <span className="text-xs text-navy-300">
                        {z.sede ? "Aquí está la clínica" : z.traslado.tiempo}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {SIMPLES.filter((s) => s.href !== "/contacto").map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`rounded-lg px-3 py-2 text-[15px] font-medium transition ${
                pathname === s.href
                  ? "text-teal-700"
                  : "text-navy-700 hover:text-teal-700"
              }`}
            >
              {s.nombre}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={waLink("Hola, quiero agendar una valoración en iDent.")}
            target="_blank"
            rel="noopener noreferrer"
            data-evento="click_whatsapp"
            className="hidden rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600 sm:inline-flex"
          >
            Agendar valoración
          </a>
          <button
            type="button"
            onClick={() => setAbierto((x) => !x)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            className="grid size-11 place-items-center rounded-xl border border-navy-200 text-navy-700 lg:hidden"
          >
            <span className="sr-only">{abierto ? "Cerrar menú" : "Abrir menú"}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
              {abierto ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Navegación móvil ── */}
      {abierto && (
        <div
          id="menu-movil"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-navy-100 bg-white lg:hidden"
        >
          <nav aria-label="Principal móvil" className="px-4 py-4 sm:px-6">
            <details className="border-b border-navy-100 py-1" open>
              <summary className="flex items-center justify-between py-3 font-display text-lg font-semibold text-navy-800">
                Tratamientos
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-navy-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <ul className="pb-3">
                {VERTICALES_ORDENADAS.map((v) => (
                  <li key={v.clave} className="py-1">
                    <Link
                      href={`/${v.slug}`}
                      onClick={cerrar}
                      className="block py-1.5"
                    >
                      <span className="block text-[15px] font-medium text-navy-800">
                        {v.nombre}
                      </span>
                      <span className="block text-[11px] tracking-wide text-navy-400 uppercase">
                        {v.nombreClinico}
                      </span>
                    </Link>
                    {SUBPAGINAS[v.clave] && (
                      <ul className="mt-0.5 space-y-0.5 pl-4">
                        {SUBPAGINAS[v.clave].map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={cerrar}
                              className="block py-1 text-sm text-navy-500"
                            >
                              {s.nombre}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </details>

            <details className="border-b border-navy-100 py-1">
              <summary className="flex items-center justify-between py-3 font-display text-lg font-semibold text-navy-800">
                Zonas
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-navy-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <ul className="pb-3">
                {ZONAS.map((z) => (
                  <li key={z.slug}>
                    <Link
                      href={`/zonas/${z.slug}`}
                      onClick={cerrar}
                      className="block py-2 text-[15px] text-navy-600"
                    >
                      {z.nombreCorto}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            {SIMPLES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={cerrar}
                className="block border-b border-navy-100 py-4 font-display text-lg font-semibold text-navy-800 last:border-0"
              >
                {s.nombre}
              </Link>
            ))}

            <a
              href={waLink("Hola, quiero agendar una valoración en iDent.")}
              target="_blank"
              rel="noopener noreferrer"
              data-evento="click_whatsapp"
              className="mt-3 flex items-center justify-center rounded-full bg-teal-500 px-6 py-3.5 font-semibold text-white"
            >
              Agendar valoración
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
