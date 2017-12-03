import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPoolCreateComponent } from './asset-pool-create.component';

describe('AssetPoolCreateComponent', () => {
  let component: AssetPoolCreateComponent;
  let fixture: ComponentFixture<AssetPoolCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPoolCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPoolCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
