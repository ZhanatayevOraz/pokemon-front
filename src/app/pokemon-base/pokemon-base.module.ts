import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonTemplateComponent } from './pokemon-template/pokemon-template.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes : Routes = [
  {
    path : '',
    children : [
      {path : '' , component:PokemonListComponent},
      {path : ':id' , component: PokemonTemplateComponent},
      {path : ':id/review', component : ReviewCreateComponent}
      
    ]
  }
]

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateComponent,
    ReviewComponent,
    ReviewCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateComponent,
    ReviewComponent,
    ReviewCreateComponent
  ]
})
export class PokemonBaseModule { }
