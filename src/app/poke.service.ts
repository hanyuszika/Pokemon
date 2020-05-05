import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.get<any>("https://pokeapi.co/api/v2/type");
  }

  getPokemons(url: string) {
    return this.http.get<any>(url);
  }

  getPokemonDetails(url: string) {
    return this.http.get<any>(url);
  }
}
