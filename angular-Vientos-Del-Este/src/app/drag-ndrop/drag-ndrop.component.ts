import { Component , OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Partes } from '../Partes';
import { ComponentService } from '../Servicios/part.service';
import { WindmillsService} from '../Servicios/windmills.service';
import { Molino } from '../Molino';
@Component({
  selector: 'app-drag-ndrop',
  templateUrl: './drag-ndrop.component.html',
  styleUrls: ['./drag-ndrop.component.css']
})
export class DragNDropComponent implements OnInit{

  todo: any[] = [];
  enProceso: Partes[] = [];

  nombre = "";
  descripcion="";

  constructor(private ServicioM : WindmillsService, private ServicioP : ComponentService){
  }

 ngOnInit(): void {
   this.getPartes();
 }
 getPartes(){
  this.ServicioP.getPart().subscribe(partList => this.todo = partList);
 }
  submit(){
    //if(this.nombre != "" && this.descripcion != "" && this.enProceso.length == 3){
      let nuevoMolino = new Molino(this.enProceso[0],this.enProceso[1],this.enProceso[2], "Sopas", "Sopass")
      this.ServicioM.createWindmill(nuevoMolino);
      this.vaciarParametros();
      this.vaciarLista();
    //}

  }
  vaciarParametros(){
    this.nombre="";
    this.descripcion="";
  }
  vaciarLista(){
    let TamañoLista= this.enProceso.length -1 ;

    while( TamañoLista != -1){
      this.todo.push(this.enProceso[TamañoLista]);
      TamañoLista= TamañoLista - 1;
    }

    TamañoLista= this.enProceso.length -1;

    while( TamañoLista != -1){
      this.enProceso.pop();
      TamañoLista= TamañoLista - 1;
    }
    
  }

  drop(event: CdkDragDrop<Partes[]>) {

    if (event.container.data == this.enProceso) {//Miro si estoy operando piezas hacia la box en proceso

      let estaAdentro: boolean = false;

      this.enProceso.forEach(parte => {
        if (event.previousContainer.data[event.previousIndex].Categoria === parte.Categoria) {//chequeo si el tipo de la pieza que quiero mover ya ha sido agregado anteriormente a la box en proceso
          estaAdentro = true;
        }

      });
      if (!estaAdentro) {//En caso de no estar agregado
        let lugarObjetivo = 0;
        switch ((event.previousContainer.data[event.previousIndex]).Categoria) {//dependiendo de que tipo sea le asigno una posicion.
          case "Aspa":
            lugarObjetivo = 0;
            break;
          case "Cuerpo":
            lugarObjetivo = 1;
            if(event.container.data.length == 1 && event.container.data[event.currentIndex].Categoria == "Base"){//Arreglo en el caso de que se ponga la base antes del cuerpo
              lugarObjetivo = 0;
            }
            break;
          case "Base":
            lugarObjetivo = 2;
            break;
        }
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          lugarObjetivo,
        );
      }
    } else {//En caso de no estar en la box de en proceso
      if (event.previousContainer === event.container) { //En caso de que se muevan piezas en el mismo box

        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); //Funcion para mover items dentro del box
      } else {
        transferArrayItem(//funcion para mover items a la otra box
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
  }
}

