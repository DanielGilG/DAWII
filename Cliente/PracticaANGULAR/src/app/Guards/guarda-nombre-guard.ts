import { CanActivateFn } from '@angular/router';
import { ServicioLogin } from '../services/servicio-login';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const guardaNombreGuard: CanActivateFn = (route, state) => {
  let log = inject(ServicioLogin);
  let router = inject(Router);

  if (log.isLogged) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }

};