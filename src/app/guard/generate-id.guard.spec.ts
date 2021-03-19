import { TestBed } from '@angular/core/testing';

import { GenerateIdGuard } from './generate-id.guard';

describe('GenerateIdGuard', () => {
  let guard: GenerateIdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GenerateIdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
