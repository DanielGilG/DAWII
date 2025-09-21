import { Component, input} from '@angular/core';
import data from '../../items/articulos.json' assert { type: 'json' };

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.html',
  styleUrl: './articulo.scss'
})
export class Articulo {
  items = data;

  number = input(0);

  id = this.items.at(this.number())?.id;
  nombre = this.items.at(this.number())?.nombre;
  descripcion = this.items.at(this.number())?.descripcion;
  precio = this.items.at(this.number())?.precio;
  unidades = this.items.at(this.number())?.unidades;
}