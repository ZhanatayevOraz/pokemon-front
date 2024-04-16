import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor() { }
  @Input()
  detail!:Pokemon;
  ngOnInit() {
  }

}
