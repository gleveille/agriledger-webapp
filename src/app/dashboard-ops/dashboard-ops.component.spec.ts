import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOpsComponent } from './dashboard-ops.component';

describe('DashboardOpsComponent', () => {
  let component: DashboardOpsComponent;
  let fixture: ComponentFixture<DashboardOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
