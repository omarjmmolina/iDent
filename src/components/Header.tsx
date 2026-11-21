"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CLINICA, waLink } from "@/content/clinica";
import { PILARES, serviciosDe } from "@/content/servicios";
import { ZONAS } from "@/content/zonas";

const orto = serviciosDe("ortodoncia");
const endo = serviciosDe("endodoncia");

const MENUS = [
  {
    titulo: "Ortodoncia",
    href: `/${PILARES.ortodoncia.slug}`,
    hijos: orto.map((s) => ({
      nombre: s.navNombre,
      href: `/${PILARES.ortodoncia.slug}/${s.slug}`,
    })),
  },
  {
    titulo: "Endodoncia",
    href: `/${PILARES.endodoncia.slug}`,
    hijos: endo.map((s) => ({
      nombre: s.navNombre,
      href: `/${PILARES.endodoncia.slug}/${s.slug}`,
    })),
  },
  {
    titulo: "Zonas",
    href: `/zonas/${ZONAS[0].slug}`,
    hijos: ZONAS.map((z) => ({
      nombre: z.nombreCorto,
      href: `/zonas/${z.slug}`,
    })),
  },
];

const SIMPLES = [
  { nombre: "Precios", href: "/precios" },
  { nombre: "Casos", href: "/casos" },
  { nombre: "Equipo", href: "/equipo" },
  { nombre: "Blog", href: "/blog" },
];

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const pathname = usePathname();

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

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="ml-2 hidden items-center lg:flex">
          {MENUS.map((m) => (
            <div key={m.titulo} className="group relative">
              <Link
                href={m.href}
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition ${
                  pathname.startsWith(m.href.split("/").slice(0, 2).join("/"))
                    ? "text-teal-700"
                    : "text-navy-700 hover:text-teal-700"
                }`}
              >
                {m.titulo}
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
              <div className="invisible absolute top-full left-0 w-64 pt-1 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="rounded-2xl border border-navy-100 bg-white p-2 shadow-lg shadow-navy-900/5">
                  {m.hijos.map((h) => (
                    <li key={h.href}>
                      <Link
                        href={h.href}
                        className="block rounded-xl px-3 py-2 text-[15px] text-navy-600 transition hover:bg-navy-50 hover:text-navy-900"
                      >
                        {h.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {SIMPLES.map((s) => (
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
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            className="grid size-11 place-items-center rounded-xl border border-navy-200 text-navy-700 lg:hidden"
          >
            <span className="sr-only">
              {abierto ? "Cerrar menú" : "Abrir menú"}
            </span>
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

      {/* Navegación móvil */}
      {abierto && (
        <div
          id="menu-movil"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-navy-100 bg-white lg:hidden"
        >
          <nav aria-label="Principal móvil" className="px-4 py-4 sm:px-6">
            {MENUS.map((m) => (
              <details key={m.titulo} className="border-b border-navy-100 py-1">
                <summary className="flex items-center justify-between py-3 font-display text-lg font-semibold text-navy-800">
                  {m.titulo}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-navy-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <ul className="pb-3">
                  <li>
                    <Link
                      href={m.href}
                      onClick={() => setAbierto(false)}
                      className="block py-2 text-[15px] font-medium text-teal-700"
                    >
                      Ver todo {m.titulo.toLowerCase()}
                    </Link>
                  </li>
                  {m.hijos.map((h) => (
                    <li key={h.href}>
                      <Link
                        href={h.href}
                        onClick={() => setAbierto(false)}
                        className="block py-2 text-[15px] text-navy-600"
                      >
                        {h.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            {SIMPLES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setAbierto(false)}
                className="block border-b border-navy-100 py-4 font-display text-lg font-semibold text-navy-800"
              >
                {s.nombre}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setAbierto(false)}
              className="block py-4 font-display text-lg font-semibold text-navy-800"
            >
              Contacto
            </Link>
            <a
              href={waLink("Hola, quiero agendar una valoración en iDent.")}
              target="_blank"
              rel="noopener noreferrer"
              data-evento="click_whatsapp"
              className="mt-2 flex items-center justify-center rounded-full bg-teal-500 px-6 py-3.5 font-semibold text-white"
            >
              Agendar valoración
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
