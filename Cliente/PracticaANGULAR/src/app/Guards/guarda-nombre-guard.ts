import { CanActivateFn } from '@angular/router';
import { ServicioLogin } from '../services/servicio-login';

export const guardaNombreGuard: CanActivateFn = (route, state) => {
  const servicioLogin = new ServicioLogin();
  if (servicioLogin.isLogged) {
    return true;
  } else {
    console.log("Acceso denegado. Usuario no autenticado.");
    return false;
  }
};
