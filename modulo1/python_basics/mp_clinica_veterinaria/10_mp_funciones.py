print("Funciones en python")

print("funciones basicas")
def saludar():
    print("Sistema de Atencion Veterinaria")
saludar()


print("funcion con parametro")
def registrar_mascota(nombre):
    print(f"Mascota {nombre} ingresada en el sistema")
registrar_mascota("Luna")


print("funcion que devuelve valor con return")
def calcular_total_consulta(base, medicamento):
    return base + medicamento
print(f"Total a pagar: ${calcular_total_consulta(25, 15)}")


print("funcion parametros por posicion")
def presentar_paciente(nombre, edad, especie):
    print(f"Paciente: {nombre}, Edad: {edad} anos, Especie: {especie}")
presentar_paciente("Roco", 5, "Perro") # Por posicion
presentar_paciente(especie="Gato", nombre="Luna", edad=3) # Por nombre


print("funcion con parametros por defecto")
def programar_cita(nombre_mascota, motivo = "Control", recordatorio="!"):
    print(f"Cita para {nombre_mascota}, Motivo: {motivo}, Alerta{recordatorio}")

programar_cita("Roco", "Cirugia", "...")
programar_cita("Luna", recordatorio="...")
programar_cita("Tito", "Vacunacion")


print("Funcion parametros posicionales args")
def sumar_pesos_lote(*pesos):
    print(f"Pesos de mascotas recibidos: {pesos}")
    return sum(pesos)
    
print(f"Total peso lote 1: {sumar_pesos_lote(4.5, 12.2, 8.0)} kg")
print(f"Total peso lote 2: {sumar_pesos_lote(2.1, 1.5)}")


print("funcion parametros combinados con posicional")
def mostrar_historial_vacunas(mascota, *vacunas):
    print(f"Historial de {mascota}: {vacunas}")
    print(f"Mascota: {mascota}")
    for vacuna in vacunas:
        print(f"- Vacuna aplicada: {vacuna}")
mostrar_info = mostrar_historial_vacunas 
mostrar_info("Luna", "Antirrabica", "Parvovirus", "Triple Felina")


print("funcion parametros clave valor variables kwargs")
def crear_perfil_propietario(**datos_dueno):
    print(f"Datos recibidos en diccionario: {datos_dueno}")
    for clave, valor in datos_dueno.items():
        print(f"{clave}: {valor}")
crear_perfil_propietario(nombre="Ana", apellido="Paris", telefono=121212, ciudad="Quito")


print("funciones parametros combinacion de todos los tipos")
def configurar_alertas_clinica(servidor, *puertos, sms_activo=False, **detalles_correo):
    print(f"Servidor: {servidor}")
    print(f"Puertos de red: {puertos}")
    print(f"Alertas SMS activadas: {sms_activo}")
    print(f"Configuracion de correo: {detalles_correo}")
configurar_alertas_clinica("localhost", 80, 443, sms_activo=True, timeout=30, ssl=True)


print("Devolver multiples valores")
def obtener_rango_pesos(lista_pesos):
    return min(lista_pesos), max(lista_pesos)
peso_minimo, peso_maximo = obtener_rango_pesos([3.5, 12.0, 7.2, 25.4])
print(f"Peso minimo: {peso_minimo} kg, Peso maximo: {peso_maximo} kg")
_, peso_maximo = obtener_rango_pesos([1.2, 5.0, 2.3])
print(f"Solo el peso maximo del lote: {peso_maximo} kg")


print("Devolver diccionario en el caso de muchos valores")
def analizar_costos_mes(historial_pagos):
    n = len(historial_pagos)
    total = sum(historial_pagos)
    return {
        "total": total, 
        "media": total / n if n > 0 else 0,
        "minimo": min(historial_pagos) if historial_pagos else None,
        "maximo": max(historial_pagos) if historial_pagos else None, 
        "count": n
    }
datos_facturas = [35, 120, 45, 60, 25, 80]
stats = analizar_costos_mes(datos_facturas)
print(f"Ingreso Total: ${stats['total']}")
print(f"Promedio por consulta: ${stats['media']:.2f}")
print(f"Rango de tarifas: ${stats['minimo']} - ${stats['maximo']}")


print("funciones Lambdas")
def calcular_recargo_urgencia(costo):
    return costo * 2
recargo_lambda = lambda costo: costo * 2

print(f"Funcion normal (Recargo Urgencia): ${calcular_recargo_urgencia(30)}")
print(f"Funcion lambda (Recargo Urgencia): ${recargo_lambda(30)}")

descuento_pareja_mascotas = lambda a, b: a + b
print(f"Descuento total combinado: ${descuento_pareja_mascotas(5, 4)}")