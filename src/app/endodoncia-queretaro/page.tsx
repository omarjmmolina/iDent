import { buildMetadata } from "@/lib/seo";
import { PaginaPilar } from "@/components/PaginaPilar";
import { PILARES } from "@/content/servicios";

const p = PILARES.endodoncia;

export const metadata = buildMetadata({
  title: p.titulo,
  description: p.metaDescription,
  path: `/${p.slug}`,
});

export default function Page() {
  return (
    <PaginaPilar
      pilar="endodoncia"
      foto={{
        archivo: "endodoncia-queretaro",
        alt: "Tratamiento de endodoncia en la clínica iDent de Corregidora, Querétaro",
        brief:
          "Consultorio con el equipo de endodoncia preparado y aislamiento con dique de goma. Horizontal. Transmite precisión y asepsia.",
      }}
      cierre={{
        h2: "Por qué insistimos en conservar el diente",
        parrafos: [
          "Cuando una pieza duele mucho, la salida rápida parece ser sacarla. Pero una extracción abre una cadena: el hueso de esa zona empieza a reabsorberse, los dientes vecinos se inclinan hacia el hueco y el antagonista se extruye. Un año después, el problema ya no es un diente, son tres.",
          "Una endodoncia bien hecha, con su corona colocada a tiempo, cuesta una fracción de lo que cuesta un implante y conserva tu propio diente. Por eso la extracción solo entra cuando ya no hay estructura que salvar, y cuando llega ese momento te lo decimos con la radiografía enfrente.",
        ],
      }}
      faqs={[
        {
          q: "¿Cuánto cuesta una endodoncia en Querétaro?",
          a: "Varía según la pieza: un incisivo tiene un conducto y un molar puede tener cuatro, así que el tiempo clínico no es el mismo. Mándanos por WhatsApp una foto y, si la tienes, la radiografía, y te damos el rango antes de que vengas.",
        },
        {
          q: "¿Duele la endodoncia?",
          a: "Durante el procedimiento no: se trabaja con anestesia y no se empieza hasta que la zona está dormida por completo. Lo que duele es el diente antes de tratarlo. Después hay molestia al morder dos o tres días.",
        },
        {
          q: "¿En cuántas citas se resuelve?",
          a: "La mayoría en una sola sesión de sesenta a noventa minutos. Se pasa a dos cuando hay infección activa con pus y conviene dejar medicación dentro del conducto unos días.",
        },
        {
          q: "¿Necesito corona después del tratamiento de conductos?",
          a: "En molares y premolares, sí. El diente queda frágil y una fractura vertical ya no tiene arreglo. Te lo decimos desde el primer día con el costo incluido, no tres semanas después.",
        },
        {
          q: "¿Pueden atenderme hoy si tengo dolor?",
          a: "Reservamos espacios de urgencia cada día. Escribe por WhatsApp contando qué te pasa y te confirmamos en minutos.",
        },
        {
          q: "¿Qué pasa si me dejo el diente así?",
          a: "La infección no se detiene sola: avanza hacia el hueso y forma un absceso. En el camino, el diente se vuelve irrecuperable y lo que era una endodoncia pasa a ser una extracción más un implante.",
        },
      ]}
    />
  );
}
