import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from '../../produto-listar/produto';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }
  readonly URL = '/api/admin/produto';

  getAll(): Observable<Produto[]> {
     return this.http.get<Produto[]>(this.URL);
  }

  getById(idProduto): Observable<Produto> {
    const url = this.URL + '/' + idProduto;
    console.log(url);

    return this.http.get<Produto>(this.URL + '/' + idProduto);
 }

 save(produto: Produto): Observable<Produto> {
  return this.http.post<Produto>(this.URL, produto);
 }
}
