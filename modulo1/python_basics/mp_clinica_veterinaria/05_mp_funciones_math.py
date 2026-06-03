import math

# Raiz cuadrada
peso_referencia = 15
print("Raiz cuadrada del peso de referencia:")
print(math.sqrt(peso_referencia)) 

# math.ceil redondear hacia arriba 
dias_calculados = 3.2
print("Dias de medicacion redondeados hacia arriba (math.ceil):")
print(math.ceil(dias_calculados)) 

# math.floor redondear hacia abajo 
dosis_calculada = 3.2
print("Dosis redondeada hacia abajo de forma segura (math.floor):")
print(math.floor(dosis_calculada)) 

# round redondear a n decimales
peso_gato = 3.555555
print("Peso del gato redondeado a 2 decimales:")
print(round(peso_gato, 2))