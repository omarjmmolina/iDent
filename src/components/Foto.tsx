import Image from "next/image";
import type { Foto as FotoTipo } from "@/content/servicios";
import type { ImagenStock } from "@/content/imagenes";

const RATIOS: Record<FotoTipo["ratio"], string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

/**
 * Hueco de fotografía con tres estados:
 *
 * 1. Foto real de la clínica → se muestra sin más.
 * 2. Sin foto real pero con imagen de stock → se muestra la de stock con
 *    el pie "Imagen ilustrativa", para no hacer pasar una foto de banco
 *    por una foto de la clínica.
 * 3. Sin ninguna de las dos → marcador con el brief de la toma y la ruta
 *    del archivo. Es lo que queda en equipo, casos y fachada, donde una
 *    imagen de stock sería engañosa.
 */
export function Foto({
  foto,
  archivo,
  stock,
  className = "",
  priority = false,
}: {
  foto: FotoTipo;
  /** Nombre sugerido del archivo, p. ej. "brackets-metalicos" */
  archivo: string;
  /** Imagen de stock que se usa mientras no haya foto real. */
  stock?: ImagenStock;
  className?: string;
  priority?: boolean;
}) {
  const ratio = RATIOS[foto.ratio];
  const src = foto.src ?? stock?.src ?? null;
  const ilustrativa = !foto.src && Boolean(stock);
  const alt = foto.src ? foto.alt : (stock?.alt ?? foto.alt);

  if (src) {
    return (
      <figure className={className}>
        <div
          className={`relative ${ratio} overflow-hidden rounded-3xl bg-navy-100`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        {ilustrativa && (
          <figcaption
            className="mt-2 text-xs text-navy-400"
            data-foto-pendiente={archivo}
          >
            Imagen ilustrativa
          </figcaption>
        )}
      </figure>
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
          <span className="text-[11px] font-semibold tracking-[0.14em] text-teal-700 uppercase">
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
