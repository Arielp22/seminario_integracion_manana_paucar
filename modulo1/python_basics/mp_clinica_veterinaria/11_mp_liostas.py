print("Listas")
print("Crear una lista")

vacia = []
id_mascotas = [1, 2, 3, 4, 5]
pacientes = ["Luna", "Roco", "Tito", "Maya", "Sasha", "Bruno"]
print(pacientes)

mixta = [101, "Luna", "Gato", True, None, 3.4]
print(mixta)

anidada = [1, [2, 5, [6, 4, 4]], 5, 7]
print(anidada)  

print("Acceder a elementos de la lista")
print(pacientes[0]) 
print(pacientes[-1])   
print(pacientes[1:3])  
print(pacientes[::-1])  


print("Crud de una lista")
medicamentos = ["Amoxicilina", "Meloxicam", "Omeprazol"]

# Agregar
medicamentos.append("Tramadol")
print(medicamentos)

medicamentos.insert(1, "Vitamina B12")
print(medicamentos)

medicamentos.extend(["Desparasitante", "Antirrabica"])
print(medicamentos)

# Modificar
medicamentos[0] = "Amoxicilina Suspension"
print(medicamentos)

# Eliminar elementos
medicamentos.remove("Meloxicam")
print(medicamentos)

eliminado = medicamentos.pop()
print(medicamentos)

eliminado = medicamentos.pop(0) 
print(medicamentos)

del medicamentos[0] 
print(medicamentos)