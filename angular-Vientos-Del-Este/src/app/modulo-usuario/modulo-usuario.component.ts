import { Component, OnInit } from '@angular/core';
import { ListaDeUsuariosService } from '../lista-de-usuarios.service';
import { Usuarios } from '../Usuarios';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modulo-usuario',
  templateUrl: './modulo-usuario.component.html',
  styleUrls: ['./modulo-usuario.component.css']
})
export class ModuloUsuarioComponent implements OnInit {
  userList : Usuarios[] = [];
  closeResult = '';

  constructor(private Servicio : ListaDeUsuariosService,
     public modal:NgbModal) {
   }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios() : void{
    this.Servicio.getUser().subscribe(userList => this.userList = userList);
  }
  open(content : any) {
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
