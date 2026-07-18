// Tuplas

// Concepto puro
type UbicacionMascota = [number, number];      
type ColorMascota = [number, number, number];   
type RegistroVital = [string, number];        

const ubicacion: UbicacionMascota = [-0.18, -78.47];
const colorPelaje: ColorMascota = [150, 100, 50];
const temperatura: RegistroVital = ["temperatura", 38.5];

// Desestructuración 
const [latitud, longitud] = ubicacion;
const [rojo, verde, azul] = colorPelaje;
const [signoVital, valor] = temperatura;

console.log(`Ubicación clínica: lat=${latitud}, long=${longitud}`);
console.log(`Color del pelaje: rgb(${rojo},${verde},${azul})`);
console.log(`${signoVital}: ${valor}°C`);

// Tuplas con nombre (TS 4.0+) — mejoran la legibilidad
type HorarioAtencion = [inicio: number, fin: number];
const horario: HorarioAtencion = [8, 17];
console.log(`Horario de atención: ${horario[0]}:00 a ${horario[1]}:00`);