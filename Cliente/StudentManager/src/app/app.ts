import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Manager } from "./model/manager/manager";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Manager],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  /*protected readonly title = signal('StudentManager');*/
}
