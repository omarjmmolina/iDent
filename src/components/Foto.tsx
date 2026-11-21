import Image from "next/image";
import type { Foto as FotoTipo } from "@/content/servicios";

const RATIOS: Record<FotoTipo["ratio"], string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

/**
 * Hueco de fotografía.
 *
 * Mientras `foto.src` sea null muestra un marcador con el brief de la toma
 * y la ruta exacta donde hay que dejar el archivo. En cuanto la clínica
 * mande el material, se pone la ruta en el contenido y el marcador
 * desaparece: no hay que tocar las páginas.
 */
export function Foto({
  foto,
  archivo,
  className = "",
  priority = false,
}: {
  foto: FotoTipo;
  /** Nombre sugerido del archivo, p. ej. "brackets-metalicos" */
  archivo: string;
  className?: string;
  priority?: boolean;
}) {
  const ratio = RATIOS[foto.ratio];

  if (foto.src) {
    return (
      <div
        className={`relative ${ratio} overflow-hidden rounded-3xl bg-navy-100 ${className}`}
      >
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <figure
      className={`relative ${ratio} overflow-hidden rounded-3xl border-2 border-dashed border-navy-300 bg-navy-50 ${className}`}
      data-foto-pendiente={archivo}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="size-5 shrink-0 text-teal-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.2a1.5 1.5 0 0 0 1.27-.7l.63-1a1.5 1.5 0 0 1 1.27-.7h4.26a1.5 1.5 0 0 1 1.27.7l.63 1a1.5 1.5 0 0 0 1.27.7h1.2A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-8Z"
            />
            <circle cx="12" cy="12.5" r="3.25" />
          </svg>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700">
            Foto pendiente
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-sm leading-snug font-medium text-navy-700 sm:text-base">
            {foto.brief}
          </p>
          <p className="font-mono text-[11px] break-all text-navy-400">
            public/img/{archivo}.webp
          </p>
        </div>
      </div>
    </figure>
  );
}
