export type QuickAccessItem = {
  label: string;
  href: "#packs" | "#servicios" | "#resultados" | "#cobertura";
  image: string;
  imagePosition?: string;
  trackingEvent:
    | "pack_click"
    | "service_click"
    | "gallery_click"
    | "coverage_click";
};

export const heroContent = {
  eyebrow: "Detailing automotriz · El Monte",
  title: "Detailing",
  titleAccent: "de nivel superior",
  description:
    "Detailing, corrección y protección profesional para interior y exterior",
  primaryCta: "Cotizar por WhatsApp",
  whatsappMessage:
    "Hola, quiero cotizar un servicio de detailing. Mi vehículo es [marca/modelo] y estoy en [comuna].",
} as const;

export const quickAccessItems: QuickAccessItem[] = [
  {
    label: "Packs",
    href: "#packs",
    image: "/gallery/resultado-05.jpeg",
    imagePosition: "center",
    trackingEvent: "pack_click",
  },
  {
    label: "Servicios",
    href: "#servicios",
    image: "/images/services/services-bg.jpg",
    imagePosition: "center",
    trackingEvent: "service_click",
  },
  {
    label: "Galería",
    href: "#resultados",
    image: "/gallery/resultado-03.jpeg",
    imagePosition: "center 38%",
    trackingEvent: "gallery_click",
  },
  {
    label: "Cobertura",
    href: "#cobertura",
    image: "/gallery/coverage-bg.png",
    imagePosition: "center 46%",
    trackingEvent: "coverage_click",
  },
];
