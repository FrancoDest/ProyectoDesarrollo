import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuarios } from './Usuarios';
import { USUARIOS } from './ListaDeUsuarios';
@Injectable({
  providedIn: 'root'
})
export class AccesoABDService {

  constructor() { }
  
  getUser() : Observable<Usuarios[]>{
    const usuarios = of(USUARIOS);
    return usuarios;
  }
}
