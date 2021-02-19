import { TestBed } from '@angular/core/testing';

import { MembershipGuardGuard } from './membership-guard.guard';

describe('MembershipGuardGuard', () => {
  let guard: MembershipGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MembershipGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
