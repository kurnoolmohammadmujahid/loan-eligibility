import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectEmployementDetailsComponent } from './collect-employement-details.component';

describe('CollectEmployementDetailsComponent', () => {
  let component: CollectEmployementDetailsComponent;
  let fixture: ComponentFixture<CollectEmployementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectEmployementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectEmployementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
