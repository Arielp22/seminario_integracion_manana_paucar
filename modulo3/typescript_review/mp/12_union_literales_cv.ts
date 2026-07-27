// Unión de literales: más simple, cero código JS generado
type EstadoConsulta = "pendiente" | "atendiendo" | "finalizada" | "cancelada";
type PrioridadCita = "baja" | "media" | "alta";

function procesarCita(id: number, estado: EstadoConsulta): void {
  console.log(`Cita #${id}: ${estado}`);
}

procesarCita(1, "atendiendo");

type PrioridadEmergencia = "baja" | "media" | "alta" | "critica";
interface EmergenciaVeterinaria {
  id: number;
  mascota: string;
  motivo: string;
  prioridad: PrioridadEmergencia;
  atendida: boolean;
}

function etiquetarEmergencia(e: EmergenciaVeterinaria): string {

  const iconos: Record<PrioridadEmergencia, string> = {
    baja:    "⚪",
    media:   "🟡",
    alta:    "🟠",
    critica: "🔴",
  };

  const estado = e.atendida ? "✅" : "⏳";
  return `${estado} ${iconos[e.prioridad]} [#${e.id}] ${e.mascota} - ${e.motivo}`;
}


const emergencias: EmergenciaVeterinaria[] = [
  {id: 1, mascota: "Max",motivo: "Vacunación pendiente",prioridad: "baja",atendida: true},
  {id: 2,mascota: "Luna",motivo: "Dificultad para respirar",prioridad: "critica", atendida: false},
  {id: 3,mascota: "Rocky",motivo: "Dolor abdominal",prioridad: "media",atendida: false},
];


for (const e of emergencias) {
  console.log(etiquetarEmergencia(e));
}