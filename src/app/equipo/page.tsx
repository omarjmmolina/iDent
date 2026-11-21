import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Foto } from "@/components/Foto";
import { Container, Eyebrow, CtaFinal, Migas } from "@/components/ui";
import { CLINICA } from "@/content/clinica";
import { STOCK } from "@/content/imagenes";
import { Resenas } from "@/components/Resenas";

export const metadata = buildMetadata({
  title: "Equipo | Ortodoncistas y endodoncistas en Corregidora | iDent",
  description:
    "Conoce al equipo de la clínica dental iDent en El Pueblito, Corregidora: especialistas en ortodoncia y endodoncia para pacientes de todo Querétaro.",
  path: "/equipo",
});

/**
 * ⚠️ PENDIENTE DEL CLIENTE: nombres, cédulas profesionales, universidad y
 * especialidad de cada integrante. Los textos de abajo son estructura, no
 * información verificada: NO publicar sin confirmarlos uno por uno.
 * Una cédula profesional incorrecta en un sitio de salud es un problema
 * serio, no una errata.
 */
const EQUIPO = [
  {
    id: "doctor-titular",
    nombre: "Nombre del doctor titular", // TODO
    puesto: "Director clínico", // TODO
    cedula: "Cédula profesional pendiente", // TODO
    formacion: "Universidad y especialidad pendientes", // TODO
    bio: "Párrafo pendiente: formación, años de práctica, en qué tipo de casos se ha especializado y qué le importa de la relación con el paciente.", // TODO
  },
  {
    id: "ortodoncista",
    nombre: "Nombre del ortodoncista", // TODO
    puesto: "Ortodoncia y ortopedia maxilar", // TODO
    cedula: "Cédula de especialidad pendiente", // TODO
    formacion: "Universidad y especialidad pendientes", // TODO
    bio: "Párrafo pendiente: enfoque en ortodoncia de adulto o infantil, sistemas que maneja y casos en los que tiene más recorrido.", // TODO
  },
  {
    id: "endodoncista",
    nombre: "Nombre del endodoncista", // TODO
    puesto: "Endodoncia y urgencias", // TODO
    cedula: "Cédula de especialidad pendiente", // TODO
    formacion: "Universidad y especialidad pendientes", // TODO
    bio: "Párrafo pendiente: formación en endodoncia, uso de magnificación o microscopio, retratamientos y manejo de urgencias.", // TODO
  },
];

export default function Page() {
  const migas = [
    { nombre: "Inicio", path: "/" },
    { nombre: "Equipo", path: "/equipo" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(migas)} />

      <section className="bg-sand-50 pt-6 pb-14 sm:pb-20">
        <Container>
          <Migas items={migas} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Quién te atiende</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.06] font-bold text-navy-800 sm:text-5xl">
              El equipo de iDent
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              En salud, saber quién te va a tratar importa tanto como el
              tratamiento. Aquí está la formación de cada integrante del
              equipo y en qué se especializa.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <ul className="reveal-grupo grid gap-10 lg:grid-cols-3">
            {EQUIPO.map((m) => (
              <li key={m.id}>
                <article>
                  <Foto
                    archivo={m.id}
                    foto={{
                      src: null,
                      ratio: "3/4",
                      alt: `${m.puesto} de la clínica dental iDent en Corregidora, Querétaro`,
                      brief:
                        "Retrato vertical con bata, fondo liso o el consultorio desenfocado. Mirada a cámara. Misma luz y mismo encuadre para los tres.",
                    }}
                  />
                  <h2 className="mt-5 font-display text-xl font-bold text-navy-800">
                    {m.nombre}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-teal-700">
                    {m.puesto}
                  </p>
                  <p className="mt-3 leading-relaxed text-navy-600">{m.bio}</p>
                  <dl className="mt-4 space-y-1 text-sm text-navy-400">
                    <div>
                      <dt className="inline font-medium">Formación: </dt>
                      <dd className="inline">{m.formacion}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium">Cédula: </dt>
                      <dd className="inline">{m.cedula}</dd>
                    </div>
                  </dl>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy-800 py-14 text-white sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            La clínica
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-100">
            {CLINICA.nombre} está en Plaza El Jacal, en El Pueblito,
            Corregidora. Trabajamos dos especialidades: ortodoncia y
            endodoncia. Esa es una decisión deliberada: preferimos hacer dos
            cosas bien que ofrecer un catálogo completo.
          </p>
          <div className="mt-8">
            <Foto
              archivo="consultorio-ident"
              stock={STOCK.consultorio}
              foto={{
                src: null,
                ratio: "16/9",
                alt: "Consultorio de la clínica dental iDent en El Pueblito, Corregidora",
                brief:
                  "Interior del consultorio, ordenado y con luz. Horizontal. Es la foto que responde a la pregunta silenciosa de '¿a dónde voy a entrar?'.",
              }}
            />
          </div>
        </Container>
      </section>

      <Resenas fondo="sand" />

      <CtaFinal mensaje="Hola, quiero agendar una valoración en iDent." />
    </>
  );
}
