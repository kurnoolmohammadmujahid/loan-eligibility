import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPersonalEmployementPropertyDetailsComponent } from './preview-personal-employement-property-details.component';

describe('PreviewPersonalEmployementPropertyDetailsComponent', () => {
  let component: PreviewPersonalEmployementPropertyDetailsComponent;
  let fixture: ComponentFixture<PreviewPersonalEmployementPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPersonalEmployementPropertyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPersonalEmployementPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
