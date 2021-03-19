import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-collect-property-details',
  templateUrl: './collect-property-details.component.html',
  styleUrls: ['./collect-property-details.component.scss']
})
export class CollectPropertyDetailsComponent implements OnInit {
  propertyDetailsForm: FormGroup;
  totalData: any;
  constructor(private route: Router,
    private fb: FormBuilder,
    private apiCall: ApiServicesService) {
    this.createForm();
  }

  createForm() {
    this.propertyDetailsForm = this.fb.group({
      areaPinCode: ['', Validators.required],
      houseAge: ['', Validators.required],
      landArea: ['', Validators.required],
      builtUpArea: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    // this.apiCall.getPropertyDetails().then(data3 => {
    //   console.log(data3);
    //   this.propertyDetailsForm.patchValue(data3);
    // });

    this.apiCall.getCustomerById().then(data3 => {
      this.totalData = data3;
      console.log(data3);
      this.propertyDetailsForm.patchValue(this.totalData[0].property[0]);
    });
    

  }

  next() {
    this.totalData[0].property[0] = this.propertyDetailsForm.value;
    this.apiCall.updatePropertyDetails(this.totalData).then(data => {
      console.log(data);
      this.route.navigate(['/loan-eligibility/preview']);
    });
  }

  previous() {
    this.route.navigate(['/loan-eligibility/employement']);
  }


}
