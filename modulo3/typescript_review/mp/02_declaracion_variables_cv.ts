// const — valores que NO cambian (preferidos por defecto)
const NOMBRE_CLINICA: string = "VetApp Clínica Veterinaria";
const CONSULTORIO: number = 3;
const ATENCION_24H: boolean = true;

// let — valores que SÍ pueden cambiar
let pacientesAtendidos: number = 0;
let estadoConsulta: string = "En espera";
let mascotaAtendida: boolean = false;

console.log(`Pacientes atendidos: ${pacientesAtendidos},
Estado de la consulta: ${estadoConsulta},
¿Mascota atendida?: ${mascotaAtendida}`);

// Cambios durante la jornada
pacientesAtendidos++;                  
estadoConsulta = "En consulta";       
mascotaAtendida = true;               

console.log(`Pacientes atendidos: ${pacientesAtendidos},
Estado de la consulta: ${estadoConsulta},
¿Mascota atendida?: ${mascotaAtendida}`);
