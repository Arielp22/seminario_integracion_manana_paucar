print("  Ciclo While Basico ")
hora_monitoreo = 1
while hora_monitoreo <= 5:
    print(f"Hora {hora_monitoreo}: Temperatura estable.")
    hora_monitoreo += 1


print("\n Ciclo While con Continue ")
id_historial = 1
while id_historial <= 5:
    if id_historial == 3:
        id_historial += 1
        continue  
    print(f"Procesando Historial Clinico de Paciente #{id_historial}")
    id_historial += 1


print("\n Ciclo While con Break ")
consultorio = 1
while consultorio <= 5:
    consultorio += 1
    if consultorio == 3:
        print("Medico encontrado en Consultorio 3 Deteniendo busqueda de emergencia.")
        break
    print(f"Buscando Medico en Consultorio {consultorio}...")


print("\n Ciclo While controlado por el usuario ")
codigo_medicamento = int(input("Ingrese codigo de medicamento (o digite 0 para salir): "))
while codigo_medicamento != 0:
    print(f"Medicamento registrado con codigo: {codigo_medicamento}")
    codigo_medicamento = int(input("Ingrese el siguiente codigo de medicamento o 0 para salir): "))


print("\n Ciclo While con bloque Else ")
dosis_restantes = 1
while dosis_restantes <= 5:
    print(f"Despachando dosis de vacuna #{dosis_restantes}")
    dosis_restantes += 1
else:
    print("Inventario actualizado: Fin del lote de vacunas disponibles para hoy.")