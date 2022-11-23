import { HttpClient } from '@angular/common/http';
import { Injectable,Component } from '@angular/core';
import{interval,take,Observable,shareReplay, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient) { }
  login(username:String, password:String){
    return this.http.post<any>('http://localhost:5000/Usuarios/login',{username,password});

  }
}
