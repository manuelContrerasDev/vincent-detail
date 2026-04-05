export type ServiceItem = {
  title: string;
  description: string;
  price: string;
  tag: string;
};

export const services: ServiceItem[] = [
  {
    title: "Lavado Básico",
    description:
      "Mantención exterior orientada a limpieza general y buena presentación del vehículo.",
    price: "Desde $30.000",
    tag: "Mantención",
  },
  {
    title: "Lavado Premium",
    description:
      "Limpieza interior y exterior con una terminación más cuidada y completa.",
    price: "Desde $50.000",
    tag: "Interior + Exterior",
  },
  {
    title: "Limpieza de Tapiz",
    description:
      "Tratamiento orientado a higiene, recuperación visual y limpieza profunda de superficies interiores.",
    price: "Desde $45.000",
    tag: "Interior",
  },
  {
    title: "Corrección de Pintura",
    description:
      "Pulido orientado a mejorar reflejo, profundidad y presencia estética de la carrocería.",
    price: "Desde $140.000",
    tag: "Corrección",
  },
  {
    title: "Tratamiento Cerámico 2 años",
    description:
      "Protección cerámica con corrección previa para mejorar brillo, terminación y durabilidad.",
    price: "Desde $220.000",
    tag: "Protección",
  },
  {
    title: "Tratamiento Cerámico 3 años",
    description:
      "Protección avanzada pensada para mayor duración y una terminación de nivel superior.",
    price: "Desde $250.000",
    tag: "Protección avanzada",
  },
  {
    title: "Tratamiento Nasiol 3 años",
    description:
      "Protección cerámica avanzada con tecnología Nasiol para mayor durabilidad y terminación profesional.",
    price: "Desde $280.000",
    tag: "Nasiol",
  },
];