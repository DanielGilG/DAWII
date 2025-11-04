import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ServicioLogin } from '../../../services/servicio-login';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  log = inject(ServicioLogin);
  nombre!:string;
  subscription !: Subscription;
  subscription2 !: Subscription;
  router = inject(Router);
  isLogged!: Boolean 

  ngOnInit() {
    this.subscription = this.log.name$.subscribe(
      {
        next: dato => this.nombre = dato,
        error: err => console.log('Error en el observable del nombre: ', err),
        complete: () => console.log('Observable del nombre completado')
      }
    );
    this.subscription2 = this.log.logged$.subscribe(
      {
        next: dato => this.isLogged = dato,
        error: err => console.log('Error en el observable del login: ', err),
        complete: () => console.log('Observable del login completado')
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  desconectar() {
    this.log.desconectar();
    this.router.navigate(['/']);   
  }
}