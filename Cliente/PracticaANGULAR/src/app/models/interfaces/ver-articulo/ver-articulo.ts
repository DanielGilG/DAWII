import { Component} from '@angular/core';
import { Articulo} from '../../articulo';
import { ServicioArticulo } from '../../../services/servicio-articulo';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-articulo',
  imports: [
    RouterLink
  ],
  templateUrl: './ver-articulo.html',
  styleUrl: './ver-articulo.css',
})
export class VerArticulo {
  articulo!:Articulo

  constructor(
    private miRutaAtiva: ActivatedRoute,
    private servicioArticulo: ServicioArticulo) {}

  ngOnInit() {
    this.miRutaAtiva
    .params
    .subscribe(params=>this.articulo=this.servicioArticulo.getArticulo(params['id'])!);
  }
}
