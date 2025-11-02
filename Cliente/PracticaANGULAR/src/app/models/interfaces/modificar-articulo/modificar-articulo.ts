import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Articulo } from '../../articulo';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServicioArticulo } from '../../../services/servicio-articulo';


@Component({
  selector: 'app-modificar-articulo',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './modificar-articulo.html',
  styleUrl: './modificar-articulo.css',
})
export class ModificarArticulo {
  articulo!: Articulo
  form!: FormGroup;

  constructor(
    private miRutaAtiva: ActivatedRoute,
    private miservicioArticulo: ServicioArticulo,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.miRutaAtiva
      .params
      .subscribe(params => this.articulo = this.miservicioArticulo.getArticulo(params['id'])!);

    this.form = this.fb.group({
      nombre: [this.articulo.nombre],
      descripcion: [this.articulo.descripcion],
      precio: [this.articulo.precio]
    });
  }

  modify() {
    const nuevoArticulo: Articulo = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      precio: this.form.value.precio,
      unidades: this.form.value.unidades
    };
    this.miservicioArticulo.postArticulo(nuevoArticulo);
    console.log(nuevoArticulo);
  }
}
