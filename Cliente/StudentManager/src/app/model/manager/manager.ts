import { Component, input } from '@angular/core';
import {ALUMNOS} from "../../data/students";
import {Calificacion, Alumno} from "../../interface/interfaces";

@Component({
  selector: 'app-manager',
  imports: [],
  templateUrl: './manager.html',
  styleUrl: './manager.scss'
})
export class Manager {
  alumnos: Alumno[] = ALUMNOS;

  constructor() {
    console.log(this.alumnos);
  }

  notasAlumno(){
    let nombre = prompt("Nombre del alumno: ");
    let notas = this.alumnos.find(alumno => alumno.nombre === nombre)?.calificaciones || [];
    if (notas.length > 0){
      let sumaNotas = this.alumnos.find(alumno => alumno.nombre === nombre)?.calificaciones.reduce((acc, curr) => acc + curr.nota, 0) || 0;
      let notaMedia = sumaNotas / notas.length;
      console.log("Nota media: " + notaMedia);

      let mejorNota = this.alumnos.find(alumno => alumno.nombre === nombre)?.calificaciones.reduce((max, curr) => curr.nota > max ? curr.nota : max, notas[0].nota) || 0;
      console.log("Mejor nota: " + mejorNota + "En: " + notas.find(nota => nota.nota === mejorNota)?.asignatura);

      let peorNota = this.alumnos.find(alumno => alumno.nombre === nombre)?.calificaciones.reduce((min, curr) => curr.nota < min ? curr.nota : min, notas[0].nota) || 0;
      console.log("Peor nota: " + peorNota + " En: " + notas.find(nota => nota.nota === peorNota)?.asignatura);

    }else{
      console.log("Alumno no encontrado");
    }
  }

  subeUnPunto(){
    this.alumnos.forEach(alumno => {
      alumno.calificaciones.forEach(calificacion => {
        if (calificacion.nota < 10){
          calificacion.nota += 1;
        }
      });
    });
  }

  alumnosCiudad(){
    let ciudad = prompt("Ciudad: ");
    let alumnosCiudad = this.alumnos.filter(alumno => alumno.ciudad === ciudad);
    if (alumnosCiudad.length === 0){
      console.log("No hay alumnos");
      return;
    }else{
    console.log("Alumnos de " + ciudad + ": ");
    console.log(alumnosCiudad);
    }
  }

  alumnosCurso(){
    let curso = prompt("Curso: ");
    let alumnosCurso = this.alumnos.filter(alumno => alumno.codigo.substring(0,3) === curso);
    if (alumnosCurso.length === 0){
      console.log("No hay alumnos");
      return;
    }else{
    console.log("Alumnos de " + curso + ": ");
    console.log(alumnosCurso);
    }
  }

  ordenEdad(){}
  ordenaNombreAsc(){}
  ordenaNombreDesc(){}
  borraAlumno(){}
  nuevoAlumno(){}
  nuevaAsignatura(){}

}
