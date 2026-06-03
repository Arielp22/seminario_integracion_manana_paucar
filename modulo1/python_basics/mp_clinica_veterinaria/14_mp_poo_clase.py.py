# primera-clase.py

class Mascota:
    # Atributo de clase — compartido por TODAS las instancias
    especie = "Canis lupus"

    # __init__ es el constructor — se ejecuta al crear la instancia
    def __init__(self, nombre, edad):
        # Atributos de instancia — propios de cada objeto
        self.nombre = nombre
        self.edad   = edad

    # Método de instancia — self es la referencia al objeto
    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} anos."

    def cumplir_anios(self):
        self.edad += 1
        print(f"¡Feliz cumpleanos, {self.nombre}! Ahora tienes {self.edad}.")

    # __str__ — representación legible (para print y str())
    def __str__(self):
        return f"Mascota({self.nombre}, {self.edad})"

    # __repr__ — representación oficial (para depuración)
    def __repr__(self):
        return f"Mascota(nombre={self.nombre!r}, edad={self.edad!r})"

# Crear instancias (objetos) con la clase como función
luna = Mascota("Luna", 3)
roco = Mascota("Roco", 5)

print(luna.saludar())       # Hola, soy Luna y tengo 3 anos.
print(roco.saludar())      # Hola, soy Roco y tengo 5 anos.
luna.cumplir_anios()        # ¡Feliz cumpleanos, Luna! Ahora tienes 4.
print(str(luna))            # Mascota(Luna, 4)
print(repr(luna))           # Mascota(nombre='Luna', edad=4)
print(Mascota.especie)     # Canis lupus  — atributo de clase