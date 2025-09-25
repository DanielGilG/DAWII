import { Component } from '@angular/core';
import { Alumno, ALUMNOS } from '../../Interfaces/alumnos';

@Component({
  selector: 'app-ejercicio-arrays',
  imports: [],
  templateUrl: './ejercicio-arrays.html',
  styleUrl: './ejercicio-arrays.css'
})
export class EjercicioArrays {

  alumnos = ALUMNOS

  verAlumnos() {
    this.alumnos.forEach((a) => console.log(a))
  }

  notasAlumno() {
    let alumno = prompt("Nombre del alumno :");
    let pos = this.alumnos.findIndex(a => a.nombre == alumno);
    if (pos == -1)
      console.log("El alumno " + alumno + " no Existe");
    else {
      let media = 0;
      let mejorNota = 0;
      let asignaturaMejorNota = "";
      let peorNota = 10;
      let asignaturaPeorNota = "";

      this.alumnos[pos].calificaciones.map(c => {
        media += c.nota;
        if (c.nota > mejorNota) {
          mejorNota = c.nota;
          asignaturaMejorNota = c.asignatura
        }
        if (c.nota < peorNota) {
          peorNota = c.nota;
          asignaturaPeorNota = c.asignatura
        }
      }
      );

      media = media / this.alumnos[pos].calificaciones.length;
      console.log(`El alumno ${alumno} tiene una nota media de ${media}`)
      console.log(`como mejor nota un ${mejorNota} en ${asignaturaMejorNota}`)
      console.log(`como peor nota un ${peorNota} en ${asignaturaPeorNota}`);
    }

  }

  subeUnPunto() {
    this.alumnos.map(a => a.calificaciones.map(c => c.nota++));
    console.log(this.alumnos);
  }

  alumnosCiudad() {
    let ciudad = prompt("Ciudad :");
    let alumnosDeCiudad = this.alumnos.filter(a => a.ciudad == ciudad);
    if (alumnosDeCiudad.length == 0)
      console.log("No hay ningun alumno de la ciudad " + ciudad);
    else {
      console.log("Alumnos de la ciudad " + ciudad);
      alumnosDeCiudad.forEach(a => console.log(a.nombre));
    }
  }

  alumnosCurso() {
    let curso = prompt("Curso :");
    let alumnosDelCurso = this.alumnos.filter(a => a.codigo.split("-")[1] == curso);

    if (alumnosDelCurso.length == 0)
      console.log("No hay ningun alumno del curso " + curso);
    else {
      console.log("Alumnos del curso " + curso);
      alumnosDelCurso.forEach(a => console.log(a.nombre));
    }
  }

  ordenaEdad() {
    this.alumnos.sort((a, b) => a.edad - b.edad);
    console.log(this.alumnos);
  }

  ordenaNombreDesc() {
    this.alumnos.sort((a, b) => {
      if (a.nombre < b.nombre)
        return -1;

      if (a.nombre > b.nombre)
        return 1;

      return 0;
    }
    );
    console.log(this.alumnos);
  }

  ordenaNombreAsc() {
    this.alumnos.sort((a, b) => {
      if (a.nombre < b.nombre)
        return -1;

      if (a.nombre > b.nombre)
        return 1;

      return 0;
    }
    );
    this.alumnos.reverse();
    console.log(this.alumnos);
  }

  borraAlumno() {
    let alumno = prompt("Nombre del alumno :");
    let pos = this.alumnos.findIndex(a => a.nombre == alumno);
    if (pos == -1)
      console.log("El alumno " + alumno + " no Existe");
    else {
      this.alumnos.splice(pos, 1);
      console.log(this.alumnos);
    }
  }

  nuevoAlumno() {
    let codigo: string | null = prompt("Codigo: ");
    if (codigo == null) codigo = ""

    let nombre = prompt("Nombre: ");
    if (nombre == null) nombre = ""

    let ciudad = prompt("Ciudad: ");
    if (ciudad == null) ciudad = ""

    let edad = Number(prompt("Edad: "));
    if (edad == null) edad = 0

    let unAlumno: Alumno = { 'codigo': codigo, 'nombre': nombre, 'ciudad': ciudad, 'edad': edad, 'calificaciones': [] }

    this.alumnos.push(unAlumno);
    console.log(this.alumnos);
  }

  nuevaAsignatura() {
    //Buscamos al alumno
    let alumno = prompt("Nombre del alumno :");
    let posAlumno = this.alumnos.findIndex(a => a.nombre == alumno);
    if (posAlumno == -1) //No existe el alumno
      console.log("El alumno " + alumno + " no Existe");
    else { //El alumno existe
      let asignatura = prompt("Asignatura: ");  //Pedimos por los datos de la asignatura
      if (asignatura == null) asignatura = ""

      let nota = Number(prompt("Nota: "));
      if (nota == null) nota = 0

      //Buscamos si esa asignatura existe en las calificaciones del alumno
      let posAsignatura = this.alumnos[posAlumno].calificaciones.findIndex(c => c.asignatura == asignatura);
      if (posAsignatura == -1) { //No existe la asignatura, añadimos la asignatura y su nota a las calificaciones del alumno
        console.log("Creando asignatura");
        let unaAsignatura = { 'asignatura': asignatura, 'nota': nota };
        this.alumnos[posAlumno].calificaciones.push(unaAsignatura);
      }
      else {  //Existe la asignatura, le cambiamos la nota
        console.log("Cambiando nota");
        this.alumnos[posAlumno].calificaciones[posAsignatura].nota = nota;
      }
      console.log(this.alumnos);
    }
  }

}
