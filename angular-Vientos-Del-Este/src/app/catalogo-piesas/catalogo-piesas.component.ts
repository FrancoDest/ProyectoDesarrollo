import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Partes } from '../Partes';
import{ComponentService} from'../Servicios/part.service';

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

  constructor(private Servicio : ComponentService,
    public modal:NgbModal
    ){
  }

 ngOnInit(): void {
   this.getPartes();
 }
 getPartes() : void{
  this.Servicio.getPart().subscribe(partList => this.partList = partList);
 }
 crearParte(){
  let nuevaParte = new Partes(this.nuevaCategoria,this.nuevaAltura,this.nuevaRE,this.nuevaMat);
  this.partList.push(nuevaParte);
  this.Servicio.createPart(nuevaParte);
  this.vaciar();
 }
 vaciar(){
  this.nuevaCategoria="";
  this.nuevaAltura=0;
  this.nuevaRE=0;
  this.nuevaMat="";
 }
 deleteParte(parte : Partes){
  this.Servicio.deletePart(parte);
  this.partList = this.partList.filter(p=>p._id != parte._id);
 }
 controladorCreacion(){
  this.crearParte();
}
 

}
