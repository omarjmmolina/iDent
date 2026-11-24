import type { ReactNode } from "react";

/**
 * Iconos de las verticales de servicio.
 *
 * Son trazos sueltos, sin <svg>: quien los usa decide el tamaño y el
 * grosor. Así el mismo icono sirve en la tarjeta grande de la portada y
 * en la línea del menú.
 */
export const TRAZOS: Record<string, ReactNode> = {
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
    <path d="M8.5 3.5c-2.4 0-4 1.9-4 4.4 0 3.2 1.2 5.3 1.8 8 .4 1.8.6 4.1 2 4.1 1.6 0 1.5-3.3 3.7-3.3s2.1 3.3 3.7 3.3c1.4 0 1.6-2.3 2-4.1.6-2.7 1.8-4.8 1.8-8 0-2.5-1.6-4.4-4-4.4-1.8 0-2.6.9-3.5.9s-1.7-.9-3.5-.9Z" />
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
  implante: (
    <>
      <path d="M12 3.5c-1.9 0-3.3 1.2-3.3 2.8 0 1 .5 1.7 1.3 2.2h4c.8-.5 1.3-1.2 1.3-2.2 0-1.6-1.4-2.8-3.3-2.8Z" />
      <path d="M10 8.5h4l-.5 12a1.5 1.5 0 0 1-3 0l-.5-12Z" />
      <path d="M9.6 11.5h4.8M9.8 14.5h4.4M10 17.5h4" />
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

export function IconoVertical({
  nombre,
  className = "size-5",
}: {
  nombre: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {TRAZOS[nombre]}
    </svg>
  );
}
