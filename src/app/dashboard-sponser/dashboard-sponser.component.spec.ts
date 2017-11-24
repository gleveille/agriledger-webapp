import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSponserComponent } from './dashboard-sponser.component';

describe('DashboardSponserComponent', () => {
  let component: DashboardSponserComponent;
  let fixture: ComponentFixture<DashboardSponserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSponserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
