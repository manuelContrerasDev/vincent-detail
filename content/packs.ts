export type PackAccent = "bronce" | "plata" | "oro" | "diamante";

export type PackItem = {
  name: string;
  slug: string;
  image: string;
  summary: string;
  accent: PackAccent;
  highlights: string[];
};

export const packs: PackItem[] = [
  {
    name: "Pack Bronce",
    slug: "bronce",
    image: "/images/packs/pack-bronce.jpeg",
    summary:
      "Pulido abrillantado en 1 paso y protección sintética de hasta 6 meses.",
    accent: "bronce",
    highlights: [
      "Encerado hidrofóbico",
      "Detailing interior full",
      "Limpieza de tapiz tela/cuero",
      "Presentación visual renovada",
    ],
  },
  {
    name: "Pack Plata",
    slug: "plata",
    image: "/images/packs/pack-plata.jpeg",
    summary:
      "Incluye descontaminado exterior y una corrección ligera para mejorar brillo y terminación.",
    accent: "plata",
    highlights: [
      "Descontaminado exterior",
      "Corrección de 1 paso",
      "Más limpieza visual y brillo",
    ],
  },
  {
    name: "Pack Oro",
    slug: "oro",
    image: "/images/packs/pack-oro.jpeg",
    summary:
      "Pack completo con protección cerámica, tratamiento de plásticos interiores y exteriores, vidrios y coating cerámico de carrocería.",
    accent: "oro",
    highlights: [
      "Pulido profundo de 2 pasos",
      "Tratamiento cerámico 2 años - 3D",
      "Nivel avanzado de protección",
    ],
  },
  {
    name: "Pack Diamante",
    slug: "diamante",
    image: "/images/packs/pack-diamante.jpeg",
    summary:
      "Tratamiento cerámico con grafeno que incorpora todo lo incluido en el Pack Oro.",
    accent: "diamante",
    highlights: [
      "Grafeno de 3 años",
      "Protección superior",
      "Nivel superior de acabado",
    ],
  },
];