import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsListarImgComponent } from './cs-listar-img/cs-listar-img.component';
import { CsRegistrarImgComponent } from './cs-registrar-img/cs-registrar-img.component';
import { CsVisualizarImgComponent } from './cs-visualizar-img/cs-visualizar-img.component';
import { CsinstruccionesImgComponent } from './csinstrucciones-img/csinstrucciones-img.component';

const routes: Routes = [
  {path: 'imagenes', component: CsListarImgComponent},
  {path: '', redirectTo: 'imagenes', pathMatch: 'full'},
  {path:'listar_imagen', component: CsVisualizarImgComponent},
  {path: 'guardar_imagen', component: CsRegistrarImgComponent},
  {path: 'instrucciones', component: CsinstruccionesImgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
