import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { Partes } from './Partes';
import { PARTES } from './Almacenamiento/ListaDePartes';

///Todo esto deveria estgar en el api??///

@Injectable({
  providedIn: 'root'
  
})
export class ComponentServiceService {

  constructor() { }

  getParte():Observable<Partes[]>{
    const Partes = of(PARTES);
    return Partes;

  }
  deletParte():void{
    PARTES.forEach
  }
}
