import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../Usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private UsuariosUrl= 'http://localhost:5000/Usuarios'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** GET Usuarios from the server **/
  getUser(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.UsuariosUrl)

  }

  createUser(usuario : Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.UsuariosUrl, usuario, this.httpOptions);
  }
  deleteUser(usuario : Usuarios): Observable<Usuarios> {
    let _id = usuario._id;
    const url = `${this.UsuariosUrl}/${_id}`;
    return this.http.delete<Usuarios>(url, this.httpOptions);
  }

  updateUser(usuario : Usuarios): Observable<any>{ 
    return this.http.put(this.UsuariosUrl , usuario, this.httpOptions);
  }
}
