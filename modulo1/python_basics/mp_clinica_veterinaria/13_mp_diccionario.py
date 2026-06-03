# diccionarios.py

# Crear diccionarios
vacio    = {}
persona  = {"nombre": "Luna", "edad": 3, "ciudad": "Quito"}
config   = dict(host="localhost", puerto=5432, debug=True)

# Acceso
print(persona["nombre"])              # Luna
print(persona.get("email"))           # None — no lanza error si no existe
print(persona.get("email", "N/A"))    # N/A — valor por defecto

# Modificar
persona["email"]   = "luna@email.com"  # añadir/modificar
persona["edad"]    = 4                # modificar
del persona["ciudad"]                 # eliminar
valor = persona.pop("email")         # eliminar y obtener el valor
print(persona)

# Verificar existencia
print("nombre" in persona)            # True
print("ciudad" in persona)            # False

# Métodos esenciales
print(persona.keys())    # dict_keys(['nombre', 'edad'])
print(persona.values())  # dict_values(['Luna', 4])
print(persona.items())   # dict_items([('nombre', 'Luna'), ('edad', 4)])

# Iterar
for clave, valor in persona.items():
    print(f"  {clave}: {valor}")

# update — fusionar diccionarios
persona.update({"ciudad": "Guayaquil", "tel": "099111222"})
print(persona)

# Fusionar con | (Python 3.9+)
extra  = {"cargo": "Veterinaria", "activo": True}
completo = persona | extra
print(completo)

# Diccionarios anidados
empresa = {
    "nombre": "VetCorp",
    "empleados": {
        1: {"nombre": "Luna", "depto": "tech"},
        2: {"nombre": "Luis", "depto": "ventas"},
    },
    "sedes": ["Quito", "Guayaquil"]
}

print(empresa["empleados"][1]["nombre"])   # Luna
empresa["empleados"][3] = {"nombre": "Marta", "depto": "rrhh"}

# setdefault — añadir solo si no existe
persona.setdefault("pais", "Ecuador")       # añade "pais"
persona.setdefault("nombre", "Otro")      # no modifica — ya existe