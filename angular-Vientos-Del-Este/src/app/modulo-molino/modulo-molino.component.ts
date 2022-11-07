import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Partes } from '../Partes';
import{ComponentServiceService} from'../component-service.service';
import{PARTES} from '../Almacenamiento/ListaDePartes';
import { MOLINOS } from '../Almacenamiento/ListaDeMolinos';
import { Molino } from '../Molino';
import { ThisReceiver } from '@angular/compiler';





@Component({
  selector: 'app-modulo-molino',
  templateUrl: './modulo-molino.component.html',
  styleUrls: ['./modulo-molino.component.css']
})
export class ModuloMolinoComponent implements OnInit {

  posicion: number=0; //creo un numero con valor zero para que funcione como indicador de la poscion del array de molinos
  mayor:number=MOLINOS.length-1; //determino el tamaño del array de molinos
  actual: Molino=MOLINOS[this.posicion];//eligo como el molino que se muestra actualmente al molino en la posccion 0 del array

  constructor() { }

  ngOnInit(): void {
  }
  nextMolino():void{//lo que ase el boton de siguiente
    if(this.posicion==this.mayor)
      {
        this.posicion=0;//si la poscion actual es la ultima, devuelvo la poscion a zero, para que sea circular
        
       
        
      }else{
        this.posicion++; //si todavia hay mas molino adelante, aumento la posicion
        
        
      }
      this.actual=MOLINOS[this.posicion];//cambio el valor de actual al nuevo molino, no cambia en pantalla si no ago esto

  }
  prevMolino():void{
    if(this.posicion==0)
    {
      this.posicion=this.mayor;//si la poscicon actual es zero coloco el ultimo molino
      
      
    }else{
      this.posicion--; //si no es zero voy al molino anterior
      
     
    }
    this.actual=MOLINOS[this.posicion];//"pushe"el mlino actual
  }
  aprovar(): void{
    

  }
  rechazar(): void{

  }

}
