// Concepto puro
class Animal {
  nombre(): string {return "Animal";}
  sonido(): string {return "Sonido desconocido";}
}

class Perro extends Animal {
  constructor(private raza: string) {super();}
  override nombre(): string {return "Perro";}
  override sonido(): string {return "Ladra: ¡Guau!";}
}

class Gato extends Animal {
  constructor(private color: string) {super();}
  override nombre(): string {return "Gato";}
  override sonido(): string {return "Maúlla: ¡Miau!";}
}

class Ave extends Animal {constructor(private especie: string) {super();}
  override nombre(): string {return "Ave";}
  override sonido(): string {return "Canta: ¡Pío pío!";}
}

const animales: Animal[] = [
  new Perro("Labrador"),
  new Gato("Siamés"),
  new Ave("Canario"),
];


for (const a of animales) {
  console.log(`${a.nombre()}: ${a.sonido()}`);
}