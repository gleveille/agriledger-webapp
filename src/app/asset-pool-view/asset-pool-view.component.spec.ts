import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPoolViewComponent } from './asset-pool-view.component';

describe('AssetPoolViewComponent', () => {
  let component: AssetPoolViewComponent;
  let fixture: ComponentFixture<AssetPoolViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPoolViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPoolViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
