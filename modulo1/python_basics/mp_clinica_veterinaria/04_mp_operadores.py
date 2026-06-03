# Operadores Matematicos 

costo_consulta = 15
costo_vacuna = 20

print("Suma (Total de consulta mas vacuna)")
print(costo_consulta, "+", costo_vacuna, "=", costo_consulta + costo_vacuna)

print("Resta (Descuento al total)")
print(costo_vacuna, "-", 5, "=", costo_vacuna - 5)

print("Division (Dividir el costo de una cirugia en 2 cuotas)")
print(100, "/", 2, "=", 100 / 2)

print("Multiplicacion (Comprar 3 collares antipulgas)")
print(3, "*", 10, "=", 3 * 10)

print("Potencia (Calcular el area cuadrada de una jaula de 3x3 metros)")
print(3, "**", 2, "=", 3 ** 2)

print("Division entera (Cuantas cajas completas de 3 jeringas se pueden armar con 7 jeringas)")
print(7, "//", 3, "=", 7 // 3)

print("Modulo (Jeringas sueltas que sobran despues de armar las cajas)")
print(7, "%", 3, "=", 7 % 3)

print("\nOperadores de asignacion")

mascotas_espera = 10
print("Mascotas al inicio:", mascotas_espera)

mascotas_espera += 5
print("Llegan 5 mascotas mas (mascotas_espera += 5):", mascotas_espera)

mascotas_espera -= 3
print("Entran 3 mascotas al consultorio (mascotas_espera -= 3):", mascotas_espera)