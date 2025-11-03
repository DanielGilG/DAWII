import { CanActivateFn } from '@angular/router';

export const guardaNombreGuard: CanActivateFn = (route, state) => {
  let nombre = prompt("Introduzca su nombre para acceder a la aplicación:");

  if (nombre === "Cesar"){
    return true;
  }else{
    return false;
  }
};
