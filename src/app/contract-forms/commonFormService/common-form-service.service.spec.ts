import { TestBed } from '@angular/core/testing';

import { CommonFormServiceService } from './common-form-service.service';

describe('CommonFormServiceService', () => {
  let service: CommonFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
