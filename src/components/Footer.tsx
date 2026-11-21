import Link from "next/link";
import Image from "next/image";
import { CLINICA, direccionUnaLinea, telLink } from "@/content/clinica";
import { PILARES, serviciosDe } from "@/content/servicios";
import { ZONAS } from "@/content/zonas";

export function Footer() {
  const orto = serviciosDe("ortodoncia");
  const endo = serviciosDe("endodoncia");

  return (
    <footer className="mt-auto bg-navy-800 text-navy-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-ident.jpg"
              alt="iDent, clínica dental en Corregidora, Querétaro"
              width={56}
              height={56}
              className="rounded-xl"
            />
            <p className="mt-4 text-sm leading-relaxed text-navy-200">
              {CLINICA.descripcionCorta}
            </p>
            <p className="mt-4 font-display text-base text-teal-300">
              {CLINICA.tagline}
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Ortodoncia
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href={`/${PILARES.ortodoncia.slug}`} className="text-teal-300 transition hover:text-teal-200">
                  Ortodoncia en Querétaro
                </Link>
              </li>
              {orto.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${PILARES.ortodoncia.slug}/${s.slug}`}
                    className="text-navy-200 transition hover:text-white"
                  >
                    {s.nombre}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Endodoncia
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href={`/${PILARES.endodoncia.slug}`} className="text-teal-300 transition hover:text-teal-200">
                  Endodoncia en Querétaro
                </Link>
              </li>
              {endo.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${PILARES.endodoncia.slug}/${s.slug}`}
                    className="text-navy-200 transition hover:text-white"
                  >
                    {s.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              De dónde vienen
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-navy-300">
              Clínica única en El Pueblito, Corregidora.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {ZONAS.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zonas/${z.slug}`}
                    className="text-navy-200 transition hover:text-white"
                  >
                    {z.nombreCorto}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Clínica
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/precios" className="text-navy-200 transition hover:text-white">Precios</Link></li>
              <li><Link href="/casos" className="text-navy-200 transition hover:text-white">Casos</Link></li>
              <li><Link href="/equipo" className="text-navy-200 transition hover:text-white">Equipo</Link></li>
              <li><Link href="/blog" className="text-navy-200 transition hover:text-white">Blog</Link></li>
              <li><Link href="/contacto" className="text-navy-200 transition hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Contacto
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p className="leading-relaxed text-navy-200">{direccionUnaLinea}</p>
              <p>
                <a href={telLink} data-evento="click_telefono" className="font-semibold text-white transition hover:text-teal-300">
                  {CLINICA.telefonoVisible}
                </a>
              </p>
            </address>
            <h3 className="mt-6 text-xs font-semibold tracking-[0.12em] text-navy-300 uppercase">
              Horarios
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-navy-200">
              {CLINICA.horarios.map((h) => (
                <li key={h.dias} className="flex justify-between gap-4">
                  <span>{h.dias}</span>
                  <span className="text-navy-300">
                    {h.abre ? `${h.abre}–${h.cierra}` : "Cerrado"}
                  </span>
                </li>
              ))}
            </ul>
            {CLINICA.redes.facebook && (
              <a
                href={CLINICA.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-navy-200 transition hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
                  <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
                </svg>
                Facebook
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CLINICA.nombreLegal}. Todos los
            derechos reservados.
          </p>
          <Link href="/aviso-de-privacidad" className="transition hover:text-white">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
