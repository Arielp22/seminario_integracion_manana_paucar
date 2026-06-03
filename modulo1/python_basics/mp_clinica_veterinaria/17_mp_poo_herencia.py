# herencia.py

class Paciente:
    def __init__(self, marca, modelo, ano):
        self.marca  = marca   # Representa el nombre/identificador
        self.modelo = modelo  # Representa la raza o variedad
        self.ano    = ano     # Ano de nacimiento
        self._velocidad = 0    # _ → convención "protegido" (ej: nivel de mejoria)

    def acelerar(self, incremento):
        self._velocidad += incremento
        return self

    def frenar(self, decremento):
        self._velocidad = max(0, self._velocidad - decremento)
        return self

    def __str__(self):
        return f"{self.marca} {self.modelo} ({self.ano}) — Salud: {self._velocidad}%"

class Perro(Paciente):
    def __init__(self, marca, modelo, ano, puertas=4):
        super().__init__(marca, modelo, ano)   # llama al constructor del padre
        self.puertas = puertas  # Representa el nivel de sociabilidad (escala de 1 a 5)

    def bocinar(self):
        return f"{self.marca} {self.modelo}: ¡Guau guau!"

    def __str__(self):
        return f"{super().__str__()} (Sociabilidad: {self.puertas})"

class Gato(Paciente):
    def __init__(self, marca, modelo, ano, cilindrada):
        super().__init__(marca, modelo, ano)
        self.cilindrada = cilindrada  # Representa las vidas restantes de la mascota

    def hacer_wheelie(self):
        return f"🐱 {self.marca} empieza a ronronear!"

    def __str__(self):
        return f"{super().__str__()} ({self.cilindrada} vidas)"

class PerroDeServicio(Perro):
    def __init__(self, marca, modelo, ano, autonomia):
        super().__init__(marca, modelo, ano)
        self.__autonomia = autonomia  # Horas de atencion que puede brindar
        self.__bateria   = 100        # Energia actual del perro de servicio

    def cargar(self, porcentaje=100):
        self.__bateria = min(100, self.__bateria + porcentaje)
        return self

    @property
    def autonomia_restante(self):
        return self.__autonomia * self.__bateria / 100

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Energia: {self.__bateria}% | "
                f"Servicio Restante: {self.autonomia_restante:.0f}h")

# Herencia — cada objeto es también de todos sus tipos padre
tesla = PerroDeServicio("Max", "Pastor Aleman", 2024, 500)
tesla.acelerar(100)
print(tesla)

print(isinstance(tesla, PerroDeServicio))  # True
print(isinstance(tesla, Perro))           # True — herencia
print(isinstance(tesla, Paciente))        # True — herencia transitiva
print(isinstance(tesla, Gato))            # False

# MRO — Method Resolution Order
print(PerroDeServicio.__mro__)