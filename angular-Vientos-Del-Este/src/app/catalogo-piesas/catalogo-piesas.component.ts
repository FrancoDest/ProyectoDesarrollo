import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Partes } from '../Partes';
import{ComponentServiceService} from'../component-service.service';
import{PARTES} from '../Almacenamiento/ListaDePartes';

@Component({
  selector: 'app-catalogo-piesas',
  templateUrl: './catalogo-piesas.component.html',
  styleUrls: ['./catalogo-piesas.component.css']
})
export class CatalogoPiesasComponent implements OnInit {
  partList : Partes[]=PARTES;
  closeResult = '';
  

  constructor(private Servicio : ComponentServiceService,
    public modal:NgbModal) { }

  ngOnInit(): void {
    //this.getPartes();

    //yo??
    //this.deletePartes();
  }

  getPartes(): void{
    //this.Servicio.getParte().subscribe(partList => this.partList=partList);
  }

 delete(Id:Number):void{
   // this.Servicio.deletParte(Number);
  
 }

}
