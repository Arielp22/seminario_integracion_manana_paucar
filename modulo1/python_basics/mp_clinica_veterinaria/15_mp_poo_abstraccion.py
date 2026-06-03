# abstraccion.py
from abc import ABC, abstractmethod

# ABC (Abstract Base Class) — clase abstracta que no puede instanciarse
class Mascota(ABC):
    def __init__(self, color="negro"):
        self.color = color

    # Método abstracto — CADA subclase DEBE implementarlo
    @abstractmethod
    def calcular_dosis(self) -> float:
        pass

    @abstractmethod
    def hacer_sonido(self) -> str:
        pass

    # Método concreto — compartido por todas las formas
    def describir(self) -> str:
        return (f"{self.__class__.__name__} {self.color}: "
                f"dosis={self.calcular_dosis():.2f}ml, sonido={self.hacer_sonido()}")

# Mascota()  # TypeError — no puede instanciarse

class Perro(Mascota):
    def __init__(self, peso, color="negro"):
        super().__init__(color)
        self.peso = peso

    def calcular_dosis(self):
        import math
        return math.pi * self.peso ** 2

    def hacer_sonido(self):
        return "Guau"

class Gato(Mascota):
    def __init__(self, meses, dosis_base, color="negro"):
        super().__init__(color)
        self.meses = meses
        self.dosis_base = dosis_base

    def calcular_dosis(self):
        return self.meses * self.dosis_base

    def hacer_sonido(self):
        return "Miau"

class Loro(Mascota):
    def __init__(self, a, b, c, color="negro"):
        super().__init__(color)
        self.a, self.b, self.c = a, b, c

    def perimetro(self):
        return self.a + self.b + self.c

    # CORREGIDO: Se implementa el metodo abstracto obligatorio
    def hacer_sonido(self):
        return "Hola"

    def calcular_dosis(self):
        s = (self.a + self.b + self.c) / 2
        return (s * (s - self.a) * (s - self.b) * (s - self.c)) ** 0.5

# Polimorfismo — mismo código para cualquier Forma
mascotas = [Perro(5, "rojo"), Gato(4, 6, "azul"), Loro(3, 4, 5, "verde")]

for mascota in mascotas:
    print(mascota.describir())

dosis_total = sum(m.calcular_dosis() for m in mascotas)
print(f"Dosis total del lote: {dosis_total:.2f}ml")