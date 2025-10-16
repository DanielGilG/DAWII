import { Component } from '@angular/core';
import data from '../../items/array.json'
import { Trabajador } from '../trabajador/trabajador';

@Component({
  selector: 'app-trabajadores',
  imports: [Trabajador],
  templateUrl: './trabajadores.html',
  styleUrl: './trabajadores.css'
})
export class Trabajadores {
  trabajadores = data;


  sumaVoto(nombre:string){
    let voto = this.trabajadores.find(t => t.nombre === nombre);
    if(voto){
      voto.votos++;
    }
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
