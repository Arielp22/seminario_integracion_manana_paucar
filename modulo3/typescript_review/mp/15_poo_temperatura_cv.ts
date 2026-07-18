class TemperaturaMascota {
  valorCelsius: number;
  valorFahrenheit: number;

  constructor(celsius: number, fahrenheit?: number) {
    this.valorCelsius = celsius ?? 0;
    this.valorFahrenheit = fahrenheit ?? 0;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }
  aCelsius(): number {
    return (this.valorFahrenheit - 32) * 5 / 9;
  }
  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }
  describir(): string {
    return (
      `Temperatura mascota: ${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const perroNormal = new TemperaturaMascota(38.5);
const gatoNormal = new TemperaturaMascota(39);
const registroFahrenheit = new TemperaturaMascota(0, 102.2);


console.log(perroNormal.describir());
console.log(gatoNormal.describir());
console.log(`Conversión a Celsius: ${registroFahrenheit.aCelsius()}°C`);