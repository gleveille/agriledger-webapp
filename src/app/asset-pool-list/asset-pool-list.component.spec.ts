import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPoolListComponent } from './asset-pool-list.component';

describe('AssetPoolListComponent', () => {
  let component: AssetPoolListComponent;
  let fixture: ComponentFixture<AssetPoolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPoolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
