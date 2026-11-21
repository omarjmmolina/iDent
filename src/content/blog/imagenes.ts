/**
 * Imagen destacada de cada artículo.
 *
 * Son imágenes de stock de Unsplash (licencia comercial libre, sin
 * atribución obligatoria). Varias reutilizan las de los tratamientos
 * cuando el tema es el mismo: no tiene sentido tener dos fotos distintas
 * de lo mismo pesando el doble.
 *
 * El texto alternativo describe lo que se ve e incluye la palabra clave
 * donde resulta natural. No se mete la keyword a la fuerza: un alt
 * forzado no posiciona y estorba a quien usa lector de pantalla.
 */

export type ImagenArticulo = { src: string; alt: string };

const b = (slug: string, alt: string): ImagenArticulo => ({
  src: `/img/blog/${slug}.webp`,
  alt,
});
const s = (archivo: string, alt: string): ImagenArticulo => ({
  src: `/img/stock/${archivo}.webp`,
  alt,
});

export const IMAGENES_BLOG: Record<string, ImagenArticulo> = {
  // ── Precios ──
  "cuanto-cuesta-una-endodoncia-en-queretaro": b(
    "cuanto-cuesta-una-endodoncia-en-queretaro",
    "Radiografía panorámica dental, el estudio con el que se calcula el costo de una endodoncia",
  ),
  "cuanto-cuesta-la-ortodoncia-en-queretaro": b(
    "cuanto-cuesta-la-ortodoncia-en-queretaro",
    "Odontólogo explicando una radiografía a una paciente durante la valoración de ortodoncia",
  ),
  "cuanto-cuestan-los-brackets-en-queretaro": b(
    "cuanto-cuestan-los-brackets-en-queretaro",
    "Modelo dental con brackets metálicos colocados en ambas arcadas",
  ),
  "cuanto-cuestan-los-alineadores-invisibles-en-queretaro": b(
    "cuanto-cuestan-los-alineadores-invisibles-en-queretaro",
    "Alineadores invisibles con su estuche de guardado",
  ),
  "cuanto-cuesta-una-corona-dental-en-queretaro": b(
    "cuanto-cuesta-una-corona-dental-en-queretaro",
    "Modelos dentales que muestran la estructura de un diente restaurado",
  ),
  "precio-de-la-ortodoncia-infantil-en-queretaro": s(
    "ortodoncia-infantil",
    "Odontólogo revisando los dientes de un niño en una valoración de ortodoncia infantil",
  ),
  "ortodoncia-a-meses-sin-intereses-en-queretaro": b(
    "ortodoncia-a-meses-sin-intereses-en-queretaro",
    "Pago con tarjeta en una terminal, como se liquidan los tratamientos a meses sin intereses",
  ),
  "por-que-varia-tanto-el-precio-entre-dentistas": b(
    "por-que-varia-tanto-el-precio-entre-dentistas",
    "Persona comparando presupuestos con una tarjeta en la mano frente a una laptop",
  ),

  // ── Comparativas ──
  "brackets-o-alineadores-invisibles": b(
    "brackets-o-alineadores-invisibles",
    "Paciente colocándose un alineador invisible, la alternativa a los brackets",
  ),
  "brackets-metalicos-o-esteticos": s(
    "brackets-esteticos",
    "Primer plano de una sonrisa con brackets, para comparar metálicos y estéticos",
  ),
  "brackets-de-ceramica-o-zafiro": b(
    "brackets-de-ceramica-o-zafiro",
    "Asistente dental mostrando un modelo a una paciente en el consultorio",
  ),
  "endodoncia-o-extraccion-e-implante": b(
    "endodoncia-o-extraccion-e-implante",
    "Modelo dental con un implante, la alternativa a conservar el diente con endodoncia",
  ),
  "ortodoncia-con-o-sin-extracciones": b(
    "ortodoncia-con-o-sin-extracciones",
    "Radiografía dental en un monitor, con la que se mide el espacio disponible en la arcada",
  ),
  "retenedor-fijo-o-removible": b(
    "retenedor-fijo-o-removible",
    "Paciente colocándose un retenedor removible después de la ortodoncia",
  ),
  "ortodoncista-o-dentista-general-para-brackets": s(
    "ortodoncia",
    "Odontólogo conversando con una paciente en una consulta dental",
  ),
  "clinica-cerca-o-especialista-lejos": b(
    "clinica-cerca-o-especialista-lejos",
    "Sala de espera de una clínica dental",
  ),

  // ── Dolor y miedo ──
  "duele-poner-brackets": b(
    "duele-poner-brackets",
    "Sonrisa de una paciente después de la colocación de brackets",
  ),
  "duele-la-endodoncia": b(
    "duele-la-endodoncia",
    "Odontólogo realizando un tratamiento a un paciente con anestesia",
  ),
  "miedo-al-dentista-que-hacer": b(
    "miedo-al-dentista-que-hacer",
    "Profesional de la salud conversando de forma cercana con una paciente",
  ),
  "cuanto-dura-el-dolor-despues-de-una-endodoncia": s(
    "urgencia-dolor-dental",
    "Persona con gesto de molestia llevándose la mano a la mandíbula",
  ),
  "me-duele-la-muela-que-hago-mientras-llego": b(
    "me-duele-la-muela-que-hago-mientras-llego",
    "Mujer con dolor de muela cubriéndose la boca con la mano",
  ),

  // ── Tiempos ──
  "cuanto-dura-un-tratamiento-de-ortodoncia": b(
    "cuanto-dura-un-tratamiento-de-ortodoncia",
    "Agenda mensual abierta, para planear los meses que dura una ortodoncia",
  ),
  "cuanto-tarda-una-endodoncia": b(
    "cuanto-tarda-una-endodoncia",
    "Reloj despertador junto a un calendario",
  ),
  "ortodoncia-en-6-meses-es-real": b(
    "ortodoncia-en-6-meses-es-real",
    "Calendario con una fecha marcada en rojo",
  ),
  "cuanto-tardan-en-moverse-los-dientes": b(
    "cuanto-tardan-en-moverse-los-dientes",
    "Odontólogo revisando radiografías dentales en un negatoscopio",
  ),

  // ── Cuidados ──
  "como-limpiar-los-brackets": b(
    "como-limpiar-los-brackets",
    "Cepillos de dientes en un vaso, parte de la higiene diaria con brackets",
  ),
  "que-no-comer-con-brackets": b(
    "que-no-comer-con-brackets",
    "Persona mordiendo una manzana, uno de los alimentos que hay que cortar si traes brackets",
  ),
  "cuidados-despues-de-una-endodoncia": s(
    "tratamiento-de-conductos",
    "Revisión dental con espejo e instrumental tras un tratamiento de conductos",
  ),
  "como-limpiar-los-alineadores-invisibles": s(
    "alineadores-invisibles",
    "Alineador invisible transparente antes de colocarlo",
  ),
  "se-me-despego-un-bracket-que-hago": s(
    "brackets-metalicos",
    "Modelo dental con brackets metálicos y su arco",
  ),
  "cuanto-tiempo-hay-que-usar-retenedores": b(
    "cuanto-tiempo-hay-que-usar-retenedores",
    "Sonrisa alineada después de terminar un tratamiento de ortodoncia",
  ),

  // ── Niños ──
  "a-que-edad-llevar-a-mi-hijo-al-ortodoncista": s(
    "ortopedia-maxilar",
    "Niño sonriendo en el sillón dental antes de su primera valoración de ortodoncia",
  ),
  "mi-hijo-se-chupa-el-dedo-consecuencias": b(
    "mi-hijo-se-chupa-el-dedo-consecuencias",
    "Revisión dental infantil en el consultorio",
  ),
  "mi-hijo-respira-por-la-boca": b(
    "mi-hijo-respira-por-la-boca",
    "Niña durmiendo en su cama, momento en el que se detecta la respiración bucal",
  ),
  "perdida-prematura-de-dientes-de-leche": s(
    "ortodoncia-infantil",
    "Odontólogo revisando la dentadura de un niño en recambio dental",
  ),

  // ── Señales de alerta ──
  "senales-de-que-necesitas-endodoncia": s(
    "endodoncia",
    "Odontólogo revisando radiografías para diagnosticar si hace falta una endodoncia",
  ),
  "diente-oscuro-despues-de-un-golpe": b(
    "diente-oscuro-despues-de-un-golpe",
    "Primer plano de los dientes anteriores, donde se nota un cambio de color tras un golpe",
  ),
  "absceso-dental-que-hacer": b(
    "absceso-dental-que-hacer",
    "Persona con dolor e inflamación en la zona de la mandíbula",
  ),
  "se-me-cayo-una-corona-que-hago": s(
    "retratamiento",
    "Modelo que muestra el interior de un diente y la zona donde asienta la corona",
  ),
  "por-que-se-mueven-los-dientes-en-adultos": b(
    "por-que-se-mueven-los-dientes-en-adultos",
    "Primer plano de dientes y encías, donde se valora la movilidad dental",
  ),
};

/** Imagen de respaldo si algún artículo se queda sin mapear. */
export const IMAGEN_POR_DEFECTO: ImagenArticulo = {
  src: "/img/stock/consultorio.webp",
  alt: "Consultorio de la clínica dental iDent en Corregidora, Querétaro",
};

export const imagenDe = (slug: string): ImagenArticulo =>
  IMAGENES_BLOG[slug] ?? IMAGEN_POR_DEFECTO;
