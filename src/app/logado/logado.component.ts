import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

    artigos;
  constructor(private authService: AuthenticationService,
    private apiService: ApiService) { 
    
  }

  ngOnInit() {
    this.apiService.getNews().subscribe(data=>{
      console.log(data);
      this.artigos = data['articles'];
    
    })
  }

  public logoutUser(){
    this.authService.logout();
    console.log('Deslogado!')
  }

}
