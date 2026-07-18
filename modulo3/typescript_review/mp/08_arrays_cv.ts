// Concepto puro — dos sintaxis equivalentes
const edadesMascotas: number[] = [2, 4, 6, 8, 10];
const nombresMascotas: Array<string> = ["Max", "Luna", "Rocky"];

// TypeScript infiere el tipo del array si lo inicializas
const pesos = [5, 10, 15];

// Métodos tipados
const edadesDobles: number[] = edadesMascotas.map((edad) => edad * 2);
const edadesPares: number[] = edadesMascotas.filter((edad) => edad % 2 === 0);
const totalEdades: number = edadesMascotas.reduce((acum, edad) => acum + edad, 0);

// Mutación
edadesMascotas.push(12);     
edadesMascotas.unshift(1);    
const ultimaEdad = edadesMascotas.pop();   
const primeraEdad = edadesMascotas.shift(); 

// Búsqueda
const existe: boolean = edadesMascotas.includes(6); 
const indice: number = edadesMascotas.indexOf(6);   
const encontrada: number | undefined = edadesMascotas.find((edad) => edad > 8);

// Mostrar resultados
console.log("Edades:", edadesMascotas);
console.log("Nombres:", nombresMascotas);
console.log("Pesos:", pesos);
console.log("Edades dobles:", edadesDobles);
console.log("Edades pares:", edadesPares);
console.log("Suma de edades:", totalEdades);
console.log("Existe la edad 6:", existe);
console.log("Índice de la edad 6:", indice);
console.log("Primera edad mayor a 8:", encontrada);     