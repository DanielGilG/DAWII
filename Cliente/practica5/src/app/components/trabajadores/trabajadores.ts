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
    let voto = this.trabajadores.find(t => t.nombre === nombre);
    if(voto && voto.votos > 0){
      voto.votos--;
    }
  }

  borrar(nombre:string){
    const index = this.trabajadores.findIndex(t => t.nombre === nombre);
    if (index !== -1) {
      this.trabajadores.splice(index, 1);
    }
  }

  //evento BorrarTrabajador desde hijo
}
