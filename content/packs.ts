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
    summary: "Mantención completa para recuperar limpieza y presentación general.",
    accent: "bronce",
    highlights: [
      "Limpieza interior y exterior",
      "Base inicial de cuidado",
      "Presentación visual renovada",
    ],
  },
  {
    name: "Pack Plata",
    slug: "plata",
    image: "/images/packs/pack-plata.jpeg",
    summary: "Suma descontaminado exterior y una corrección ligera para mejorar terminación.",
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
    summary: "Pensado para elevar brillo, corrección y protección con un resultado más profundo.",
    accent: "oro",
    highlights: [
      "Pulido profundo",
      "Tratamiento cerámico 2 años",
      "Mayor nivel de protección",
    ],
  },
  {
    name: "Pack Diamante",
    slug: "diamante",
    image: "/images/packs/pack-diamante.jpeg",
    summary: "La opción más completa para máxima terminación, protección y presencia visual.",
    accent: "diamante",
    highlights: [
      "Grafeno de 3 años",
      "Protección avanzada",
      "Nivel superior de acabado",
    ],
  },
];