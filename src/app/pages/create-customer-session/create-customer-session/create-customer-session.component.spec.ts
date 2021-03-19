import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerSessionComponent } from './create-customer-session.component';

describe('CreateCustomerSessionComponent', () => {
  let component: CreateCustomerSessionComponent;
  let fixture: ComponentFixture<CreateCustomerSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
