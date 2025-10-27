import { Injectable } from '@angular/core';
import { Articulo, ARTICULOS } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ServicioArticulo {
  constructor() { }

  articulos:Articulo[]=ARTICULOS;

  getArticulos(){
    return this.articulos;
  }

  getArticulo(id:string){
    return this.articulos.find(articulo => articulo.id === id);
  }

  postArticulo(articulo: Articulo){
    this.articulos.push(articulo);
  }

  putArticulo(articulo: Articulo){
    const index = this.articulos.findIndex(a => a.id === articulo.id);
    if (index !== -1) {
      this.articulos[index] = articulo;
    }
  }

  deleteArticulo(id:string){
    const index = this.articulos.findIndex(a => a.id === id);
    if (index !== -1) {
      this.articulos.splice(index, 1);
    }
  }
}
