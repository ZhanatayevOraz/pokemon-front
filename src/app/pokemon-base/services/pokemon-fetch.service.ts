import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonFetchService {
  url='http://localhost:8080/api/pokemon';
constructor(private http:HttpClient) { }

  async getAllPokemon () : Promise<Pokemon[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  getPokemon(id:number){
    return this.http.get<Pokemon>(`${this.url}/${id}`);
    
  }

}
