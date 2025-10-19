import { Component } from '@angular/core';
import { Trabajador } from '../trabajador/trabajador';
import { TRABAJADORES } from '../../model/trabajador';

@Component({
  selector: 'app-trabajadores',
  imports: [Trabajador],
  templateUrl: './trabajadores.html',
  styleUrl: './trabajadores.css'
})
export class Trabajadores {
  trabajadores = TRABAJADORES;

  sumaVoto(nombre:string){
    this.trabajadores.find(t => t.nombre === nombre)!.votos++;
  }

  restaVoto(nombre:string){
    if (this.trabajadores.find(t => t.nombre === nombre)!.votos > 0) {
      this.trabajadores.find(t => t.nombre === nombre)!.votos--;
    }
  }

  borrar(nombre:string){
    this.trabajadores.splice(this.trabajadores.findIndex(t => t.nombre === nombre));
  }

  //evento BorrarTrabajador desde hijo
}
