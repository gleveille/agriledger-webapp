import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPoolComponent } from './asset-pool.component';

describe('AssetPoolComponent', () => {
  let component: AssetPoolComponent;
  let fixture: ComponentFixture<AssetPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
