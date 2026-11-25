import Script from "next/script";

/**
 * Google Tag Manager — contenedor de la clínica.
 *
 * ⚠️ El código que mandó el cliente era el snippet de **gtag.js** con un
 * ID de GTM metido dentro. Carga el contenedor, pero no empuja el evento
 * `gtm.js` al dataLayer, que es lo que dispara los activadores de
 * «Todas las páginas», y le falta el `<noscript>`. Aquí va el snippet
 * oficial de GTM, que sí hace las dos cosas.
 *
 * Solo se carga en builds de producción: en `npm run dev` no, para no
 * ensuciar los informes con nuestras propias pruebas.
 *
 * Los CTA del sitio ya llevan `data-evento` (`click_telefono`,
 * `click_whatsapp`), así que desde GTM se pueden medir sin tocar código.
 */

export const GTM_ID = "GTM-TWT59HQN";

const ACTIVO = process.env.NODE_ENV === "production";

export function GoogleTagManager() {
  if (!ACTIVO) return null;

  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

/** Va justo después de abrir <body>, para navegadores sin JavaScript. */
export function GoogleTagManagerNoScript() {
  if (!ACTIVO) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
