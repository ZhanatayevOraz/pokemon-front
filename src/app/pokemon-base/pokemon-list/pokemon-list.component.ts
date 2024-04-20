import { Component, inject } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonFetchService } from '../services/pokemon-fetch.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  allPokemonList : Pokemon[] = [];
  pokemonFetch : PokemonFetchService = inject(PokemonFetchService);

  constructor(){
    this.pokemonFetch.getAllPokemon().then((allPokemonList: Pokemon[])=>{
      this.allPokemonList =allPokemonList;
    });
  }

}
