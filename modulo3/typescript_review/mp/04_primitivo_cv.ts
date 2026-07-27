// number — enteros y decimales, positivos y negativos
const costoConsulta: number = 25.50;
const numeroConsultorio: number = 3;
const temperaturaMascota: number = 38.5;
const codigoPaciente: number = 0x101; // también acepta hexadecimal

// string — texto, con comillas simples, dobles o backtick
const correoClinica: string = "contacto@vetapp.com";
const especie: string = 'Perro';
const ruta: string = `/api/v1/pacientes`;

// boolean — solo true o false
const mascotaAtendida: boolean = true;
const requiereVacuna: boolean = false;
const tieneCita: boolean = true;

// ── Aritmética con number ─────────────────────────────────────────────────
const costoMedicinas = 35;
const costoConsultaBase = 25;
const total = costoConsultaBase + costoMedicinas; // 60

console.log(`Total a pagar: $${total}`);

// ── Métodos de string ─────────────────────────────────────────────────────
const nombreMascota = "  Max  ";

console.log(nombreMascota.trim());              
console.log(correoClinica.includes("vetapp"));  
console.log(correoClinica.split("@"));
console.log(correoClinica.split("@")[1]);       

let paciente: string = "Max;Perro;4;Juan Pérez";
console.log(paciente.split(";"));

// ── Lógica con boolean ────────────────────────────────────────────────────
const puedeSerAtendido: boolean = tieneCita && mascotaAtendida;

console.log(puedeSerAtendido); // true