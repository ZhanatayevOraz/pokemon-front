
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemon } from '../../models/Pokemon';
import { PokemonFetchService } from '../services/pokemon-fetch.service';

@Component({
  selector: 'app-pokemon-template',
  templateUrl: './pokemon-template.component.html',
  styleUrls: ['./pokemon-template.component.css']
})
export class PokemonTemplateComponent implements OnInit {

  constructor(private pokemonService: PokemonFetchService , private router : Router , private route : ActivatedRoute) { }
  
  
  pokemon!:Pokemon;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id)
    .subscribe(data => this.pokemon = data);
    console.log(this.pokemon)
   
  }

}
