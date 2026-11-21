import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { FormularioContacto } from "@/components/FormularioContacto";
import { Container, Eyebrow, Migas, BotonTelefono } from "@/components/ui";
import { CLINICA, direccionUnaLinea } from "@/content/clinica";
import { Resenas } from "@/components/Resenas";
import { MapaClinica } from "@/components/MapaClinica";

export const metadata = buildMetadata({
  title: "Contacto | Clínica dental iDent en Corregidora, Querétaro",
  description:
    "Dirección, teléfono, WhatsApp y horarios de la clínica dental iDent en Plaza El Jacal, El Pueblito, Corregidora, Querétaro. Agenda tu cita hoy.",
  path: "/contacto",
});

export default function Page() {
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Contacto", path: "/contacto" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(migas)} />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-20">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Contacto</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.06] font-bold text-navy-800 sm:text-5xl">
              Agenda tu cita en iDent
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              La vía más rápida es WhatsApp: contestamos en minutos en horario
              de clínica. Si prefieres hablar, también puedes llamarnos.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                Escríbenos
              </h2>
              <p className="mt-3 text-navy-600">
                Llena estos campos y te preparamos el mensaje. Entre más nos
                digas, mejor te podemos orientar antes de que vengas.
              </p>
              <div className="mt-8">
                <FormularioContacto />
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-3xl bg-sand-100 p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-navy-800">
                  La clínica
                </h2>
                <address className="mt-4 leading-relaxed text-navy-600 not-italic">
                  {direccionUnaLinea}
                </address>
                <div className="mt-5">
                  <BotonTelefono />
                </div>
                {CLINICA.googleMapsUrl ? (
                  <a
                    href={CLINICA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-teal-700 underline underline-offset-4"
                  >
                    Cómo llegar en Google Maps →
                  </a>
                ) : (
                  <p className="mt-4 rounded-xl border border-dashed border-navy-300 bg-white px-4 py-3 font-mono text-xs text-navy-500">
                    Pendiente: enlace de Google Maps en
                    CLINICA.googleMapsUrl
                  </p>
                )}
              </div>

              <div className="rounded-3xl border border-navy-100 p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-navy-800">
                  Horarios
                </h2>
                <ul className="mt-4 space-y-2.5 text-navy-600">
                  {CLINICA.horarios.map((h) => (
                    <li key={h.dias} className="flex justify-between gap-4">
                      <span>{h.dias}</span>
                      <span className="font-medium text-navy-800">
                        {h.abre ? `${h.abre} – ${h.cierra}` : "Cerrado"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <MapaClinica />
            </aside>
          </div>
        </Container>
      </section>

      <Resenas fondo="sand" />
    </>
  );
}
