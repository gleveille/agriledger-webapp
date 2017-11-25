import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotAuthorisedComponent } from './page-not-authorised.component';

describe('PageNotAuthorisedComponent', () => {
  let component: PageNotAuthorisedComponent;
  let fixture: ComponentFixture<PageNotAuthorisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotAuthorisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotAuthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
