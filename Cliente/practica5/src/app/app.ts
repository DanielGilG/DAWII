import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Trabajadores } from './components/trabajadores/trabajadores';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Trabajadores
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica5');
}
