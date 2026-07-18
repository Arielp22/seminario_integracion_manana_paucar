// Concepto puro

class HistoriaClinica {
  readonly id: string;          
  public propietario: string;      
  private costoTratamiento: number;
  protected moneda: string;         

  constructor(id: string, propietario: string, costoInicial: number) {
    this.id = id;
    this.propietario = propietario;
    this.costoTratamiento = costoInicial;
    this.moneda = "USD";
  }

  obtenerCosto(): number {
    return this.costoTratamiento;
  }

  agregarTratamiento(costo: number): void {
    if (costo <= 0) throw new Error("Costo inválido");
    this.costoTratamiento += costo;
  }
}


const historia = new HistoriaClinica("HC-001","Ana García",50);
console.log(historia.propietario);      
console.log(historia.id);               
console.log(historia.obtenerCosto());  
historia.agregarTratamiento(30);
console.log(historia.obtenerCosto());   

