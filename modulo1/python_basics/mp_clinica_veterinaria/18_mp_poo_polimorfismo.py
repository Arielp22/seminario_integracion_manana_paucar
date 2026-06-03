# polimorfismo.py

# POLIMORFISMO POR HERENCIA — override de métodos
class Tratamiento:
    """Clase base abstracta."""
    def __init__(self, destinatario, mensaje):
        self.destinatario = destinatario
        self.mensaje      = mensaje

    def enviar(self):
        raise NotImplementedError("Las subclases deben implementar enviar()")

    def __str__(self):
        return f"{self.__class__.__name__} → {self.destinatario}"

class TratamientoVacuna(Tratamiento):
    def __init__(self, destinatario, mensaje, asunto="Sin asunto"):
        super().__init__(destinatario, mensaje)
        self.asunto = asunto

    def enviar(self):
        return f"📧 Vacuna a {self.destinatario}: [{self.asunto}] {self.mensaje}"

class TratamientoCirugia(Tratamiento):
    MAX_CHARS = 160

    def enviar(self):
        msg = self.mensaje[:self.MAX_CHARS]
        return f"📱 Cirugia a {self.destinatario}: {msg}"

class TratamientoMedicamento(Tratamiento):
    def enviar(self):
        return f"🔔 Medicamiento a {self.destinatario}: {self.mensaje[:50]}..."

class TratamientoExamen(Tratamiento):
    def __init__(self, canal, mensaje):
        super().__init__(canal, mensaje)

    def enviar(self):
        return f"💬 Examen #{self.destinatario}: {self.mensaje}"

# Polimorfismo en acción — misma función, distintos tipos
def notificar_todos(notificaciones: list):
    for notif in notificaciones:
        print(f"  {notif.enviar()}")   # cada uno envía a su manera

alertas = [
    TratamientoVacuna("Luna",  "Aplicar refuerzo de parvovirus", "Lote #1234"),
    TratamientoCirugia("Roco",        "Esterilizacion programada a las 09:00"),
    TratamientoMedicamento("Tito", "Administrar antibiotico cada 8 horas"),
    TratamientoExamen("quirofano",        "Hemograma completo — revisar urgente"),
]

print("Enviando notificaciones:")
notificar_todos(alertas)

# POLIMORFISMO DUCK TYPING — sin herencia
# "Si camina como un pato y grazna como un pato, es un pato"
class EcoGrafo:
    def leer(self):   return "datos desde disco local"
    def escribir(self, datos): print(f"Guardando en disco: {datos[:30]}...")

class MonitordePresion:
    def leer(self):   return "datos desde la nube"
    def escribir(self, datos): print(f"Subiendo a la nube: {datos[:30]}...")

class TermometroDigital:
    def leer(self):   return "datos desde base de datos"
    def escribir(self, datos): print(f"Insertando en BD: {datos[:30]}...")

# Esta función funciona con CUALQUIER objeto que tenga leer() y escribir()
def procesar_archivo(archivo):
    contenido = archivo.leer()
    print(f"Procesando: {contenido}")
    archivo.escribir(f"resultado_{contenido}")

for archivo in [EcoGrafo(), MonitordePresion(), TermometroDigital()]:
    procesar_archivo(archivo)