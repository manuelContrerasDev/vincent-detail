export type PricingRow = {
  vehicle: string;
  price: string;
};

export type PricingTable = {
  title: string;
  rows: PricingRow[];
};

export type PricingMap = {
  lavadoBasico: PricingTable;
  lavadoPremium: PricingTable;
  limpiezaTapiz: PricingTable;
  pulido: PricingTable;
  ceramico2: PricingTable;
  ceramico3: PricingTable;
};

export const pricing: PricingMap = {
  lavadoBasico: {
    title: "Lavado Básico",
    rows: [
      { vehicle: "City Car / Sedán", price: "Desde $20.000" },
      { vehicle: "Hatchback / Cross", price: "Desde $20.000" },
      { vehicle: "Camionetas / SUV", price: "Desde $25.000" },
      { vehicle: "Vehículos XL", price: "Desde $30.000" },
    ],
  },
  lavadoPremium: {
    title: "Lavado Premium",
    rows: [
      { vehicle: "City Car / Sedán", price: "Desde $30.000" },
      { vehicle: "Hatchback / Cross", price: "Desde $30.000" },
      { vehicle: "Camionetas / SUV", price: "Desde $35.000" },
      { vehicle: "Vehículos XL", price: "Desde $40.000" },
    ],
  },
  limpiezaTapiz: {
    title: "Limpieza de Tapiz",
    rows: [
      { vehicle: "City Car / Sedán", price: "Desde $35.000" },
      { vehicle: "Hatchback / Cross", price: "Desde $35.000" },
      { vehicle: "Camionetas / SUV", price: "Desde $45.000" },
      { vehicle: "Vehículos XL", price: "Desde $45.000" },
    ],
  },
  pulido: {
    title: "Corrección de Pintura",
    rows: [
      { vehicle: "City Car / Sedán", price: "Desde $130.000" },
      { vehicle: "Hatchback / Cross", price: "Desde $130.000" },
      { vehicle: "Camionetas / SUV", price: "Desde $160.000" },
      { vehicle: "Vehículos XL", price: "Desde $200.000" },
    ],
  },
  ceramico2: {
    title: "Tratamiento Cerámico 2 años",
    rows: [
      { vehicle: "City Car / Sedán", price: "Desde $220.000" },
      { vehicle: "Hatchback / Cross", price: "Desde $220.000" },
      { vehicle: "Camionetas / SUV", price: "Desde $250.000" },
      { vehicle: "Vehículos XL", price: "Desde $280.000" },
    ],
  },
  ceramico3: {
    title: "Tratamiento Cerámico 3 años",
    rows: [
      { vehicle: "City Car / Sedán", price: "Desde $250.000" },
      { vehicle: "Hatchback / Cross", price: "Desde $250.000" },
      { vehicle: "Camionetas / SUV", price: "Desde $280.000" },
      { vehicle: "Vehículos XL", price: "Desde $300.000" },
    ],
  },
};