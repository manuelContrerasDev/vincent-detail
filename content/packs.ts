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
    summary: "Base completa de limpieza interior y exterior.",
    accent: "bronce",
    highlights: ["Base inicial", "Interior + exterior", "Mantención general"],
  },
  {
    name: "Pack Plata",
    slug: "plata",
    image: "/images/packs/pack-plata.jpeg",
    summary: "Suma descontaminado exterior y corrección de 1 paso.",
    accent: "plata",
    highlights: ["Descontaminado", "Corrección 1 paso", "Más terminación"],
  },
  {
    name: "Pack Oro",
    slug: "oro",
    image: "/images/packs/pack-oro.jpeg",
    summary: "Incorpora pulido profundo y tratamiento cerámico de 2 años.",
    accent: "oro",
    highlights: ["Pulido profundo", "Cerámico 2 años", "Mayor protección"],
  },
  {
    name: "Pack Diamante",
    slug: "diamante",
    image: "/images/packs/pack-diamante.jpeg",
    summary: "Nivel más alto con grafeno de 3 años y protección avanzada.",
    accent: "diamante",
    highlights: ["Grafeno 3 años", "Máxima protección", "Nivel superior"],
  },
];