print("match case")

estado_atencion = input("Estado de la mascota (ingresar/atender/dar_alta): ")
match estado_atencion:
    case "ingresar":
        print("Mascota registrada y enviada a la sala de espera")
    case "atender":
        print("El veterinario está examinando al paciente")
    case "dar_alta":
        print("Paciente recuperado. Generando orden de salida")
    case _:
        print(f"Estado '{estado_atencion}' no reconocido en el sistema")


print("\nmatch condicionales")

peso_mascota = 7
match peso_mascota:
    case p if p <= 0:
        print(f"Error: El peso {p} kg no puede ser menor o igual a cero")
    case p if p < 5:
        print(f"El paciente pesa {p} kg: Categoría peso ligero (Dosis baja)")
    case p if p % 2 == 0:
        print(f"El paciente pesa {p} kg (Peso exacto par - Categoría estándar)")
    case p:
        print(f"El paciente pesa {p} kg: Categoría peso impar (Requiere revisión)")