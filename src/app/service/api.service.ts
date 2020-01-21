import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService{


 constructor(private service: HttpClient){

 }

 public getNews(){
     //crase
     return this.service.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-20&sortBy=publishedAt&apiKey=032fefe86c2742d7be418f39f148d8d6`);
 }


}