import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonTemplateComponent } from './pokemon-template/pokemon-template.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {
    path : '',
    children : [
      {path : '' , component:PokemonListComponent},
      {path : ':id' , component: PokemonTemplateComponent},
      
    ]
  }
]

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateComponent
  ]
})
export class PokemonBaseModule { }
