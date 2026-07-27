// Concepto puro
type Medicamento = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  stock: number;
};

const catalogo: Medicamento[] = [
  { id: 1, nombre: "Antibiótico", precio: 18.50, disponible: true, stock: 12 },
  { id: 2, nombre: "Vacuna Antirrábica", precio: 25.00, disponible: true, stock: 8 },
  { id: 3, nombre: "Desparasitante", precio: 12.75, disponible: false, stock: 0 },
  { id: 4, nombre: "Vitaminas", precio: 15.00, disponible: true, stock: 10 },
  { id: 5, nombre: "Analgésico", precio: 9.50, disponible: false, stock: 2 },
];

// TypeScript sabe que cada "m" es de tipo Medicamento
const disponibles: Medicamento[] = catalogo.filter((m) => m.disponible);
const nombres: string[] = catalogo.map((m) => m.nombre);
const masBarato: Medicamento | undefined = catalogo.reduce((min, m) =>
  m.precio < min.precio ? m : min
);

console.log(nombres);
console.log(masBarato?.nombre);
console.log(disponibles.length);
console.log("Quinto elemento:", catalogo[4]);