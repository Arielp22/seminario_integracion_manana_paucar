// ── Anotación explícita ───────────────────────────────────────────────────
// Tú le dices a TS cuál es el tipo.
const numeroConsultorio: number = 5;
const nombreClinica: string = "VetApp Clínica Veterinaria";
const abierto: boolean = true;

// ── Inferencia de tipo ────────────────────────────────────────────────────
const numeroConsultorio2 = 5;                
const nombreClinica2 = "VetApp Clínica Veterinaria"; 
const abierto2 = true;                    

// ── Cuándo anotar explícitamente ─────────────────────────────────────────
// 1. Variables declaradas sin valor inicial:
let pesoMascota: number; 
pesoMascota = 12.5;

// 2. Cuando quieres un tipo más amplio que el valor inicial:
let numeroHistoria: number | string = 101; 
numeroHistoria = "H-101"; 

// 3. Parámetros de funciones (TS no puede inferirlos):
function registrarPaciente(nombre: string, edad: number): string {
  return `Paciente: ${nombre} - Edad: ${edad} año(s)`;
}

console.log(registrarPaciente("Max", 4 ));