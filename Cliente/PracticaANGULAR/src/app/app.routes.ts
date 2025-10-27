import { Routes } from '@angular/router';
import { Inicio } from './models/interfaces/inicio/inicio';
import { ListaArticulos } from './models/interfaces/lista-articulos/lista-articulos';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'articulos', component: ListaArticulos}
];
