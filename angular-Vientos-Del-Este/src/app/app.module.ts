import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModuloUsuarioComponent } from './modulo-usuario/modulo-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModuloBienvenidaComponent } from './modulo-bienvenida/modulo-bienvenida.component';
import { ModuloMolinoComponent } from './modulo-molino/modulo-molino.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragNDropComponent } from './drag-ndrop/drag-ndrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CatalogoPiesasComponent } from './catalogo-piesas/catalogo-piesas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModuloUsuarioComponent,
    ModuloBienvenidaComponent,
    ModuloMolinoComponent,
    NavBarComponent,
    DragNDropComponent,
    CatalogoPiesasComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
