import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaDatosComponent } from './Prueba/prueba-datos/prueba-datos.component';

const routes: Routes = [
  { path: '', redirectTo: '/prueba', pathMatch: 'full' },
  { path: 'prueba', component: PruebaDatosComponent },

  { path: '**', redirectTo: '/prueba', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
