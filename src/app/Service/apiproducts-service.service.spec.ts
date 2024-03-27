import { TestBed } from '@angular/core/testing';

import { APIProductsServiceService } from './apiproducts-service.service';

describe('APIProductsServiceService', () => {
  let service: APIProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
