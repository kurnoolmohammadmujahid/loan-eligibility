import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateCustomerIdGuard } from 'src/app/guard/generate-customer-id.guard';
import { GenerateIdGuard } from 'src/app/guard/generate-id.guard';
import { CollectEmployementDetailsComponent } from './collect-employement-details/collect-employement-details.component';
import { CollectPersonalDetailsComponent } from './collect-personal-details/collect-personal-details.component';
import { CollectPropertyDetailsComponent } from './collect-property-details/collect-property-details.component';
import { PreviewPersonalEmployementPropertyDetailsComponent } from './preview-personal-employement-property-details/preview-personal-employement-property-details.component';

const routes: Routes = [
    {
        path: 'personal',
        component: CollectPersonalDetailsComponent
    },
    {
        path: 'employement',
        component: CollectEmployementDetailsComponent
    },
    {
        path: 'property',
        component: CollectPropertyDetailsComponent
    },
    {
        path: 'preview',
        component: PreviewPersonalEmployementPropertyDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanEligibilityRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/