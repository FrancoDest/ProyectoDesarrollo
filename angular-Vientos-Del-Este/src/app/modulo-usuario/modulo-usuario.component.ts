import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../Usuarios';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from '../Servicios/users.service';

@Component({
  selector: 'app-modulo-usuario',
  templateUrl: './modulo-usuario.component.html',
  styleUrls: ['./modulo-usuario.component.css']
})
export class ModuloUsuarioComponent implements OnInit {
  userList: Usuarios[] = [];
  closeResult = '';

  nombre = "";
  clase = "";

  usuarioTemp: any;

  constructor(private Servicio: UsersService,
    public modal: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(): void {
    this.Servicio.getUser().subscribe(userList => (this.userList = userList.filter(p => p.Estado == true)));
    ;
  }
  createUsuario() {
    if (this.nombre != "" && this.clase != "") {
      let nuevoUsuario = new Usuarios(this.nombre, this.clase, this.nombre);
      this.Servicio.createUser(nuevoUsuario).subscribe(usuario => { this.userList.push(nuevoUsuario); })
      this.vaciar();
    }
  }
  vaciar() {
    this.nombre = "";
    this.clase = "";
  }
  deleteUser(user: Usuarios) {
    this.Servicio.deleteUser(user).subscribe();
    this.userList = this.userList.filter(p => p != user);
  }
  controladorCreacion() {
    if (this.clase != "" && this.nombre != "") {
      this.createUsuario();
    }
  }
  updateClass(user: Usuarios) {
    let usuarioT = this.userList.filter(p => p == user);
    usuarioT[0].Clase = this.clase;
    this.Servicio.updateUser(usuarioT[0]).subscribe();
  }
  modificarUsuario(user: Usuarios) {//Utilizo la funcion en el html para guardar el usuario que quiero modificar antes de utilizar el modal, para recordarlo al cerrarlo
    this.usuarioTemp = user;
  }

}
