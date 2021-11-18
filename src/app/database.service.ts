import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  baseURL = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + '/');
  }

  cadastrarProduto(produto: Produto): Observable<any> {
    let body = new HttpParams();
    body = body.set('titulo', produto.titulo);
    body = body.set('descricao', produto.descricao);
    body = body.set('preco', String(produto.preco));

    return this.http.post(this.baseURL, body, {
      observe: 'response',
    });
  }

  atualizarProduto(produto: Produto): Observable<any> {
    let body = new HttpParams();
    let requestURL = this.baseURL + `/${produto._id}`;
    console.log(produto);
    body = body.set('titulo', produto.titulo);
    body = body.set('descricao', produto.descricao);
    body = body.set('preco', String(produto.preco));

    return this.http.put(requestURL, body, {
      observe: 'response',
    });
  }

  deletarProduto(produto: Produto): Observable<any> {
    let requestURL = this.baseURL + `/${produto._id}`;

    return this.http.delete(requestURL, { observe: 'response' });
  }
}
