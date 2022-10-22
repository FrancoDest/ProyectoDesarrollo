import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoPiesasComponent } from './catalogo-piesas/catalogo-piesas.component';
import { LoginComponent } from './login/login.component';
import { ModuloBienvenidaComponent } from './modulo-bienvenida/modulo-bienvenida.component';
import { ModuloMolinoComponent } from './modulo-molino/modulo-molino.component';
import { ModuloUsuarioComponent } from './modulo-usuario/modulo-usuario.component';

const routes: Routes = [ 
  { path: 'Login' , component: LoginComponent},
  { path: 'Bienvenida' , component: ModuloBienvenidaComponent},
  { path: 'Molino' , component: ModuloMolinoComponent},
  { path: 'Usuarios' , component: ModuloUsuarioComponent},
  { path: '' , component: ModuloUsuarioComponent},
  { path: 'Piezas', component: CatalogoPiesasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
