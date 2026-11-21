import Link from "next/link";
import { Container } from "@/components/ui";
import { CLINICA } from "@/content/clinica";
import { MSI_MESES } from "@/content/precios";

/**
 * Banda de validadores: las cuatro razones por las que alguien que acaba
 * de llegar decide seguir leyendo.
 *
 * ⚠️ Los meses sin intereses se anuncian aquí por indicación del cliente.
 * El número de plazos sale de MSI_MESES en src/content/precios.ts y está
 * PENDIENTE DE CONFIRMAR con la clínica. Mientras no se confirme, el
 * texto habla de meses sin intereses sin prometer un plazo concreto.
 */

const MOSTRAR_PLAZO = false; // ponlo en true cuando MSI_MESES esté confirmado

export function Validadores({
  fondo = "navy",
}: {
  fondo?: "navy" | "blanco";
}) {
  const oscuro = fondo === "navy";

  const items = [
    {
      titulo: "Meses sin intereses",
      detalle: MOSTRAR_PLAZO
        ? `Hasta ${MSI_MESES} pagos con tarjeta`
        : "Y mensualidades que caen con cada cita",
      icono: (
        <>
          <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
          <path d="M2.5 10h19" />
        </>
      ),
      href: "/precios",
    },
    {
      titulo: `${CLINICA.resenas.calificacion} ★ en Google`,
      detalle: `${CLINICA.resenas.total} opiniones de pacientes`,
      icono: (
        <path d="m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.2-5.4-2.9-5.4 2.9 1-6.2-4.4-4.3 6.1-.9L12 3.5Z" />
      ),
      href: CLINICA.googleMapsUrl,
      externo: true,
    },
    {
      titulo: "Urgencias el mismo día",
      detalle: "Guardamos espacios de dolor cada día",
      icono: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      ),
      href: "/endodoncia-queretaro/urgencia-dolor-dental",
    },
    {
      titulo: "Costo cerrado por escrito",
      detalle: "Lo que se cotiza es lo que se cobra",
      icono: (
        <>
          <path d="M6 3.5h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
          <path d="m9 13.5 2 2 4-4" />
        </>
      ),
      href: "/precios",
    },
  ];

  return (
    <section
      aria-label="Por qué elegir iDent"
      className={oscuro ? "bg-navy-800" : "border-y border-navy-100 bg-white"}
    >
      <Container className="py-8 sm:py-10">
        <ul className="reveal-grupo grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const contenido = (
              <>
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                    oscuro ? "bg-teal-500/15 text-teal-300" : "bg-teal-50 text-teal-600"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-5"
                  >
                    {item.icono}
                  </svg>
                </span>
                <span>
                  <span
                    className={`block font-display text-[15px] leading-tight font-semibold ${
                      oscuro ? "text-white" : "text-navy-800"
                    }`}
                  >
                    {item.titulo}
                  </span>
                  <span
                    className={`mt-1 block text-sm leading-snug ${
                      oscuro ? "text-navy-300" : "text-navy-500"
                    }`}
                  >
                    {item.detalle}
                  </span>
                </span>
              </>
            );

            return (
              <li key={item.titulo}>
                {item.externo ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-start gap-3 transition hover:opacity-80"
                  >
                    {contenido}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-start gap-3 transition hover:opacity-80"
                  >
                    {contenido}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
