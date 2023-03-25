import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from './Prueba/listas/listas.component';
import { PruebaDatosComponent } from './Prueba/prueba-datos/prueba-datos.component';

const routes: Routes = [
  { path: '', redirectTo: '/prueba', pathMatch: 'full' },
  { path: 'prueba', component: PruebaDatosComponent },
  { path: 'listas', component: ListasComponent },
  { path: '**', redirectTo: '/prueba', pathMatch: 'full' },
];
/*
{ 
  path: '**',          // esta ruta coincide con cualquier ruta que no haya sido definida anteriormente
  redirectTo: '/prueba',  // redirige a la ruta '/prueba'
  pathMatch: 'full'    // especifica que la ruta completa debe coincidir para que se produzca la redirección
}*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
