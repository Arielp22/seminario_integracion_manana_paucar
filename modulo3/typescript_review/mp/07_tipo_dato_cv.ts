// NÚMEROS (number)

// Concepto puro
const edadMascota: number = 4;
const temperatura: number = 38.5;
const peso: number = 12.8;
const codigoPaciente: number = 0xff;  
const numeroConsultorio: number = 0b101; 
const numeroHistoria: number = 0o17;     
const pacientesAnuales: number = 1_000;  

console.log(codigoPaciente);     
console.log(numeroConsultorio);  
console.log(pacientesAnuales);    

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isFinite(1 / 0)); 
console.log(Number.isNaN(0 / 0));    


// strings

// Concepto puro
const nombreClinica: string = "VetApp Clínica Veterinaria";
const especie: string = 'Perro';
const mensaje: string = `Bienvenido a ${nombreClinica}`;

const nombreMascota: string = "Max";
const edad: number = 4;

// Interpolación
const saludo: string = `Paciente: ${nombreMascota}. Edad: ${edad} años.`;

const estado: string = `La mascota es ${
    edad >= 1 ? "adulta" : "cachorro"
}.`;

// Multilínea
const reporte: string = `
REPORTE VETERINARIO 
Paciente : Max
Especie  : Perro
Estado   : Estable
`.trim();

// Métodos comunes
console.log("  Max  ".trim());
console.log(nombreClinica.toUpperCase());
console.log("Max;Perro;4".split(";"));
console.log(nombreClinica.includes("VetApp"));
console.log("historial.pdf".endsWith(".pdf"));

// booleanos

// Concepto puro
const tieneCita: boolean = true;
const requiereVacuna: boolean = false;

// Inferencia
const esAdulto = edad >= 1;
const hayMedicamento = 5 > 0;

if (!hayMedicamento) {
    console.log("No hay medicamentos disponibles.");
}

//Null y Undefined

// Concepto puro
let observacion: undefined = undefined;
let diagnostico: null = null;

// Ejemplo práctico
function buscarPaciente(id: number): string | null {
    if (id === 1) return "Max";
    return null;
}

const paciente = buscarPaciente(2);

// Operador ??
const nombrePaciente = paciente ?? "Paciente no registrado";
console.log(nombrePaciente);

// Encadenamiento opcional ?.
const longitud = paciente?.length;
console.log(longitud);