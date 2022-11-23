import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Partes } from './../../../../src/app/Partes';
import{PARTES} from './../../../../src/app/Almacenamiento/ListaDePartes';
import { ComponentServiceService } from './../../../../src/app/component-service.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  partList : Partes[]=PARTES;
  closeResult = '';
  

  constructor() {}

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
