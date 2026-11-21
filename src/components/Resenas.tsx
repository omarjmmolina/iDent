import { Container, Eyebrow } from "@/components/ui";
import { Carrusel } from "@/components/Carrusel";
import {
  FUENTES_RESENAS,
  FUENTE_PRINCIPAL,
  RESENAS,
  DESTACADOS_GOOGLE,
} from "@/content/resenas";
import { CLINICA } from "@/content/clinica";

function Estrellas({ valor, claro }: { valor: number; claro?: boolean }) {
  return (
    <span
      className="inline-flex gap-0.5"
      role="img"
      aria-label={`${valor} de 5 estrellas`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`size-4 ${
            i <= Math.round(valor)
              ? "text-amber-400"
              : claro
                ? "text-white/20"
                : "text-navy-200"
          }`}
          fill="currentColor"
        >
          <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

function fechaLarga(iso: string) {
  return new Date(iso).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Carrusel de reseñas reales de la ficha de Google.
 *
 * Las reseñas están en el HTML como citas normales: el carrusel solo
 * cambia cómo se recorren. Cada cifra enlaza a la ficha para que se pueda
 * comprobar.
 */
export function Resenas({
  fondo = "sand",
  compacto = false,
}: {
  fondo?: "sand" | "blanco" | "navy";
  compacto?: boolean;
}) {
  const oscuro = fondo === "navy";
  const bg =
    fondo === "navy" ? "bg-navy-800" : fondo === "sand" ? "bg-sand-50" : "bg-white";
  const titulo = oscuro ? "text-white" : "text-navy-800";
  const texto = oscuro ? "text-navy-100" : "text-navy-600";
  const tenue = oscuro ? "text-navy-300" : "text-navy-400";
  const tarjeta = oscuro ? "bg-white/5" : "bg-white";
  const borde = oscuro ? "border-white/10" : "border-navy-100";

  return (
    <section className={`${bg} py-14 sm:py-20`} aria-labelledby="resenas-titulo">
      <Container>
        <div className="reveal grid gap-8 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-start lg:gap-14">
          {/* Resumen */}
          <div>
            <Eyebrow>Lo que dicen los pacientes</Eyebrow>
            <h2
              id="resenas-titulo"
              className={`mt-3 text-3xl font-bold sm:text-4xl ${titulo}`}
            >
              {CLINICA.resenas.calificacion} sobre 5 en Google
            </h2>

            <div className={`mt-6 rounded-3xl border ${borde} ${tarjeta} p-6`}>
              <div className="flex items-baseline gap-3">
                <p className={`font-display text-5xl font-bold ${titulo}`}>
                  {FUENTE_PRINCIPAL.calificacion}
                </p>
                <div>
                  <Estrellas
                    valor={FUENTE_PRINCIPAL.calificacion ?? 5}
                    claro={oscuro}
                  />
                  <p className={`mt-1 text-sm ${tenue}`}>
                    {FUENTE_PRINCIPAL.total} opiniones
                  </p>
                </div>
              </div>

              <p className={`mt-4 text-sm leading-relaxed ${texto}`}>
                Calificación de la ficha de{" "}
                <a
                  href={FUENTE_PRINCIPAL.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium underline underline-offset-2"
                >
                  {CLINICA.nombreLegal} en Google Maps
                </a>
                , consultada el{" "}
                <time dateTime={FUENTE_PRINCIPAL.consultado}>
                  {fechaLarga(FUENTE_PRINCIPAL.consultado)}
                </time>
                .
              </p>

              <a
                href={CLINICA.googleReviewUrl || FUENTE_PRINCIPAL.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  oscuro
                    ? "bg-white text-navy-800 hover:bg-navy-50"
                    : "bg-navy-700 text-white hover:bg-navy-800"
                }`}
              >
                Ver las {FUENTE_PRINCIPAL.total} opiniones
              </a>
            </div>

            {!compacto && (
              <div className={`mt-5 text-sm ${tenue}`}>
                <p className="font-medium">También aparecemos en</p>
                <ul className="mt-2 space-y-1.5">
                  {FUENTES_RESENAS.filter((f) => !f.principal && f.url).map(
                    (f) => (
                      <li key={f.id}>
                        <a
                          href={f.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="underline underline-offset-2"
                        >
                          {f.nombre}
                        </a>
                        {f.calificacion !== null && (
                          <span> · {f.calificacion} ★</span>
                        )}
                        {f.total !== null && <span> · {f.total}</span>}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Carrusel de reseñas */}
          <Carrusel etiqueta="Reseñas de pacientes en Google">
            {RESENAS.map((r) => (
              <li key={r.autor} className="w-[19rem] sm:w-[23rem]">
                <figure
                  className={`tarjeta-hover flex h-full flex-col rounded-3xl border ${borde} ${tarjeta} p-6 sm:p-7`}
                >
                  <Estrellas valor={r.estrellas} claro={oscuro} />
                  <blockquote
                    className={`mt-4 flex-1 leading-relaxed ${texto}`}
                  >
                    «{r.texto}»
                    {r.recortada && (
                      <span className={`mt-2 block text-xs ${tenue}`}>
                        Reseña recortada por Google en la vista pública.
                      </span>
                    )}
                  </blockquote>
                  <figcaption className={`mt-5 border-t pt-4 ${borde}`}>
                    <p className={`font-display font-semibold ${titulo}`}>
                      {r.autor}
                    </p>
                    <p className={`mt-0.5 text-xs ${tenue}`}>
                      {r.credencial ? `${r.credencial} · ` : ""}
                      {r.fecha} · en Google
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}

            {DESTACADOS_GOOGLE.map((frase) => (
              <li key={frase} className="w-[19rem] sm:w-[23rem]">
                <figure
                  className={`tarjeta-hover flex h-full flex-col justify-between rounded-3xl border border-dashed ${oscuro ? "border-white/20" : "border-navy-200"} p-6 sm:p-7`}
                >
                  <blockquote
                    className={`font-display text-xl leading-snug ${titulo}`}
                  >
                    «{frase}»
                  </blockquote>
                  <figcaption className={`mt-5 text-xs ${tenue}`}>
                    Frase destacada por Google en el resumen de opiniones de
                    la ficha
                  </figcaption>
                </figure>
              </li>
            ))}
          </Carrusel>
        </div>
      </Container>
    </section>
  );
}
