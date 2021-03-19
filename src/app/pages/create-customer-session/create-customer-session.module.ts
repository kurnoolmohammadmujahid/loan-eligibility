import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerSessionComponent } from './create-customer-session/create-customer-session.component';
import { CreateCustomerSessionRoutingModule } from './create-customer-session-routing.module';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [CreateCustomerSessionComponent],
  imports: [
    CommonModule,
    CreateCustomerSessionRoutingModule,
    DialogModule
  ]
})
export class CreateCustomerSessionModule { }
