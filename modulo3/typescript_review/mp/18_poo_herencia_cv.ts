// Concepto puro

class Animal {
  constructor(public nombre: string) {}

  hablar(): string {
    return `${this.nombre} hace un sonido.`;
  }
}

class Perro extends Animal {
  constructor(nombre: string, public raza: string) {
    super(nombre); 
  }

  override hablar(): string {
    return `${this.nombre} ladra: ¡Guau!`;}

  vacunarse(vacuna: string): string {
    return `${this.nombre} recibió la vacuna ${vacuna}.`;
  }
}

class Gato extends Animal {
  constructor(nombre: string, public color: string) {
    super(nombre);
  }

  override hablar(): string {
    return `${this.nombre} maúlla: ¡Miau!`;
  }
}

const animal = new Animal("Mascota");
const perro = new Perro("Rex", "Labrador");
const gato = new Gato("Luna", "Blanco");

console.log(animal.hablar());
console.log(perro.hablar());
console.log(perro.vacunarse("Antirrábica"));
console.log(perro.raza);

console.log(gato.hablar());
console.log(gato.color);