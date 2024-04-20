/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReviewFetchService } from './reviewFetch.service';

describe('Service: ReviewFetch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewFetchService]
    });
  });

  it('should ...', inject([ReviewFetchService], (service: ReviewFetchService) => {
    expect(service).toBeTruthy();
  }));
});
