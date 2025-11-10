import { Component } from '@angular/core';
import { Articulo } from '../../articulo';

@Component({
  selector: 'app-fetch-component',
  imports: [],
  templateUrl: './fetch-component.html',
  styleUrl: './fetch-component.css',
})
export class FetchComponent {
  articulos!: Articulo
  url: string = 'http://localhost:3000/articulos';

  async ngOnInit() {
    try {
      let response = await fetch(this.url);
      let datos = await response.json();
      if (!response.ok) throw new Error('Error');
      this.articulos = datos;
    } catch (error) {
      console.log(error);
    }
  }
}
