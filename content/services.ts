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
      "Mantención exterior enfocada en limpieza general, cuidado de tratamientos cerámicos y buena presentación del vehículo.",
    price: "Desde $30.000",
    tag: "Mantención",
  },
  {
    title: "Lavado Premium",
    description:
      "Limpieza interior y exterior con enfoque de detailing, pensada para cuidar, proteger y realzar la presentación del vehículo.",
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
    title: "Mantención Cerámica / Booster / Cera Hidrofóbica",
    description:
      "Servicio enfocado en mantener tratamientos cerámicos y reforzar protección, brillo y terminación del vehículo.",
    price: "Desde $80.000",
    tag: "Exterior",
  },
  {
    title: "Corrección de Pintura",
    description:
      "Pulido orientado a mejorar reflejo, profundidad y presencia estética de la carrocería.",
    price: "Desde $140.000",
    tag: "Corrección",
  },
  {
    title: "Tratamiento Cerámico 2 Años",
    description:
      "Corrección de pintura en dos pasos para reducir rayas, realzar el brillo y aplicar protección cerámica de hasta 2 años.",
    price: "Desde $220.000",
    tag: "Protección",
  },
  {
    title: "Tratamiento Cerámico 3 Años - Grafeno",
    description:
      "Protección avanzada pensada para mayor duración, mejor terminación y un nivel superior de acabado.",
    price: "Desde $250.000",
    tag: "Protección Avanzada - Grafeno",
  },
  {
    title: "Tratamiento Cerámico Nasiol 3 Años - 10H",
    description:
      "Protección cerámica avanzada con tecnología Nasiol, pensada para mayor durabilidad, brillo extremo y una terminación profesional.",
    price: "Desde $280.000",
    tag: "Protección Superior - Nasiol",
  },
];