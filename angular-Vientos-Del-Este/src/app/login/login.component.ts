import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Servicios/auth-service.service';
import { UsuariosService } from '../Servicios/usuarios.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username= "";
  password= "";

  constructor( 
    private authService: AuthService, 
    private router: Router) {

   }

  ngOnInit(): void {
  }
  login(): void{
    if(this.username && this.password){
      this.authService.login(this.username, this.password)
      .subscribe(
        ()=>{
          console.log("user is logged in");
          this.router.navigateByUrl('/');
        }
      );
      
    }
    form: FormGroup;
  }

}
