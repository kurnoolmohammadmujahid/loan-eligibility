import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicesService } from '../../../services/api-services.service';

@Component({
  selector: 'app-collect-employement-details',
  templateUrl: './collect-employement-details.component.html',
  styleUrls: ['./collect-employement-details.component.scss']
})
export class CollectEmployementDetailsComponent implements OnInit {
  employementDetailsForm: FormGroup;
  totalData: any;
  constructor(private route: Router,
    private fb: FormBuilder,
    private apiCall: ApiServicesService) {
    this.createForm();
  }

  createForm() {
    this.employementDetailsForm = this.fb.group({
      workPlace: ['', Validators.required],
      jobTitle: ['', Validators.required],
      salary: ['', Validators.required],
      loanAmt: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.apiCall.getEmployementDetails().then(data2 => {
    //   console.log(data2);
    //   this.employementDetailsForm.patchValue(data2);
    // });
    this.apiCall.getCustomerById().then(data2 => {
      this.totalData = data2;
      console.log(data2);
      this.employementDetailsForm.patchValue(this.totalData[0].employee[0]);
    });
    

  }

  next() {
    this.totalData[0].employee[0] = this.employementDetailsForm.value;
    this.apiCall.updateEmployementDetails(this.totalData).then(data => {
      console.log(data);
      this.route.navigate(['/loan-eligibility/property']);
    });
  }

  previous() {
    this.route.navigate(['/loan-eligibility/personal']);
  }

}
