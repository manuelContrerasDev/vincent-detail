import { siteConfig } from "@/content/site";

const siteUrl = "https://vincentdetail.cl";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteConfig.name,
    alternateName: "Vincent Detail",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    logo: `${siteUrl}/icon.png`,
    description:
      "Servicio de detailing automotriz en El Monte, Talagante, Buin, Isla de Maipo, Melipilla y alrededores.",
    telephone: `+${siteConfig.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "11 de Octubre 248",
      addressLocality: "El Monte",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    areaServed: [
      "El Monte",
      "Talagante",
      "Buin",
      "Isla de Maipo",
      "Melipilla",
      "Champa",
      "Rancagua",
      "Región Metropolitana",
    ],
    sameAs: [siteConfig.instagramUrl, siteConfig.tiktokUrl],
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Detailing automotriz",
          serviceType: "Detailing automotriz",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lavado premium",
          serviceType: "Lavado premium",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Limpieza interior",
          serviceType: "Limpieza interior automotriz",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pulido automotriz",
          serviceType: "Pulido automotriz",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tratamiento cerámico",
          serviceType: "Tratamiento cerámico automotriz",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}