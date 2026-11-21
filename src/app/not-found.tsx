import Link from "next/link";
import { Container, BotonWhatsApp } from "@/components/ui";

export const metadata = {
  title: "Página no encontrada | iDent",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl text-center">
        <p className="font-display text-sm font-bold tracking-[0.16em] text-teal-600 uppercase">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-navy-800 sm:text-5xl">
          Esta página no existe
        </h1>
        <p className="mt-5 text-lg text-navy-600">
          Puede que el enlace esté mal escrito o que la página haya cambiado
          de dirección. Si buscabas algo en concreto, escríbenos y te
          orientamos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BotonWhatsApp mensaje="Hola, estaba en el sitio web y no encontré lo que buscaba." />
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-navy-200 px-6 py-3.5 font-semibold text-navy-700 transition hover:bg-navy-50"
          >
            Volver al inicio
          </Link>
        </div>
      </Container>
    </section>
  );
}
