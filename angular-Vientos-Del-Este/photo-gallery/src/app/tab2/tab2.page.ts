import { Component } from '@angular/core';
import { MOLINOS } from   './../../../../src/app/Almacenamiento/ListaDeMolinos';
import { Molino } from './../../../../src/app/Molino';
import{ComponentServiceService} from './../../../../src/app/component-service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  molinoList : Molino[]=MOLINOS;
  closeResult = '';

  constructor() {}
  ngOnInit(): void {
    //this.getMolino();

    //yo??
    //this.deleteMolino();
  }
  getPartes(): void{
    //this.Servicio.getMolino().subscribe(molinoList => this.molinoList=molinoList);
  }

 delete(Id:Number):void{
   // this.Servicio.deletMolino(Number);
  
 }

}
