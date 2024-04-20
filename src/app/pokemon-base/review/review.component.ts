import { Component, inject, Input, OnInit } from '@angular/core';
import { Review } from '../../models/Review';



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input()
  review! : Review;
  constructor( ){
    
  }
  ngOnInit() {
   
  }


}
