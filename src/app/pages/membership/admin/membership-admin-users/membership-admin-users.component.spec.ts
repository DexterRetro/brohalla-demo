import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipAdminUsersComponent } from './membership-admin-users.component';

describe('MembershipAdminUsersComponent', () => {
  let component: MembershipAdminUsersComponent;
  let fixture: ComponentFixture<MembershipAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipAdminUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
