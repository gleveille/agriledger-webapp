import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerRegistrationComponent } from './issuer-registration.component';

describe('IssuerRegistrationComponent', () => {
  let component: IssuerRegistrationComponent;
  let fixture: ComponentFixture<IssuerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
