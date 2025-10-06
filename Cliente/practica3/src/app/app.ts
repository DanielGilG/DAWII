import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulo } from "./components/articulo/articulo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Articulo
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
}