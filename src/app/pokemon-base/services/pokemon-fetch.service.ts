import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonFetchService {
  url='http://localhost:8080/api/pokemon';
constructor(private http:HttpClient) { }

  getAllPokemon() : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.url}`);
  }
  getPokemon(id:number){
    return this.http.get<Pokemon>(`${this.url}/${id}`);
    
  }

}
