class Temperatura {
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
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const hervor = new Temperatura(100 , 0);
const congelacion = new Temperatura(0, 0);
const convertirACelsius = new Temperatura(0, 50);


console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K
console.log(convertirACelsius.aCelsius());


