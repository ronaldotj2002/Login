import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(public authentication : AuthenticationService,
    private router : Router) { 

  }



   
  canActivate(): boolean{
    if(!this.authentication.estaAutenticado()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
