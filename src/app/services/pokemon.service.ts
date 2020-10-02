import { Pokemon } from './../model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
// https://api.pokemontcg.io/v1/cards

  url = 'https://api.pokemontcg.io/v1/cards';

  id = new BehaviorSubject('');

  constructor(private http: HttpClient) { }

  getCards(): Observable<Pokemon[]> {
   return this.http.get<Pokemon[]>(`${this.url}`).pipe(map( response => response));
  }

  getDetalhe(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  buscaPorNome( nome: string): Observable<any> {
    let params = new HttpParams();
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    params = params.set('name', nome);
    return this.http.get(`${this.url}`, { headers, params });
  }

}
