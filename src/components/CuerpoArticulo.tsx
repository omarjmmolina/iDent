import type { Bloque } from "@/content/blog";

/** Renderiza el cuerpo de un artículo del blog. */
export function CuerpoArticulo({ bloques }: { bloques: Bloque[] }) {
  return (
    <>
      {bloques.map((b, i) => {
        switch (b.tipo) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 mb-4 text-2xl font-bold text-navy-800 sm:text-3xl"
              >
                {b.texto}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-7 mb-3 font-display text-xl font-semibold text-navy-800"
              >
                {b.texto}
              </h3>
            );
          case "lista":
            return (
              <ul key={i} className="my-5 space-y-3">
                {b.items.map((li) => (
                  <li
                    key={li}
                    className="flex gap-3 text-lg leading-relaxed text-navy-600"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-500"
                    />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            );
          case "pasos":
            return (
              <ol key={i} className="my-6 space-y-4">
                {b.items.map((li, n) => (
                  <li key={li} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-7 shrink-0 place-items-center rounded-full bg-teal-500 text-xs font-bold text-white"
                    >
                      {n + 1}
                    </span>
                    <span className="text-lg leading-relaxed text-navy-600">
                      {li}
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "tabla":
            return (
              <div
                key={i}
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
                              c === 0
                                ? "font-medium text-navy-800"
                                : "text-navy-600"
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
                key={i}
                className="my-8 rounded-3xl bg-teal-50 px-6 py-5 text-lg leading-relaxed text-navy-700"
              >
                {b.texto}
              </aside>
            );
          case "alerta":
            return (
              <aside
                key={i}
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
              <p key={i} className="mt-4 text-lg leading-relaxed text-navy-600">
                {b.texto}
              </p>
            );
        }
      })}
    </>
  );
}
