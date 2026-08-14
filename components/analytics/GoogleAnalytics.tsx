import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/*
        La cola se crea apenas React hidrata. Así, trackEvent() puede guardar
        eventos incluso antes de descargar gtag.js.
      */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          window.gtag = window.gtag || function gtag() {
            window.dataLayer.push(arguments);
          };

          window.gtag('js', new Date());

          window.gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            page_title: document.title,
            page_location: window.location.href
          });
        `}
      </Script>

      {/*
        El bundle pesado de Google Analytics queda fuera de la ruta crítica.
        Next lo solicita después del evento load y durante tiempo ocioso.
      */}
      <Script
        id="ga4-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
    </>
  );
}
