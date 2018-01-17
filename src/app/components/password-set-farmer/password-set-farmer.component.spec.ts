import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSetFarmerComponent } from './password-set-farmer.component';

describe('PasswordSetFarmerComponent', () => {
  let component: PasswordSetFarmerComponent;
  let fixture: ComponentFixture<PasswordSetFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordSetFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSetFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
