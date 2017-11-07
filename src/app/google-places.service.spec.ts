import { TestBed, inject } from '@angular/core/testing';

import { GooglePlacesService } from './google-places.service';

describe('GooglePlacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooglePlacesService]
    });
  });

  it('should be created', inject([GooglePlacesService], (service: GooglePlacesService) => {
    expect(service).toBeTruthy();
  }));
});
