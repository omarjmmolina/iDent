"use client";

import { useState } from "react";
import { waLink } from "@/content/clinica";
import { SERVICIOS, PILARES } from "@/content/servicios";
import { ZONAS } from "@/content/zonas";

/**
 * Formulario sin backend: compone un mensaje y lo abre en WhatsApp.
 *
 * Es deliberado. Un formulario que manda correo añade un servidor, un
 * dominio de envío y un buzón que alguien tiene que revisar. En dental, el
 * paciente espera respuesta en minutos y el canal que ya usa la clínica es
 * WhatsApp. Esto llega al mismo lugar y no se puede caer.
 */
export function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [zona, setZona] = useState("");
  const [motivo, setMotivo] = useState("");
  const [detalle, setDetalle] = useState("");

  const mensaje = [
    `Hola, soy ${nombre || "[tu nombre]"}.`,
    motivo ? `Me interesa: ${motivo}.` : null,
    zona ? `Vengo desde ${zona}.` : null,
    detalle ? `Comentarios: ${detalle}` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(mensaje), "_blank", "noopener,noreferrer");
      }}
    >
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-navy-700">
          Tu nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-800 placeholder:text-navy-300"
          placeholder="Nombre y apellido"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="motivo" className="block text-sm font-medium text-navy-700">
            ¿Qué necesitas?
          </label>
          <select
            id="motivo"
            name="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-800"
          >
            <option value="">Selecciona una opción</option>
            <option value="Valoración general">Valoración general</option>
            <option value="Urgencia por dolor">Urgencia por dolor</option>
            {SERVICIOS.map((s) => (
              <option key={s.slug} value={`${s.nombre} (${PILARES[s.pilar].nombre})`}>
                {s.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="zona" className="block text-sm font-medium text-navy-700">
            ¿Desde dónde vienes?
          </label>
          <select
            id="zona"
            name="zona"
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-800"
          >
            <option value="">Selecciona una zona</option>
            {ZONAS.map((z) => (
              <option key={z.slug} value={z.nombreCorto}>
                {z.nombreCorto}
              </option>
            ))}
            <option value="Otra zona de Querétaro">Otra zona</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="detalle" className="block text-sm font-medium text-navy-700">
          Cuéntanos un poco más <span className="text-navy-400">(opcional)</span>
        </label>
        <textarea
          id="detalle"
          name="detalle"
          rows={4}
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
          className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-800 placeholder:text-navy-300"
          placeholder="Desde cuándo te duele, si ya te tomaron radiografía, qué horarios te quedan mejor…"
        />
      </div>

      <button
        type="submit"
        data-evento="click_whatsapp"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-teal-600 sm:w-auto"
      >
        Enviar por WhatsApp
      </button>

      <p className="text-xs leading-relaxed text-navy-400">
        Al enviar se abre WhatsApp con el mensaje ya escrito; tú decides si
        lo mandas. No guardamos nada en este sitio. Consulta el{" "}
        <a href="/aviso-de-privacidad" className="underline underline-offset-2">
          aviso de privacidad
        </a>
        .
      </p>
    </form>
  );
}
