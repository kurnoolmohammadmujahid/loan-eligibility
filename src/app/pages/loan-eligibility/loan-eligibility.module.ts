import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectPersonalDetailsComponent } from './collect-personal-details/collect-personal-details.component';
import { LoanEligibilityRoutingModule } from './loan-eligibility-routing-module';
import { HeaderComponent } from '../../shared/header/header.component';
import { StepperComponent } from '../../shared/stepper/stepper.component';
import { StepsModule } from 'primeng/steps';
import { CollectEmployementDetailsComponent } from './collect-employement-details/collect-employement-details.component';
import { CollectPropertyDetailsComponent } from './collect-property-details/collect-property-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewPersonalEmployementPropertyDetailsComponent } from './preview-personal-employement-property-details/preview-personal-employement-property-details.component';
import { ApiServicesService } from '../../services/api-services.service';
import { HttpClientModule } from '@angular/common/http';
import {CheckboxModule} from 'primeng/checkbox';
import { GenerateIdGuard } from 'src/app/guard/generate-id.guard';
import { GenerateCustomerIdGuard } from 'src/app/guard/generate-customer-id.guard';
@NgModule({
  declarations: [
    CollectPersonalDetailsComponent,
    HeaderComponent,
    StepperComponent,
    CollectEmployementDetailsComponent,
    CollectPropertyDetailsComponent,
    PreviewPersonalEmployementPropertyDetailsComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LoanEligibilityRoutingModule,
    StepsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckboxModule
  ],
  providers: [
    ApiServicesService
  ]
})
export class LoanEligibilityModule { }
