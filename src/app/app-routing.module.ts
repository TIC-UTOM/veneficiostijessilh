import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventosComponent } from './inventos/inventos.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { RamasComponent } from './ramas/ramas.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { FuturoticComponent } from './futurotic/futurotic.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: InicioComponent},
  {path: 'ramas', component: RamasComponent},
  {path: 'personajes', component: PersonajesComponent},
  {path: 'inventos', component: InventosComponent},
  {path: 'futurotic', component: FuturoticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
