import { Component } from '@angular/core';
import { ServicioArticulo } from '../../../services/servicio-articulo';
import { Articulo, ARTICULOS } from '../../articulo';


@Component({
  selector: 'app-lista-articulos',
  imports: [],
  templateUrl: './lista-articulos.html',
  styleUrl: './lista-articulos.css',
})
export class ListaArticulos {
  articulos: Articulo[] = ARTICULOS;

  constructor(private servicioArticulo: ServicioArticulo) {}

  ngOnInit() {
    this.servicioArticulo.getArticulos()
  }

}
