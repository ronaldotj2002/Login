import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario: Usuario = new Usuario();
  
    constructor(private authService: AuthenticationService) {

     }

  ngOnInit() {
  }

  public loginUser(){
  
      this.authService.login(this.usuario);
     
}


}
