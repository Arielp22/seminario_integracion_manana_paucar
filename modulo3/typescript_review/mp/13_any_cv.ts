// ─── any ────

let informacionPaciente: any = "Max";
console.log("Paciente:", informacionPaciente);
informacionPaciente = 4;
console.log("Edad:", informacionPaciente);
informacionPaciente = true;
console.log("Atendido:", informacionPaciente);

// ─── unknown ───
let datoPaciente: unknown = "Perro";
datoPaciente = "gato";
if (typeof datoPaciente === "string") {
  console.log("Especie:", datoPaciente.toUpperCase());
}

// ─── never ─────
function lanzarErrorVeterinario(mensaje: string): never {
  throw new Error(mensaje);
}
console.log("Sistema veterinario iniciado");

type EstadoConsulta = "pendiente" | "atendiendo" | "finalizada";

function verificarEstado(valor: never): never {
  throw new Error(`Estado no manejado: ${String(valor)}`);
}