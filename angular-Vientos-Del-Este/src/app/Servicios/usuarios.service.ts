import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Usuarios } from '../Usuarios';
import { fetchDelete, fetchPost } from './fetchFunctions';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  
  private UsuariosUrl= 'http://localhost:5000/Usuarios'

  constructor(private http: HttpClient) { }

  /** GET Usuarios from the server **/
  getUser(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.UsuariosUrl)

  }

  createUser(usuario : Usuarios){
    return fetchPost(this.UsuariosUrl, usuario).then(resp => {
      return resp
    }).catch(err => {return err})
  }
  deleteUser(usuario : Usuarios){
    return fetchDelete(this.UsuariosUrl + '/' + usuario._id).then(resp => {
      return resp
    }).catch(err => {return err})
  }

  UpdateUser(usuario : Usuarios){
    return fetchPost(this.UsuariosUrl + '/Update', usuario).then(resp => {
      return resp
    }).catch(err => {return err})
  }
}