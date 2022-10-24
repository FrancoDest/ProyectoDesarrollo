import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { USUARIOS } from '../Almacenamiento/ListaDeUsuarios';
import { Usuarios } from '../Usuarios';

@Component({
  selector: 'app-drag-ndrop',
  templateUrl: './drag-ndrop.component.html',
  styleUrls: ['./drag-ndrop.component.css']
})
export class DragNDropComponent {

  todo = USUARIOS;

  done = USUARIOS;

  drop(event: CdkDragDrop<Usuarios[]>) {

    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
