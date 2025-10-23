import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio.component';
import { Articulos } from './components/articulos/articulos.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path: '', component: Inicio },
    {path: 'articulos', component: Articulos },
    {path: '**', component: ErrorComponent },
];