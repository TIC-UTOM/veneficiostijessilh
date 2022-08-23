import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventosComponent } from './inventos/inventos.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { RamasComponent } from './ramas/ramas.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { FuturoticComponent } from './futurotic/futurotic.component';

@NgModule({
  declarations: [
    AppComponent,
    InventosComponent,
    PersonajesComponent,
    RamasComponent,
    InicioComponent,
    MenuComponent,
    FuturoticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
