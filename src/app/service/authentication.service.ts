import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import {Md5} from 'md5-typescript';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { spawn } from 'child_process';


const USUARIOS : Usuario[]=[
  {"email" : "rtj@gmail.com", "senha": Md5.init('123')}
  
]



@Injectable()
export class AuthenticationService {
  group(arg0: { emailFormEx: ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors)[][]; passwordFormEx: ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors)[]; }): import("@angular/forms").FormGroup {
    throw new Error("Method not implemented.");
  }

  authState = new BehaviorSubject(false); // status da minha autenticação

  usuarios: Usuario[] = USUARIOS;
    //começa com falso..
  constructor(private router : Router) { 
    this.setLogado();
  }

setLogado(){
  try{
    let USER_INFO = localStorage.getItem('USER_INFO');
    if('USER_INFO'){
        return true;
    }
    return false;
  }catch(error){
    console.log('Error :', error.error);
    return false;
  }
}


login(usuario : Usuario) {
  var obj = {
    usuario_email: usuario.email,
    usuario_senha: usuario.senha
  };

  let usu = this.loginProvider(usuario);
    //se conseguir o usu !=null
    if (usu !=null){
      localStorage.setItem('USER_INFO', JSON.stringify(usuario));
      this.router.navigate(['logado'])
      this.authState.next(true);

    }
}


loginProvider(usuario: Usuario):Usuario{
  var usu = null; // usuario está vazio

  this.usuarios.forEach(x =>{
    if (usuario.email == x.email && Md5.init(usuario.senha) ==x.senha){
      usu = x; // se acertar o e-mail e a senha (cheio)
      console.log('Logado com sucesso!');
      return;
    }else{
      console.log('erro ao logar!');
      return;
    }
  });
  return usu;
}

logout() {
  localStorage.removeItem('USER_INFO');
  this.router.navigate(['login']);
  this.authState.next(false);
}

estaAutenticado(){
  return this.authState.value;

  // logado retorna true
  // login retorna false
}

}