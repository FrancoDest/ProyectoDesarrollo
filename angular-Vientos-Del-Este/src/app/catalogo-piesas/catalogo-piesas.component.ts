import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Partes } from '../Partes';
import{ComponentServiceService} from'../component-service.service';

@Component({
  selector: 'app-catalogo-piesas',
  templateUrl: './catalogo-piesas.component.html',
  styleUrls: ['./catalogo-piesas.component.css']
})
export class CatalogoPiesasComponent implements OnInit {
  partList : Partes[]=[];
  closeResult = '';
  

  constructor(private Servicio : ComponentServiceService,
    public modal:NgbModal) { }

  ngOnInit(): void {
    this.getPartes();
  }

  getPartes(): void{
    this.Servicio.getParte().subscribe(partList => this.partList=partList);
  }

}
