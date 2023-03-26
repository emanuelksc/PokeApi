import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PruebaDatosComponent } from './Prueba/prueba-datos/prueba-datos.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListasComponent } from './Prueba/listas/listas.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, PruebaDatosComponent, ListasComponent],

  bootstrap: [AppComponent],
})
export class AppModule {}
