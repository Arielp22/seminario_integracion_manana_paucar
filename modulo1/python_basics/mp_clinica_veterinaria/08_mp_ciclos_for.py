print("  ciclo for  ")
pacientes = ["Luna", "Roco", "Tito"]
for paciente in pacientes:
    print(f"Paciente listo para consulta: {paciente}")


print("\n  Recorre palabras  ")
for letra in "QUIROFANO":
    print(f"Componente de código: {letra}")


print("\n  Recorrer rango  ")
for hora in range(1, 6):
    print(f"Control de temperatura - Hora {hora}")


print("\n  Recorrer rango configurar paso  ")
for hora in range(1, 10, 2):
    print(f"Alerta: Administrar analgésico en la hora {hora}")


print("\n  Enumerar lista  ")
for cubiculo, paciente in enumerate(pacientes):
    print(f"Cubículo #{cubiculo + 1}: Asignado a {paciente}")
    

print("\n  Dos listas a la vez  ")
nombres_mascotas = ["Luna", "Roco"]
especies = ["Gato", "Perro"]
for nombre, especie in zip(nombres_mascotas, especies):
    print(f"Paciente: {nombre} | Especie: {especie}")
  

print("\n  Control del ciclo  ")
print("  break  ")
for id_busqueda in range(1, 6):
    if id_busqueda == 3:
        print(f"Historial {id_busqueda} encontrado. Deteniendo base de datos.")
        break
    print(f"Buscando en registro de historial clínico #{id_busqueda}...")

print("continue")
for num_jaula in range(1, 6):
    if num_jaula == 2:
        print("Jaula 2 en desinfección. Saltando registro.")
        continue
    print(f"Registrando desparasitación en la jaula {num_jaula}")


print("\n for anidado")
for piso in range(1, 4):
    for jaula in range(1, 3):
        print(f"Inspeccionando Piso {piso}, Jaula {jaula}")


print("\n lista comprension forma corta  ")
dosis_calculadas = [peso**2 for peso in range(5)]
print("Lista automatizada de dosis en mg:", dosis_calculadas)