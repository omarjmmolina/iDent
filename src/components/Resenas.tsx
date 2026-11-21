import { Container, Eyebrow } from "@/components/ui";
import {
  FUENTES_RESENAS,
  FUENTE_PRINCIPAL,
  TESTIMONIOS,
  META_RESENAS,
} from "@/content/resenas";
import { CLINICA } from "@/content/clinica";

function Estrellas({ valor }: { valor: number }) {
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
          className={`size-4 ${i <= Math.round(valor) ? "text-amber-400" : "text-navy-200"}`}
          fill="currentColor"
        >
          <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Bloque de reseñas con las fuentes citadas.
 *
 * Va en todas las páginas del sitio. Cada cifra enlaza a dónde se consultó
 * y con qué fecha; las fuentes que no pudimos verificar se marcan como
 * tales en vez de omitirse.
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

  const citables = FUENTES_RESENAS.filter((f) => f.url);

  return (
    <section className={`${bg} py-14 sm:py-20`} aria-labelledby="resenas-titulo">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <Eyebrow>Lo que dicen los pacientes</Eyebrow>
            <h2
              id="resenas-titulo"
              className={`mt-3 text-3xl font-bold sm:text-4xl ${titulo}`}
            >
              Reseñas de iDent
            </h2>

            {FUENTE_PRINCIPAL.calificacion !== null && (
              <div className={`mt-6 rounded-3xl border ${borde} ${tarjeta} p-6`}>
                <div className="flex items-baseline gap-3">
                  <p className={`font-display text-5xl font-bold ${titulo}`}>
                    {FUENTE_PRINCIPAL.calificacion}
                  </p>
                  <div>
                    <Estrellas valor={FUENTE_PRINCIPAL.calificacion} />
                    <p className={`mt-1 text-sm ${tenue}`}>
                      {FUENTE_PRINCIPAL.total} valoraciones
                    </p>
                  </div>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${texto}`}>
                  Dato publicado por{" "}
                  <a
                    href={FUENTE_PRINCIPAL.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium underline underline-offset-2"
                  >
                    {FUENTE_PRINCIPAL.nombre}
                  </a>
                  , consultado el{" "}
                  <time dateTime={FUENTE_PRINCIPAL.consultado}>
                    {new Date(FUENTE_PRINCIPAL.consultado).toLocaleDateString(
                      "es-MX",
                      { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
                    )}
                  </time>
                  .
                </p>
              </div>
            )}

            {!compacto && (
              <p className={`mt-5 text-sm leading-relaxed ${tenue}`}>
                Nuestra meta es llegar a {META_RESENAS} reseñas verificadas en
                Google. Si ya te atendimos, dejarnos una es la forma más útil
                de ayudarnos.
              </p>
            )}
          </div>

          <div>
            {TESTIMONIOS.length > 0 && (
              <ul className="space-y-5">
                {TESTIMONIOS.map((t) => (
                  <li key={t.autor}>
                    <figure className={`rounded-3xl border ${borde} ${tarjeta} p-6 sm:p-7`}>
                      <Estrellas valor={t.estrellas} />
                      <blockquote className={`mt-4 text-lg leading-relaxed ${texto}`}>
                        «{t.texto}»
                      </blockquote>
                      <figcaption className={`mt-4 text-sm ${tenue}`}>
                        <span className={`font-semibold ${titulo}`}>{t.autor}</span>
                        {" · "}
                        <a
                          href={t.fuenteUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="underline underline-offset-2"
                        >
                          {t.fuente}
                        </a>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            )}

            {!compacto && (
              <div className={`mt-6 rounded-3xl border border-dashed ${oscuro ? "border-white/20" : "border-navy-200"} p-6`}>
                <h3 className={`font-display text-sm font-semibold tracking-[0.12em] uppercase ${oscuro ? "text-teal-300" : "text-teal-700"}`}>
                  Dónde consultamos estas cifras
                </h3>
                <ul className={`mt-4 space-y-3 text-sm ${texto}`}>
                  {citables.map((f) => (
                    <li key={f.id} className="flex flex-wrap items-baseline gap-x-2">
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="font-medium underline underline-offset-2"
                      >
                        {f.nombre}
                      </a>
                      {f.calificacion !== null && (
                        <span className={tenue}>
                          {f.calificacion} ★
                          {f.total !== null ? ` · ${f.total} valoraciones` : ""}
                        </span>
                      )}
                      {f.calificacion === null && f.total !== null && (
                        <span className={tenue}>{f.total} opinión</span>
                      )}
                      {f.nota && (
                        <span className={`basis-full text-xs ${tenue}`}>
                          {f.nota}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className={`mt-4 text-xs leading-relaxed ${tenue}`}>
                  Son directorios independientes. La valoración que cuenta es
                  la de la ficha de {CLINICA.nombre} en Google Maps, y ahí es
                  donde publicamos el enlace para dejar reseña en cuanto esté
                  disponible.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
