import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/Review';
import { ReviewFetchService } from '../services/reviewFetch.service';


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
