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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModuloUsuarioComponent,
    ModuloBienvenidaComponent,
    ModuloMolinoComponent,
    NavBarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
