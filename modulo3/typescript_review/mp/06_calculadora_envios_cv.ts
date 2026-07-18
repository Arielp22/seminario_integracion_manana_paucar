// Sistema de cotización de consultas para una clínica veterinaria.
// Demuestra cómo los tipos previenen errores en lógica de negocio real.

type TipoConsulta = "general" | "especializada" | "emergencia";

interface Consulta {
  mascota: string;
  especie: string;
  pesoKg: number;
  tipo: TipoConsulta;
}

const TARIFAS: Record<TipoConsulta, number> = {
  general: 20.00,
  especializada: 35.00,
  emergencia: 50.00,
};

const COSTO_KG = 1.50; // $ por kilogramo de la mascota

function cotizarConsulta(consulta: Consulta): string {
  const tarifaBase = TARIFAS[consulta.tipo];
  const costoPeso = consulta.pesoKg * COSTO_KG;
  const total = tarifaBase + costoPeso;

  return `
🐾 Cotización de Consulta Veterinaria
   Mascota      : ${consulta.mascota}
   Especie      : ${consulta.especie}
   Peso         : ${consulta.pesoKg} kg
   Tipo         : ${consulta.tipo}
   Consulta     : $${tarifaBase.toFixed(2)}
   Costo peso   : $${costoPeso.toFixed(2)}
   ─────────────────────────
   TOTAL        : $${total.toFixed(2)}
  `.trim();
}

const consulta1: Consulta = {
  mascota: "Max",
  especie: "Perro",
  pesoKg: 18,
  tipo: "general",
};

const consulta2: Consulta = {
  mascota: "Luna",
  especie: "Gato",
  pesoKg: 5,
  tipo: "emergencia",
};

console.log(cotizarConsulta(consulta1));
console.log("----------------------------");
console.log(cotizarConsulta(consulta2));

