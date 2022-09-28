import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CsListarImgComponent } from './cs-listar-img/cs-listar-img.component';
import { CsRegistrarImgComponent } from './cs-registrar-img/cs-registrar-img.component';
import { CsVisualizarImgComponent } from './cs-visualizar-img/cs-visualizar-img.component';
import { CsinstruccionesImgComponent } from './csinstrucciones-img/csinstrucciones-img.component';


@NgModule({
  declarations: [
    AppComponent,
    CsListarImgComponent,
    CsRegistrarImgComponent,
    CsVisualizarImgComponent,
    CsinstruccionesImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
