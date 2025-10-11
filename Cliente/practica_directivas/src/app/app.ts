import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulo } from './components/articulo/articulo';
import data from './items/articulos.json' assert { type: 'json' };

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Articulo
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  items = data;
  //protected readonly title = signal('practica_directivas');
}
