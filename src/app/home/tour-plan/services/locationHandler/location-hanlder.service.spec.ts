import { TestBed } from '@angular/core/testing';

import { LocationHanlderService } from './location-hanlder.service';

describe('LocationHanlderService', () => {
  let service: LocationHanlderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationHanlderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
