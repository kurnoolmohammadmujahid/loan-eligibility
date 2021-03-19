import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectPropertyDetailsComponent } from './collect-property-details.component';

describe('CollectPropertyDetailsComponent', () => {
  let component: CollectPropertyDetailsComponent;
  let fixture: ComponentFixture<CollectPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectPropertyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
