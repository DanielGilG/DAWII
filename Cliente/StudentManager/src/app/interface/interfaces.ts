export interface Calificacion {
    asignatura: string,
    nota: number
}

export interface Alumno {
    codigo: string,
    nombre: string,
    ciudad: string,
    calificaciones: Calificacion[],
    edad: number
}