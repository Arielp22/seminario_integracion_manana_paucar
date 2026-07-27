// Concepto puro

class Mascota {
  nombre: string;
  especie: string;
  edad: number;
  atendida: boolean;

  constructor(nombre: string, especie: string, edad: number, atendida: boolean) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.atendida = atendida;
  }

  describir(): string {
    const estado = this.atendida ? "atendida" : "pendiente";
    return `${this.nombre} (${this.especie}) — ${this.edad} años (${estado})`;
  }
}

const perro = new Mascota("Max", "Perro", 4, true);
const gato = new Mascota("Luna", "Gato", 2, false);

console.log(perro.describir());
console.log(gato.describir());