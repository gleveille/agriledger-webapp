import { TestBed, async, inject } from '@angular/core/testing';

import { AlreadyOnboardedGuard } from './onboarding-guard/already-onboarded.guard';

describe('AlreadyOnboardedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlreadyOnboardedGuard]
    });
  });

  it('should ...', inject([AlreadyOnboardedGuard], (guard: AlreadyOnboardedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
