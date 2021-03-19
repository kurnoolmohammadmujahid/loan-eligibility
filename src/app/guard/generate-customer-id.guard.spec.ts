import { TestBed } from '@angular/core/testing';

import { GenerateCustomerIdGuard } from './generate-customer-id.guard';

describe('GenerateCustomerIdGuard', () => {
  let guard: GenerateCustomerIdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GenerateCustomerIdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
