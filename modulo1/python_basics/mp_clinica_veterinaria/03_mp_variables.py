# Enteros, Cadena de caracteres, booleanos, None (Contexto Veterinaria)

nombre_mascota = "Luna"        # string
edad_meses = 8                # int
peso_kg = 3.45                # float 
alta_medica = True            # bool 
diagnostico_previo = None     # NoneType 

print(type(nombre_mascota))
print(type(edad_meses))
print(type(peso_kg))
print(type(alta_medica))
print(type(diagnostico_previo))

# ASIGNAR VALOR A VARIAS VARIABLES EN UNA LINEA

id_gato, id_perro, id_loro = 101, 102, 103

print(id_gato)
print(id_perro)
print(id_loro)


# ASIGNAR EL MISMO VALOR A VARIAS VARIABLES

consultas_hoy = urgencias_hoy = hospitalizados_hoy = 0

print(consultas_hoy)
print(urgencias_hoy)
print(hospitalizados_hoy)


# INTERCAMBIAR VALORES (Ej. Reorganizar turnos de atencion)

turno_paciente_a, turno_paciente_b = 10, 20
print(turno_paciente_a, turno_paciente_b)

turno_paciente_a, turno_paciente_b = turno_paciente_b, turno_paciente_a
print(turno_paciente_a, turno_paciente_b)


# CONVENCIONES DE NOMBRES

raza_paciente = "Persa"           # snake_case
razaPaciente = "Persa"            # No usar camelCase
MAX_PACIENTES_SALA = 10           # Mayusculas sostenidas para constantes
_codigo_interno_clinica = "PRIV"  # para uso interno  


# MANEJO DE ENTEROS

id_simple = 42
temperatura_congelador_vacunas = -17
codigo_barras_insumos = 1_000_000_000_000
combinaciones_adn_especies = 2 ** 100

print(id_simple)
print(temperatura_congelador_vacunas)
print(codigo_barras_insumos)
print(combinaciones_adn_especies)


# BASE NUMERICAS (Ej. Codigos de sensores medicos o microchips)

binario_chip = 0b1010
octal_jaula = 0o17
hexadecimal_lote = 0xFF
print(binario_chip, octal_jaula, hexadecimal_lote)


# CONVERTIR DE DECIMAL A OTRAS BASES

print(bin(255))
print(oct(255))
print(hex(255))