import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicesService } from '../../../services/api-services.service';
@Component({
  selector: 'app-collect-personal-details',
  templateUrl: './collect-personal-details.component.html',
  styleUrls: ['./collect-personal-details.component.scss']
})
export class CollectPersonalDetailsComponent implements OnInit {
  personalDetailsForm: FormGroup;
  totalData: any;
  constructor(private route: Router,
    private fb: FormBuilder,
    private apiCall: ApiServicesService) {
    this.createForm();
  }

  createForm() {
    this.personalDetailsForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phNumber: ['', Validators.required],
      panNumber: ['', Validators.required]
    });
  }

  ngOnInit() {
    // this.apiCall.getPersonalDetails().then(data1 => {
    //   console.log(data1);
    //   this.personalDetailsForm.patchValue(data1);
    // });
    this.apiCall.getCustomerById().then(data1 => {
      // this.totalData = data1;
      this.totalData = [
        {
          "personal": [
            {
              "username": data1[0].personal[0].username ? data1[0].personal[0].username : "",
              "email": data1[0].personal[0].email ? data1[0].personal[0].email : "",
              "phNumber": data1[0].personal[0].phNumber ? data1[0].personal[0].phNumber : "",
              "panNumber": data1[0].personal[0].panNumber ? data1[0].personal[0].panNumber : ""
            }
          ],
          "employee": [
            {
              "workPlace": data1[0].employee[0].workPlace ? data1[0].employee[0].workPlace : "",
              "jobTitle": data1[0].employee[0].jobTitle ? data1[0].employee[0].jobTitle : "",
              "salary": data1[0].employee[0].salary ? data1[0].employee[0].salary : "",
              "loanAmt": data1[0].employee[0].loanAmt ? data1[0].employee[0].loanAmt : "",
            }
          ],
          "property": [
            {
              "areaPinCode": data1[0].property[0].workPlace ? data1[0].property[0].workPlace : "",
              "houseAge": data1[0].property[0].houseAge ? data1[0].property[0].houseAge : "",
              "landArea": data1[0].property[0].landArea ? data1[0].property[0].landArea : "",
              "builtUpArea": data1[0].property[0].builtUpArea ? data1[0].property[0].builtUpArea : "",
            }
          ]
        }
      ];
      console.log(data1);
      this.personalDetailsForm.patchValue(this.totalData[0].personal[0]);
    });


  }

  next() {
    this.totalData[0].personal[0] = this.personalDetailsForm.value;
    this.apiCall.updatePersonalDetails(this.totalData).then(data => {
      console.log(data);
      this.route.navigate(['/loan-eligibility/employement']);
    });
  }

}
