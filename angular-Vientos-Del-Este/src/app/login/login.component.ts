import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre = "";
  
  contrasena= "";
  constructor(
    private authService: AuthService, private router : Router) {}


  ngOnInit(): void {
    
  } 
  
  login() {
    if(this.nombre != "" && this.contrasena != ""){
    const user ={
      nombre: this.nombre,
      contrasena: this.contrasena
    };
    
    this.authService.login(user).subscribe(resp => this.token(resp))
    this.vaciar();}
  }
  vaciar(){
    this.nombre="";
    this.contrasena="";
  }
  token(resp : any){
    const token = resp.token;
    const clase = resp.clase
      localStorage.setItem("token", token);
      localStorage.setItem("clase", clase);
      switch(clase){
        case "Administrador": 
        this.router.navigateByUrl('/Usuarios');
        break;
        case "Operario": 
        this.router.navigateByUrl('/Piezas');
        break;
        case "Auditor": 
        this.router.navigateByUrl('/Molino');
        break;
      }
  }



}
