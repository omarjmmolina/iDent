import { CLINICA, direccionUnaLinea } from "@/content/clinica";

/**
 * Mapa de la clínica.
 *
 * La clínica es UNA y está en El Pueblito, Corregidora. Este mapa es el
 * mismo en todas las páginas, también en las de zona: lo que cambia en
 * esas páginas es la ruta para llegar, no la ubicación.
 *
 * Usa el modo embed de Google Maps, que funciona dentro de un iframe sin
 * necesidad de API key. Va con loading="lazy" para no penalizar la carga.
 */
export function MapaClinica({
  alto = "aspect-[4/3]",
  className = "",
}: {
  /** Clase de proporción, p. ej. "aspect-[4/3]" o "aspect-[16/9]" */
  alto?: string;
  className?: string;
}) {
  const consulta = encodeURIComponent(
    `${CLINICA.nombreLegal}, ${CLINICA.direccion.calle}, ${CLINICA.direccion.cp} ${CLINICA.direccion.colonia}, ${CLINICA.direccion.municipio}, ${CLINICA.direccion.estado}`,
  );
  const src = `https://maps.google.com/maps?q=${consulta}&z=16&hl=es&output=embed`;

  return (
    <figure className={className}>
      <div
        className={`${alto} overflow-hidden rounded-3xl border border-navy-100 bg-navy-50`}
      >
        <iframe
          src={src}
          title={`Mapa de ${CLINICA.nombreLegal} en ${CLINICA.direccion.colonia}, ${CLINICA.direccion.municipio}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="size-full border-0"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-navy-500">
        {direccionUnaLinea}.{" "}
        {CLINICA.googleMapsUrl && (
          <a
            href={CLINICA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline underline-offset-2"
          >
            Abrir en Google Maps
          </a>
        )}
      </figcaption>
    </figure>
  );
}
