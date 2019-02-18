import { Injectable, NgModule } from '@angular/core';
import { Produto } from './produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Json } from './json';

@Injectable()
export class ProdutoService {
  
  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:8080/api/admin/produto";
  
  readonly URL = 'http://localhost:8080/api/admin/produto';
  readonly ROOT = 'https://jsonplaceholder.typicode.com';
  
  getProducts(): Observable<Produto[]> {
     return this.http.get<Produto[]>(this.URL +'/3');
  }
  
  getPosts(): Observable<Json[]> {
    return this.http.get<Json[]>(this.ROOT + '/posts')
  }

  // obterCerveja(id: number): Cerveja {
  //   let cerveja = new Cerveja();
  //   cerveja.id = 1;
  //   cerveja.nome = "DevMedia Black Beer";
  //   cerveja.ibu = 80;
  //   cerveja.cor = "Preta";
    
  //   return cerveja;
  // }
}
