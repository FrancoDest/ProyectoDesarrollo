import { Component, OnInit } from '@angular/core';
import { AccesoABDService } from '../Usuarios.service';
import { Usuarios } from '../Usuarios';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { USUARIOS } from '../Almacenamiento/ListaDeUsuarios';

@Component({
  selector: 'app-modulo-usuario',
  templateUrl: './modulo-usuario.component.html',
  styleUrls: ['./modulo-usuario.component.css']
})
export class ModuloUsuarioComponent implements OnInit {
  userList : Usuarios[] = USUARIOS;
  closeResult = '';

  constructor(private Servicio : AccesoABDService,
     public modal:NgbModal) {
   }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios() : void{
    this.Servicio.getUser().subscribe(userList => this.userList = userList);
  }
}
