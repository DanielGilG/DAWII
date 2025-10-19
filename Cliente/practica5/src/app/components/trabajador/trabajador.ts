import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TRABAJADORES } from '../../model/trabajador';

@Component({
  selector: 'app-trabajador',
  imports: [Trabajador],
  templateUrl: './trabajador.html',
  styleUrl: './trabajador.css'
})
export class Trabajador {
  @Input() trabajador!:Trabajador[];

  like(id:number){
    this.likeTrabajador.emit(id)
  }
}
