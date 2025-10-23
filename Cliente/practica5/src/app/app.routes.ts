import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio.component';
import { Articulos } from './components/articulos/articulos.component';

export const routes: Routes = [
    {path: '', component: Inicio },
    {path: 'articulos', component: Articulos },
    {path: '**', component: Error },
];