import { buildMetadata } from "@/lib/seo";
import { PaginaPilar } from "@/components/PaginaPilar";
import { PILARES } from "@/content/servicios";

const p = PILARES.ortodoncia;

export const metadata = buildMetadata({
  title: p.titulo,
  description: p.metaDescription,
  path: `/${p.slug}`,
});

export default function Page() {
  return (
    <PaginaPilar
      pilar="ortodoncia"
      foto={{
        archivo: "ortodoncia-queretaro",
        alt: "Tratamiento de ortodoncia en la clínica iDent de Corregidora, Querétaro",
        brief:
          "Paciente en la silla durante un ajuste de ortodoncia, con el doctor trabajando. Horizontal. Transmite tratamiento en curso, no catálogo.",
      }}
      cierre={{
        h2: "Qué pasa en la valoración de ortodoncia",
        parrafos: [
          "Tomamos radiografía panorámica y fotografías intraorales, revisamos la mordida y medimos el espacio real que hay en cada arcada. Con eso se define qué sistemas sirven para tu caso: no todos funcionan en todas las bocas, y decirlo antes evita tratamientos que se atoran a los ocho meses.",
          "Sales de esa cita con un plan por escrito: qué tratamiento, cuánto tiempo, cuántas citas y cuánto cuesta en total. Si quieres compararlo con otra clínica, llévatelo. Preferimos que decidas con el documento en la mano.",
        ],
      }}
      faqs={[
        {
          q: "¿Cuánto cuesta una ortodoncia en Querétaro?",
          a: "Depende del sistema y de la complejidad del caso. El rango va desde los brackets metálicos, que son la opción más accesible, hasta los alineadores invisibles, que son la más alta. En la valoración te damos las cifras de los sistemas que sirven para tu boca, no una lista genérica.",
        },
        {
          q: "¿Cuánto dura un tratamiento de ortodoncia?",
          a: "Entre doce y veintiséis meses según el caso y el sistema. Los casos de alineación leve con alineadores pueden cerrarse en un año; una mordida que requiere corrección esquelética se va a dos años o más.",
        },
        {
          q: "¿Soy demasiado grande para usar ortodoncia?",
          a: "No. El hueso se remodela a cualquier edad, así que el movimiento dental funciona igual a los cuarenta que a los quince. Lo que cambia es que en adultos hay que revisar antes el estado de las encías y el hueso de soporte.",
        },
        {
          q: "¿Tengo que usar retenedores después?",
          a: "Sí, y no es opcional. Los dientes tienden a volver a su posición original durante los primeros años. El retenedor es lo que sostiene dos años de tratamiento: sin él, el caso recae.",
        },
        {
          q: "¿Puedo empezar si tengo caries o problemas de encías?",
          a: "Primero se resuelve eso. Mover dientes sobre una encía inflamada o con caries activa empeora las dos cosas. Si hace falta, coordinamos el tratamiento previo y después arrancamos la ortodoncia.",
        },
        {
          q: "¿Cada cuánto tengo que ir a cita?",
          a: "Con brackets, cada cuatro semanas. Con alineadores invisibles, cada seis a ocho semanas. Si vienes de Juriquilla, Zibatá o San Juan del Río, lo tomamos en cuenta al planear el tratamiento.",
        },
      ]}
    />
  );
}
