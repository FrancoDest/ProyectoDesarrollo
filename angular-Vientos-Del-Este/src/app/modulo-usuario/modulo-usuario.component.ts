import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../Usuarios';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../Servicios/usuarios.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modulo-usuario',
  templateUrl: './modulo-usuario.component.html',
  styleUrls: ['./modulo-usuario.component.css']
})
export class ModuloUsuarioComponent implements OnInit {
  userList : Usuarios[] = [];
  closeResult = '';

  nombre="";
  clase = "";

  usuarioTemp = new Usuarios("","","");

  constructor(private Servicio : UsuariosService,
     public modal:NgbModal
     ){
   }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios() : void{
   this.Servicio.getUser().subscribe(userList => (this.userList = userList.filter(p=> p.Estado == true)));
   ;
  }
  createUsuario(){
    let nuevoUsuario = new Usuarios(this.nombre,this.clase,this.nombre);
    this.userList.push(nuevoUsuario);
    this.Servicio.createUser(nuevoUsuario);
    this.vaciar();
  }
  vaciar(){
    this.nombre="";
    this.clase = "";
  }
  deleteParte(user : Usuarios){
    this.Servicio.deleteUser(user);
    this.userList = this.userList.filter(u=>u._id != user._id);
   }
  controladorCreacion(){
    if (this.clase!= "" && this.nombre != ""){
      this.createUsuario();
    }
  }
  updateClass(user : Usuarios){
    if (this.clase!= ""){
      user.Clase = this.clase;
      this.Servicio.UpdateUser(user);
      this.vaciar();
    }
  }
  modificar(user : Usuarios){
    this.usuarioTemp = user;
  }

}
