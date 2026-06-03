print("condicionales simples")
edad_perro = input("Incluye la edad del perro: ")
if int(edad_perro) >= 10:
    print("Mascota de la tercera edad")


print("\ncondicionales dos caminos")
temperatura_gato = input("Incluye la temperatura del gato: ")
if float(temperatura_gato) >= 39.5:
    print("Fiebre (temperatura alta)")
else:
    print("Temperatura normal")


print("\ncondicionales multiples")
estado_gravedad = input("Incluir nivel de urgencia (1 al 3): ")
if int(estado_gravedad) == 3:
    print("Emergencia Critica - Atencion Inmediata")
elif int(estado_gravedad) == 2:
    print("Urgencia Moderada - En Espera")
else:
    print("Control de rutina - Estable")


print("\ncondicionales if anidados")
tiene_turno = True
saldo_cliente = 25
servicio_solicitado = "vacuna"

if tiene_turno:
    if saldo_cliente >= 20:
        if servicio_solicitado == "vacuna":
            print("La vacuna cuesta $20. Turno confirmado")
        else:
            print("Servicio disponible en consultorio")
    else:
        print("Saldo insuficiente para pagar la consulta")
else:
    print("No tiene turno agendado")