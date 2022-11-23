import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Partes } from '../Partes';
import { PartsService } from '../Servicios/parts.service';

@Component({
  selector: 'app-catalogo-piesas',
  templateUrl: './catalogo-piesas.component.html',
  styleUrls: ['./catalogo-piesas.component.css']
})
export class CatalogoPiesasComponent implements OnInit {
  partList : Partes[]=[];

  closeResult = '';

  nuevaCategoria="";

  nuevaAltura=0;

  nuevaRE=0;

  nuevaMat="";

  constructor(//private Servicio : ComponentService,
    public modal:NgbModal,public Service : PartsService
    ){
  }

 ngOnInit(): void {
   this.getPartes();
 }
 getPartes() : void{
  this.Service.getPart().subscribe(partList => this.partList = partList);
 }
 crearParte(){
  let nuevaParte = new Partes(this.nuevaCategoria,this.nuevaAltura,this.nuevaRE,this.nuevaMat);
  this.Service.addPart(nuevaParte).subscribe(pieza => {
    this.partList.push(nuevaParte);
  })
  this.vaciar();
 }
 vaciar(){
  this.nuevaCategoria="";
  this.nuevaAltura=0;
  this.nuevaRE=0;
  this.nuevaMat="";
 }
 deleteParte(parte : Partes){
  this.Service.deletePart(parte).subscribe();
  this.partList = this.partList.filter(p=>p != parte);
 }
 controladorCreacion(){
  this.crearParte();
}
 

}
