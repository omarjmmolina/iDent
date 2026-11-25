import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import { clinicaSchema } from "@/lib/schema";
import {
  CLINICA,
  SITE_URL,
  DOMINIO_DEFINITIVO,
  waLink,
  telLink,
} from "@/content/clinica";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CLINICA.nombre} · Ortodoncia y endodoncia en Corregidora, Querétaro`,
    template: `%s`,
  },
  description: CLINICA.descripcionCorta,
  applicationName: CLINICA.nombre,
  authors: [{ name: CLINICA.nombreLegal }],
  formatDetection: { telephone: true },
  robots: DOMINIO_DEFINITIVO
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport = {
  themeColor: "#1F3159",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        <JsonLd data={clinicaSchema()} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-navy-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />

        {/* Barra fija de contacto en móvil: el 70% del tráfico dental es móvil */}
        <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-navy-100 bg-white/95 p-2.5 backdrop-blur sm:hidden">
          <a
            href={telLink}
            data-evento="click_telefono"
            className="flex items-center justify-center gap-2 rounded-full border border-navy-200 py-3 text-sm font-semibold text-navy-700"
          >
            Llamar
          </a>
          <a
            href={waLink("Hola, quiero agendar una cita en iDent.")}
            target="_blank"
            rel="noopener noreferrer"
            data-evento="click_whatsapp"
            className="flex items-center justify-center gap-2 rounded-full bg-teal-500 py-3 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
        <div aria-hidden="true" className="h-[68px] sm:hidden" />
      </body>
    </html>
  );
}
