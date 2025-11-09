import { Component } from '@angular/core';
import { ServicioArticulo } from '../../../services/servicio-articulo';
import { Articulo, ARTICULOS } from '../../articulo';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-articulos',
  imports: [
    RouterLink
  ],
  templateUrl: './lista-articulos.html',
  styleUrl: './lista-articulos.css',
})
export class ListaArticulos {
  articulos: Articulo[] = ARTICULOS;

  constructor(
    private servicioArticulo: ServicioArticulo,
    private router: Router

  ) { }

  ngOnInit() {
    this.servicioArticulo.getArticulos()
  }

  newArticulo() {
    this.router.navigate(['/nuevo']);
  }
}
