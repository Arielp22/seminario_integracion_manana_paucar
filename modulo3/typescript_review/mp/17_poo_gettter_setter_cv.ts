// Concepto puro

class Mascota {
  private _peso: number;

  constructor(peso: number) {
    this._peso = peso;
  }

  get peso(): number {
    return this._peso;
  }

  set peso(valor: number) {
    if (valor <= 0) throw new Error("El peso debe ser positivo");
    this._peso = valor;
  }

  get categoria(): string {
    if (this._peso < 5) return "Pequeña";
    if (this._peso < 20) return "Mediana";
    return "Grande";
  }
}

const mascota = new Mascota(8);
console.log(mascota.peso);      
console.log(mascota.categoria);  
mascota.peso = 25;                
console.log(mascota.peso);      
console.log(mascota.categoria);  

