import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateCustomerIdGuard } from './guard/generate-customer-id.guard';
import { CreateCustomerSessionModule } from './pages/create-customer-session/create-customer-session.module';
import { LoanEligibilityModule } from './pages/loan-eligibility/loan-eligibility.module';
import { OffersForYouModule } from './pages/offers-for-you/offers-for-you.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoanEligibilityModule,
    OffersForYouModule,
    CreateCustomerSessionModule
  ],
  providers: [GenerateCustomerIdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
