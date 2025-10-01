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

  ordenEdad(){
    let edades = this.alumnos.map(alumno => alumno.edad);
    if (edades.length === 0){
      console.log("No hay alumnos");
      return;
    }
    edades.sort((a, b) => a - b);
    console.log("Edades de los alumnos: ");
    console.log(edades);
  }

  ordenaNombreAsc(){
    let nombres = this.alumnos.map(alumno => alumno.nombre);
    if (nombres.length === 0){
      console.log("No hay alumnos");
      return;
    }
    nombres.sort();
    console.log("Nombres de los alumnos: ");
    console.log(nombres);
  }

  ordenaNombreDesc(){
    let nombres = this.alumnos.map(alumno => alumno.nombre);
    if (nombres.length === 0){
      console.log("No hay alumnos");
      return;
    }
    nombres.sort().reverse();
    console.log("Nombres de los alumnos: ");
    console.log(nombres);
  }

  borraAlumno(){
    let nombre = prompt("Nombre del alumno a borrar: ");
    let index = this.alumnos.findIndex(alumno => alumno.nombre === nombre);
    if (index !== -1){
      this.alumnos.splice(index, 1);
      console.log("Alumno borrado");
    }else{
      console.log("Alumno no encontrado");
    }
  }

  nuevoAlumno(){}
  nuevaAsignatura(){}

}
