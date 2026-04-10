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
    summary: "Pulido abrillantado en 1 paso, protección sintética de 6 meses",
    accent: "bronce",
    highlights: [
      "Encerado Hidrofobico",
      "Detailing interior full",
      "Limpieza de tapiz tela/cuero",
      "Presentación visual renovada",
    ],
  },
  {
    name: "Pack Plata",
    slug: "plata",
    image: "/images/packs/pack-plata.jpeg",
    summary: "Añade descontaminado exterior y una corrección ligera para mejorar terminación.",
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
    summary: "Pack completo de protección cerámica y plásticos interiores/exteriores, vidrios y coating cerámico de carroceria",
    accent: "oro",
    highlights: [
      "Pulido profundo de 2 pasos",
      "Tratamiento cerámico 2 años - 3d",
      "Nivel avanzado de protección",
    ],
  },
  {
    name: "Pack Diamante",
    slug: "diamante",
    image: "/images/packs/pack-diamante.jpeg",
    summary: "Tratamiento cerámico con Grafeno, incluye la proteción oro.",
    accent: "diamante",
    highlights: [
      "Grafeno de 3 años",
      "Protección superior",
      "Nivel superior de acabado",
    ],
  },
];