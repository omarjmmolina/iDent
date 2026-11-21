import { buildMetadata } from "@/lib/seo";
import { Container, Migas } from "@/components/ui";
import { CLINICA, direccionUnaLinea } from "@/content/clinica";

export const metadata = buildMetadata({
  title: "Aviso de privacidad | iDent Clínica Dental",
  description:
    "Aviso de privacidad de iDent Clínica Dental, Corregidora, Querétaro, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  path: "/aviso-de-privacidad",
});

/**
 * ⚠️ REVISIÓN LEGAL PENDIENTE. Este texto es una base conforme a la LFPDPPP
 * y hay que completarlo con los datos reales de la clínica (responsable,
 * domicilio fiscal, correo del departamento de datos personales) y
 * validarlo con quien lleve el tema legal antes de publicar.
 */
export default function Page() {
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Aviso de privacidad", path: "/aviso-de-privacidad" },
  ];

  const secciones = [
    {
      h2: "Responsable del tratamiento de datos personales",
      p: [
        `${CLINICA.nombreLegal}, con domicilio en ${direccionUnaLinea}, es responsable del tratamiento de los datos personales que usted proporcione.`,
      ],
    },
    {
      h2: "Datos personales que recabamos",
      p: [
        "Para prestarle atención odontológica podemos recabar: nombre completo, teléfono, correo electrónico, fecha de nacimiento, domicilio y datos de facturación.",
        "Para fines de diagnóstico y tratamiento recabamos datos personales sensibles relativos a su estado de salud: antecedentes médicos, padecimientos, medicamentos, alergias, radiografías y fotografías clínicas. El tratamiento de estos datos requiere su consentimiento expreso, que se recaba por escrito en la clínica.",
      ],
    },
    {
      h2: "Finalidades del tratamiento",
      p: [
        "Finalidades primarias, necesarias para la relación con usted: brindar atención odontológica, elaborar y resguardar su expediente clínico, dar seguimiento a su tratamiento, agendar y confirmar citas, emitir comprobantes fiscales y cumplir obligaciones legales en materia de salud.",
        "Finalidades secundarias, que usted puede rechazar sin que afecte su atención: enviarle recordatorios de higiene y revisión, informarle de promociones y utilizar fotografías clínicas con fines de difusión. El uso de imágenes con fines de difusión requiere siempre una autorización específica y por escrito.",
      ],
    },
    {
      h2: "Uso de este sitio web",
      p: [
        "Este sitio no cuenta con formularios que almacenen información en nuestros servidores. El formulario de contacto compone un mensaje y lo abre en WhatsApp desde su propio dispositivo: usted decide si lo envía. A partir de ese momento, la conversación se rige también por las políticas de privacidad de WhatsApp.",
        "Utilizamos herramientas de medición de tráfico que recogen información estadística y agregada sobre el uso del sitio, sin identificarle personalmente.",
      ],
    },
    {
      h2: "Transferencia de datos",
      p: [
        "No transferimos sus datos personales a terceros sin su consentimiento, salvo en los supuestos previstos en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, como requerimientos de autoridad competente.",
      ],
    },
    {
      h2: "Derechos ARCO",
      p: [
        "Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales, así como a revocar el consentimiento otorgado. Para ejercer cualquiera de estos derechos puede presentar su solicitud en el domicilio de la clínica o escribirnos al correo de contacto.",
        "La solicitud debe incluir su nombre, un medio para comunicarle la respuesta, los documentos que acrediten su identidad y la descripción clara de los datos sobre los que desea ejercer el derecho.",
      ],
    },
    {
      h2: "Conservación del expediente clínico",
      p: [
        "El expediente clínico se conserva por el plazo que establece la normativa sanitaria aplicable, contado a partir de la última atención.",
      ],
    },
    {
      h2: "Cambios al aviso de privacidad",
      p: [
        "Cualquier modificación a este aviso se publicará en esta misma página, indicando la fecha de la última actualización.",
      ],
    },
  ];

  return (
    <>
      <section className="bg-sand-50 pt-6 pb-12">
        <Container className="max-w-3xl">
          <Migas items={migas} />
          <h1 className="mt-8 text-3xl font-bold text-navy-800 sm:text-4xl">
            Aviso de privacidad
          </h1>
          <p className="mt-4 text-navy-500">
            Última actualización: noviembre de 2026
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <p className="rounded-2xl border border-dashed border-navy-300 bg-navy-50 px-5 py-4 font-mono text-xs leading-relaxed text-navy-500">
            Pendiente: revisión legal y datos del responsable antes de
            publicar (src/app/aviso-de-privacidad/page.tsx).
          </p>
          {secciones.map((s) => (
            <section key={s.h2} className="mt-10">
              <h2 className="text-xl font-bold text-navy-800 sm:text-2xl">
                {s.h2}
              </h2>
              {s.p.map((t) => (
                <p key={t.slice(0, 40)} className="mt-4 leading-relaxed text-navy-600">
                  {t}
                </p>
              ))}
            </section>
          ))}
        </Container>
      </section>
    </>
  );
}
