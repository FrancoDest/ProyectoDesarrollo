import { Component, OnInit } from '@angular/core';
import { ListaDeUsuariosService } from '../lista-de-usuarios.service';
import { Usuarios } from '../Usuarios';

@Component({
  selector: 'app-modulo-usuario',
  templateUrl: './modulo-usuario.component.html',
  styleUrls: ['./modulo-usuario.component.css']
})
export class ModuloUsuarioComponent implements OnInit {

  userList : Usuarios[] = [];
  constructor(private Servicio : ListaDeUsuariosService) {
   }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios() : void{
    this.Servicio.getUser().subscribe(userList => this.userList = userList);
  }

}
