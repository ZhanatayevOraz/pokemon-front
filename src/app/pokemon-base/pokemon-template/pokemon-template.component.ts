
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemon } from '../../models/Pokemon';
import { PokemonFetchService } from '../services/pokemon-fetch.service';
import { Location } from '@angular/common';
import { Review } from '../../models/Review';
import { ReviewFetchService } from '../services/reviewFetch.service';

@Component({
  selector: 'app-pokemon-template',
  templateUrl: './pokemon-template.component.html',
  styleUrls: ['./pokemon-template.component.css']
})
export class PokemonTemplateComponent implements OnInit {

  constructor(private pokemonService: PokemonFetchService , 
    private router : Router , 
    private route : ActivatedRoute,
     private location: Location,
     private reviewFetch : ReviewFetchService) { }
  
  
  pokemon!:Pokemon;
  allReviewList : Review[] = [];
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id)
    .subscribe(data => this.pokemon = data);
    
    this.reviewFetch.getAllReview(id)
    .subscribe(data => this.allReviewList = data);
   
  }
  goBack(): void {
    this.location.back()
  }

}
