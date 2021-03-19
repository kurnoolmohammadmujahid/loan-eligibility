import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectPersonalDetailsComponent } from './collect-personal-details.component';

describe('CollectPersonalDetailsComponent', () => {
  let component: CollectPersonalDetailsComponent;
  let fixture: ComponentFixture<CollectPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectPersonalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
