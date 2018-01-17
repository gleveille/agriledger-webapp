import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSetInternalComponent } from './password-set-internal.component';

describe('PasswordSetInternalComponent', () => {
  let component: PasswordSetInternalComponent;
  let fixture: ComponentFixture<PasswordSetInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordSetInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSetInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
