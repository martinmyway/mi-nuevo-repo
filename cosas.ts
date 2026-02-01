// Definimos el tipo de los objetos
export interface Cosa {
  id: number;
  name: string;
  description: string;
}

// Colección interna
const collection: Cosa[] = [
  { id: 1, name: "Objeto 1", description: "Descripción del objeto 1" },
  { id: 2, name: "Objeto 2", description: "Descripción del objeto 2" },
  { id: 3, name: "Objeto 3", description: "Descripción del objeto 3" },
];

// Funciones EXPORTADAS (vacías por ahora)
export function getAll(): Cosa[] {
  return [];
}

export function getById(id: number): Cosa | undefined {
  return undefined;
}
