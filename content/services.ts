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
      "Mantención exterior orientada a la mantención de cerámico limpieza general y buena presentación del vehículo",
    price: "Desde $30.000",
    tag: "Mantención",
  },
  {
    title: "Lavado Premium",
    description:
      "Limpieza interior y exterior de detailing con una terminación pensada para cuidar y proteger tu vehículo",
    price: "Desde $50.000",
    tag: "Interior + Exterior",
  },
  {
    title: "Limpieza de Tapiz",
    description:
      "Tratamiento orientado a higiene, recuperación visual y limpieza profunda de superficies interiores",
    price: "Desde $45.000",
    tag: "Interior",
  },
    {
    title: "Mantención Cerámico/Booster/Cera hidrofobica",
    description:
      "Servicio orientado a la mantención de tratamiento cerámico para garantizar un acabado perfecto post tratamiento cerámico",
    price: "Desde $80.000",
    tag: "Exterior",
  },
  {
    title: "Corrección de Pintura",
    description:
      "Pulido orientado a mejorar reflejo, profundidad y presencia estética de la carrocería",
    price: "Desde $140.000",
    tag: "Corrección",
  },
  {
    title: "Tratamiento Cerámico 2 años",
    description:
      "Corrección de pintura de dos pasos para eliminar rayas, realzar el brillo y protección cerámica de 2 años",
    price: "Desde $220.000",
    tag: "Protección",
  },
  {
    title: "Tratamiento Cerámico 3 años - Grafeno",
    description:
      "Protección avanzada pensada para mayor duración y una terminación de nivel superior en 3 pasos",
    price: "Desde $250.000",
    tag: "Protección avanzada - Grafeno",
  },
  {
    title: "Tratamiento Cerámico Nasiol 3 años - 10h",
    description:
      "Protección cerámica avanzada con tecnología Nasiol para mayor durabilidad, terminación profesional y mayor dureza para mayor protección y brillo extremo",
    price: "Desde $280.000",
    tag: "Protección Superior - Nasiol",
  },
];