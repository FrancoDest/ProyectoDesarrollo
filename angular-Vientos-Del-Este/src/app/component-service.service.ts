import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Partes } from './Partes';
import { PARTES } from './Almacenamiento/ListaDePartes';

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  constructor() { }

  getParte():Observable<Partes[]>{
    const Partes = of(PARTES);
    return Partes;

  }

}
