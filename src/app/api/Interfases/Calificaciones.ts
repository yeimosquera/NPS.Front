
export interface Calificacion {
    calificacionID: number,
    usuarioID: number,
    calificacion: number,
    fechaCalificacion: string,
    nombreUsuario:string
  }

 
export interface NPS {
  nps: number,  
  fechaCalculo: string,
} 

export interface Calificar {
  usuarioID: number,
  Calificar: number,
} 

export interface Login{
  NombreUsuario: string,
  Contrasena:string,
}

export interface LoginResponse{
  usuarioID: number;
  nombreUsuario: string;
  contrasena: string | null;
  perfil: 'Administrador' | 'Votante' | string;
}
  