import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateCustomerIdGuard } from './guard/generate-customer-id.guard';

const routes: Routes = [
  {
    path: 'loan-eligibility',
    loadChildren: () => import('./pages/loan-eligibility/loan-eligibility.module').then(mod => mod.LoanEligibilityModule),
    canActivate: [GenerateCustomerIdGuard]
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/offers-for-you/offers-for-you.module').then(mod => mod.OffersForYouModule)
  },
  {
    path: 'createCustomerSession',
    loadChildren: () => import('./pages/create-customer-session/create-customer-session.module').then(mod => mod.CreateCustomerSessionModule)
  },
  {
    path: '',
    redirectTo: '/loan-eligibility/personal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
