import { Component, Input } from '@angular/core';
import data from '../../items/articulos.json' assert { type: 'json' };

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.html',
  styleUrl: './articulo.scss'
})
export class Articulo {
  @Input() productoId: any;

  items = data;
  id: any;
  nombre: any;
  categoria: any;
  descripcion: any;
  unidades: any;
  precio: any;

  ngOnInit() {
    console.log('Producto ID recibido:', this.productoId);
    console.log('Items:', this.items);

    // Find the item with the matching id
    const producto = this.items.find(item => item.id === this.productoId);

    if (producto) {
      console.log('Producto encontrado:', producto);

      this.id = producto.id;
      this.nombre = producto.nombre;
      this.categoria = producto.categoria;
      this.descripcion = producto.descripcion;
      this.unidades = producto.unidades;
      this.precio = producto.precio;

      console.log('Variables asignadas:');
      console.log('ID:', this.id);
      console.log('Nombre:', this.nombre);
      console.log('Categoría:', this.categoria);
      console.log('Descripción:', this.descripcion);
      console.log('Unidades:', this.unidades);
      console.log('Precio:', this.precio);
    } else {
      console.warn('❌ No se encontró ningún producto con el id:', this.productoId);
    }
  }
}
