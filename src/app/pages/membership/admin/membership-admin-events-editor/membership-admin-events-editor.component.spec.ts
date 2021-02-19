import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipAdminEventsEditorComponent } from './membership-admin-events-editor.component';

describe('MembershipAdminEventsEditorComponent', () => {
  let component: MembershipAdminEventsEditorComponent;
  let fixture: ComponentFixture<MembershipAdminEventsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipAdminEventsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipAdminEventsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
