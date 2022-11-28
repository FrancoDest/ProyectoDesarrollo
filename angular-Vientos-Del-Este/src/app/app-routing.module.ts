import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoPiesasComponent } from './catalogo-piesas/catalogo-piesas.component';
import { LoginComponent } from './login/login.component';
import { ModuloUsuarioComponent } from './modulo-usuario/modulo-usuario.component';
import { DragNDropComponent } from './drag-ndrop/drag-ndrop.component';
import { MolinoListasComponent } from './molino-listas/molino-listas.component';


const routes: Routes = [ 
  { path: 'Login' , component: LoginComponent},
  { path: 'Usuarios' , component: ModuloUsuarioComponent},
  { path: 'Armador', component: DragNDropComponent},
  { path: '' , component: LoginComponent},
  { path: 'Piezas', component: CatalogoPiesasComponent},
  { path: 'Molino', component: MolinoListasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
