import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UsuariosUrl= 'http://localhost:5000/Usuarios'
  urlLogin = "http://localhost:5000/Usuarios/Login"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  newSession(name : string){
    return this.http.post<any>(this.UsuariosUrl, name, this.httpOptions);
  }

  login(user : any){
    return this.http.post<any>(this.urlLogin, user, this.httpOptions);
  }

}
