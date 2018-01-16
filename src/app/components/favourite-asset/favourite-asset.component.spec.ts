import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteAssetComponent } from './favourite-asset.component';

describe('FavouriteAssetComponent', () => {
  let component: FavouriteAssetComponent;
  let fixture: ComponentFixture<FavouriteAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
