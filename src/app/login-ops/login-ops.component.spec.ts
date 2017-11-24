import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOpsComponent } from './login-ops.component';

describe('LoginOpsComponent', () => {
  let component: LoginOpsComponent;
  let fixture: ComponentFixture<LoginOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
