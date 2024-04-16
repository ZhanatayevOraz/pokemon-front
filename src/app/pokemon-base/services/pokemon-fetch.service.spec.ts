/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonFetchService } from './pokemon-fetch.service';

describe('Service: PokemonFetch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonFetchService]
    });
  });

  it('should ...', inject([PokemonFetchService], (service: PokemonFetchService) => {
    expect(service).toBeTruthy();
  }));
});
