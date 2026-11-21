"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Carrusel con scroll-snap nativo.
 *
 * Importante para SEO: los elementos son una lista normal en el HTML,
 * renderizada en el servidor. El JavaScript solo añade las flechas y el
 * indicador. Si no se ejecuta, el carrusel sigue funcionando a dedo o con
 * la rueda del ratón, y el contenido se indexa igual.
 */
export function Carrusel({
  children,
  etiqueta,
  className = "",
}: {
  children: ReactNode;
  /** Descripción para lectores de pantalla, p. ej. "Tratamientos" */
  etiqueta: string;
  className?: string;
}) {
  const pista = useRef<HTMLUListElement>(null);
  const [alInicio, setAlInicio] = useState(true);
  const [alFinal, setAlFinal] = useState(false);
  const [desborda, setDesborda] = useState(false);

  useEffect(() => {
    const el = pista.current;
    if (!el) return;

    const revisar = () => {
      const margen = 8;
      setAlInicio(el.scrollLeft <= margen);
      setAlFinal(el.scrollLeft + el.clientWidth >= el.scrollWidth - margen);
      setDesborda(el.scrollWidth > el.clientWidth + margen);
    };

    revisar();
    el.addEventListener("scroll", revisar, { passive: true });
    const ro = new ResizeObserver(revisar);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", revisar);
      ro.disconnect();
    };
  }, []);

  const mover = (direccion: 1 | -1) => {
    const el = pista.current;
    if (!el) return;
    el.scrollBy({ left: direccion * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <ul
        ref={pista}
        className="pista"
        aria-label={etiqueta}
        tabIndex={0}
      >
        {children}
      </ul>

      {desborda && (
        <div className="mt-6 hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => mover(-1)}
            disabled={alInicio}
            className="grid size-11 place-items-center rounded-full border border-navy-200 text-navy-700 transition hover:border-navy-400 hover:bg-navy-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <span className="sr-only">Anterior</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => mover(1)}
            disabled={alFinal}
            className="grid size-11 place-items-center rounded-full border border-navy-200 text-navy-700 transition hover:border-navy-400 hover:bg-navy-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <span className="sr-only">Siguiente</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <p className="ml-2 text-sm text-navy-400">Desliza para ver más</p>
        </div>
      )}
    </div>
  );
}
