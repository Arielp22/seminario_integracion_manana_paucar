// Concepto puro

abstract class Tratamiento {
  abstract costo(): number;   
  abstract duracion(): number;

  // Método concreto con implementación
  describir(): string {
    return (
      `Costo: $${this.costo().toFixed(2)} | ` +
      `Duración: ${this.duracion()} días`
    );
  }
}


class Vacunacion extends Tratamiento {
  constructor(private precio: number, private dias: number) {
    super();
  }

  override costo(): number {return this.precio;}
  override duracion(): number {return this.dias;}
}


class Cirugia extends Tratamiento {
  constructor(private costoBase: number, private diasRecuperacion: number) {
    super();
  }

  override costo(): number {return this.costoBase;}
  override duracion(): number {return this.diasRecuperacion;}
}

const vacuna = new Vacunacion(35, 1);
const cirugia = new Cirugia(250, 15);


console.log(vacuna.describir());
console.log(cirugia.describir());