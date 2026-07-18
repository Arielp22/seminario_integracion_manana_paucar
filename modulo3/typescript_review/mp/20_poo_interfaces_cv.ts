// Concepto puro

interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}


class ConsultaVeterinaria implements Serializable, Validable {
  constructor(
    public id: string,
    public mascota: string,
    public tratamientos: string[],
    public costoTotal: number
  ) {}

  serializar(): string {
    return JSON.stringify({id: this.id,mascota: this.mascota,tratamientos: this.tratamientos,costoTotal: this.costoTotal});
  }

  esValido(): boolean {
    return this.tratamientos.length > 0 && this.costoTotal > 0;
  }
}

const consulta = new ConsultaVeterinaria("C-001","Max",["Vacuna Antirrábica", "Desparasitación"],45);
console.log(consulta.esValido()); 
console.log(consulta.serializar());