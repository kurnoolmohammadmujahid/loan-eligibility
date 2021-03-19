import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersForYouRoutingModule } from './offers-for-you-routing.module';
import { OffersComponent } from './offers/offers.component';
import { LoanEligibilityModule } from '../loan-eligibility/loan-eligibility.module';

@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule,
    OffersForYouRoutingModule,
    LoanEligibilityModule
  ]
})

export class OffersForYouModule { }
