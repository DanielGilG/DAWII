import { CanActivateFn } from '@angular/router';
import { ServicioLogin } from '../services/servicio-login';

export const guardaNombreGuard: CanActivateFn = (route, state) => {
  const servicioLogin = new ServicioLogin();
  if (servicioLogin.isLogged === true) {
    console.log("VALOR:" + servicioLogin.isLogged);
    return true;
  } else {
    console.log("VALOR:" + servicioLogin.isLogged);
    console.log("Acceso denegado por Guarda");
    return false;
  }
};