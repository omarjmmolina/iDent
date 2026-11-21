import type { ReactNode } from "react";
import type { Bloque } from "@/content/blog";
import { CtaArticulo } from "@/components/CtaArticulo";

function Viñeta() {
  return (
    <span
      aria-hidden="true"
      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-500"
    />
  );
}

/** Dibuja un bloque suelto del cuerpo del artículo. */
function bloqueJsx(b: Bloque, clave: string): ReactNode {
  switch (b.tipo) {
    case "h2":
      return (
        <h2
          key={clave}
          className="mt-10 mb-4 scroll-mt-28 text-2xl font-bold text-navy-800 sm:text-3xl"
        >
          {b.texto}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={clave}
          className="mt-7 mb-3 font-display text-xl font-semibold text-navy-800"
        >
          {b.texto}
        </h3>
      );

    case "lista":
      return (
        <ul key={clave} className="my-5 space-y-3">
          {b.items.map((li) => (
            <li
              key={li}
              className="flex gap-3 text-lg leading-relaxed text-navy-600"
            >
              <Viñeta />
              <span>{li}</span>
            </li>
          ))}
        </ul>
      );

    case "pasos":
      return (
        <ol key={clave} className="my-6 space-y-5 border-l border-navy-100 pl-6">
          {b.items.map((li, n) => (
            <li key={li} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-[1.95rem] grid size-6 place-items-center rounded-full bg-teal-500 text-[11px] font-bold text-white"
              >
                {n + 1}
              </span>
              <span className="block text-lg leading-relaxed text-navy-600">
                {li}
              </span>
            </li>
          ))}
        </ol>
      );

    case "tabla":
      return (
        <div
          key={clave}
          className="my-7 overflow-x-auto rounded-2xl border border-navy-100"
        >
          <table className="w-full text-left">
            <thead className="bg-sand-100">
              <tr>
                {b.encabezados.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="px-4 py-3 text-sm font-semibold text-navy-800"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              {b.filas.map((fila) => (
                <tr key={fila.join("|")}>
                  {fila.map((celda, c) => (
                    <td
                      key={c}
                      className={`px-4 py-3 text-[15px] ${
                        c === 0 ? "font-medium text-navy-800" : "text-navy-600"
                      }`}
                    >
                      {celda}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "nota":
      return (
        <aside
          key={clave}
          className="my-8 rounded-3xl bg-teal-50 px-6 py-5 text-lg leading-relaxed text-navy-700"
        >
          {b.texto}
        </aside>
      );

    case "alerta":
      return (
        <aside
          key={clave}
          className="my-8 flex gap-4 rounded-3xl border border-amber-200 bg-amber-50 px-6 py-5"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="mt-0.5 size-6 shrink-0 text-amber-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
            />
          </svg>
          <p className="text-lg leading-relaxed text-navy-700">{b.texto}</p>
        </aside>
      );

    default:
      return (
        <p key={clave} className="mt-4 text-lg leading-relaxed text-navy-600">
          {b.texto}
        </p>
      );
  }
}

/**
 * Cuerpo del artículo con tres llamados a la acción repartidos.
 *
 * Los CTA se colocan solos: se calcula dónde cae un tercio y dos tercios
 * de los apartados y se insertan justo antes de ese encabezado, para no
 * partir una sección por la mitad. El tercero cierra el artículo. Así no
 * hay que marcarlos a mano en cada uno de los 40 artículos y nunca caen
 * dos seguidos.
 */
export function CuerpoArticulo({
  bloques,
  titulo,
  servicio,
}: {
  bloques: Bloque[];
  titulo: string;
  servicio?: string;
}) {
  const indicesH2 = bloques
    .map((b, i) => (b.tipo === "h2" ? i : -1))
    .filter((i) => i >= 0);

  const cortes = new Map<number, 1 | 2>();
  if (indicesH2.length >= 4) {
    const primero = indicesH2[Math.max(1, Math.round(indicesH2.length * 0.34))];
    const segundo = indicesH2[Math.round(indicesH2.length * 0.7)];
    cortes.set(primero, 1);
    if (segundo !== primero) cortes.set(segundo, 2);
  } else if (indicesH2.length >= 2) {
    cortes.set(indicesH2[indicesH2.length - 1], 1);
  }

  return (
    <>
      {bloques.map((b, i) => {
        const variante = cortes.get(i);
        if (!variante) return bloqueJsx(b, `b-${i}`);
        return (
          <div key={`g-${i}`}>
            <CtaArticulo
              variante={variante}
              servicio={servicio}
              titulo={titulo}
            />
            {bloqueJsx(b, `b-${i}`)}
          </div>
        );
      })}
      <CtaArticulo variante={3} servicio={servicio} titulo={titulo} />
    </>
  );
}
