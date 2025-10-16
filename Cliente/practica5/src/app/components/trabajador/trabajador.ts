import { Component, Input } from '@angular/core';
import data from '../../items/array.json'

@Component({
  selector: 'app-trabajador',
  imports: [],
  templateUrl: './trabajador.html',
  styleUrl: './trabajador.css'
})
export class Trabajador {
  trabajadores = data;
  @Input() trabajador!:trabajadores
}
