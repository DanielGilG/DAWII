import { Component, Input } from '@angular/core';
import data from '../../items/articulos.json' assert { type: 'json' };

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.html',
  styleUrl: './articulo.scss'
})
export class Articulo {
  items = data;
  @Input() productoIndex : number = 0;

  id = this.items[this.productoIndex].id;
  nombre = this.items[this.productoIndex].nombre;
  categoria = this.items[this.productoIndex].categoria;
  descripcion = this.items[this.productoIndex].descripcion;
  unidades = this.items[this.productoIndex].unidades;
  precio = this.items[this.productoIndex].precio;
}
