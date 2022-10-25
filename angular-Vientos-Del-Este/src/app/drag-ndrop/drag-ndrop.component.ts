import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PARTES } from '../Almacenamiento/ListaDePartes';
import { Partes } from '../Partes';
import { IPartes } from '../IPartes';

@Component({
  selector: 'app-drag-ndrop',
  templateUrl: './drag-ndrop.component.html',
  styleUrls: ['./drag-ndrop.component.css']
})
export class DragNDropComponent {

  todo: any[] = PARTES;
  enProceso: Partes[] = [];


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
          case IPartes.A:
            lugarObjetivo = 0;
            break;
          case IPartes.C:
            lugarObjetivo = 1;
            if(event.container.data.length == 1 && event.container.data[event.currentIndex].Categoria == IPartes.B){//Arreglo en el caso de que se ponga la base antes del cuerpo
              lugarObjetivo = 0;
            }
            break;
          case IPartes.B:
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

