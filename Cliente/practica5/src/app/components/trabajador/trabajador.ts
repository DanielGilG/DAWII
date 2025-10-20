import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TRABAJADORES } from '../../model/trabajador';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.html',
  styleUrls: ['./trabajador.css']
})
export class Trabajador {
  @Input() trabajador!: EventEmitter<number>[];

  like(id: number) {
    this.trabajador[id].emit(id);
  }
}
