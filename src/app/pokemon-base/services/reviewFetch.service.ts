import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../../models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewFetchService {

constructor(private http:HttpClient) { }
url='http://localhost:8080/api/pokemon';
getAllReview (id :number){
  return this.http.get<Review[]>(`${this.url}/${id}/reviews`);
}

}
