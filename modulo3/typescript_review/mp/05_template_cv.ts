// Concepto puro — template literals (backtick ``)
const nombreMascota: string = "Max";
const especie: string = "Perro";
const edad: number = 4;

// Interpola cualquier expresión con ${ }
const bienvenida: string = `Paciente: ${nombreMascota}. Especie: ${especie}. Edad: ${edad} años.`;
console.log(bienvenida);
// Paciente: Max. Especie: Perro. Edad: 4 años.

// Expresiones dentro de ${ }
const costoConsulta: number = 20;
const costoMedicinas: number = 15;
const total: string = `Total a pagar: $${(costoConsulta + costoMedicinas).toFixed(2)}`;
console.log(total);
// Total a pagar: $35.00

// Multi-línea — sin concatenación ni \n
const reporte: string = `
=== Reporte de la Clínica Veterinaria ===
Clínica      : VetApp
Paciente     : Max
Especie      : Perro
Estado       : En consulta
`;

console.log(reporte);