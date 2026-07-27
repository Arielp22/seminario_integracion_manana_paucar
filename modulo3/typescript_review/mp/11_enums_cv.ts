enum EstadoConsulta {
  Pendiente,   
  EnProceso,   
  Finalizada, 
  Cancelada,  
}

const estado: EstadoConsulta = EstadoConsulta.Pendiente;
console.log(estado);             
console.log(EstadoConsulta[0]);       

enum CodigoResultado {
  Exitoso = 200,
  PacienteNoEncontrado = 404,
  ErrorServidor = 500,
}
console.log(CodigoResultado.Exitoso);

enum RolUsuario {
  Veterinario = "VETERINARIO",
  Recepcionista = "RECEPCIONISTA",
  Administrador = "ADMINISTRADOR",
}

const miRol: RolUsuario = RolUsuario.Veterinario;
console.log(miRol);