import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSponserComponent } from './login-sponser.component';

describe('LoginSponserComponent', () => {
  let component: LoginSponserComponent;
  let fixture: ComponentFixture<LoginSponserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSponserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
