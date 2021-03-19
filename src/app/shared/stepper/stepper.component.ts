import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Personal',
      routerLink: '/loan-eligibility/personal'
    },
    {
      label: 'Employement',
      routerLink: '/loan-eligibility/employement'
    },
    {
      label: 'Property',
      routerLink: '/loan-eligibility/property'
    },
    {
      label: 'Preview',
      routerLink: '/loan-eligibility/preview'
    }];
  }

}
