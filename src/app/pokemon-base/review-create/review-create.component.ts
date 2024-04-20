import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ReviewFetchService } from '../services/reviewFetch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {
  

  
  constructor(private location: Location, 
    private formBuilder: FormBuilder, 
    private reviewFetch : ReviewFetchService,
    private route : ActivatedRoute) { 
    
    }
  checkoutForm = this.formBuilder.group({
    title: '',
    content: '',
    stars: 0
  });
  
  ngOnInit() {
  }
  onSubmit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reviewFetch.addReview(id, this.checkoutForm.value).subscribe({
      next: response => {
        console.log('Review added', response);
        this.goBack();
      },
      error: error => console.error('There was an error!', error)
    });
  }
  goBack(): void {
    this.location.back();
  }
}
