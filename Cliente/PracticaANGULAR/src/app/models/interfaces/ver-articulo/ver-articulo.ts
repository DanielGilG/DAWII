import { Component, Input } from '@angular/core';
import { Articulo, ARTICULOS } from '../../articulo';
import { ServicioArticulo } from '../../../services/servicio-articulo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ver-articulo',
  imports: [
    RouterLink
  ],
  templateUrl: './ver-articulo.html',
  styleUrl: './ver-articulo.css',
})
export class VerArticulo {
  @Input() id! : string;

  articulos: Articulo[] = ARTICULOS;

  constructor(private servicioArticulo: ServicioArticulo) {}

  ngOnInit() {
    this.servicioArticulo.getArticulo(this.id)
  }
}
