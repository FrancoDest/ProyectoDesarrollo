import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuarios } from './Usuarios';
import { USUARIOS } from './Almacenamiento/ListaDeUsuarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccesoABDService {

  private UsuariosUrl = 'localhost:3000/partes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }
  
  getUser() : Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.UsuariosUrl);
  }
  addUser(user: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.UsuariosUrl, user, this.httpOptions);
  }
  
  /** DELETE: delete the hero from the server */
  deleteUser(id: number): Observable<Usuarios> {
    const url = `${"api/Usuarios"}/${id}`;
    return this.http.delete<Usuarios>(url, this.httpOptions);
  }

  updateUser(user: Usuarios): Observable<any> {
    return this.http.put(this.UsuariosUrl, user, this.httpOptions);
}
}