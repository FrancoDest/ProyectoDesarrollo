import { Injectable } from '@angular/core';
import { USUARIOS } from './ListaDeUsuarios';
import { Observable, of } from 'rxjs';
import { Usuarios } from './Usuarios';

@Injectable({
  providedIn: 'root'
})
export class ListaDeUsuariosService {

  constructor() { }

  getUser() : Observable<Usuarios[]>{
    const usuarios = of(USUARIOS);
    return usuarios;
  }

}
