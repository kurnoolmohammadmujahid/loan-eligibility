import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-preview-personal-employement-property-details',
  templateUrl: './preview-personal-employement-property-details.component.html',
  styleUrls: ['./preview-personal-employement-property-details.component.scss']
})
export class PreviewPersonalEmployementPropertyDetailsComponent implements OnInit {
  checked: boolean = false;
  previewObj = {
    username: '',
    email: '',
    phNumber: '',
    panNumber: '',
    workPlace: '',
    jobTitle: '',
    salary: '',
    loanAmt: '',
    areaPinCode: '',
    houseAge: '',
    landArea: '',
    builtUpArea: ''
  }
  disableButton: boolean = true;
  totalData: any;
  constructor(private route: Router,
    private apiCall: ApiServicesService) { }

  ngOnInit(): void {
    this.apiCall.getCustomerById().then(data4 => {
      this.totalData = data4;
      console.log(data4);
      this.previewObj.username = this.totalData[0].personal[0].username;
      this.previewObj.email = this.totalData[0].personal[0].email;
      this.previewObj.phNumber = this.totalData[0].personal[0].phNumber;
      this.previewObj.panNumber = this.totalData[0].personal[0].panNumber;
      this.previewObj.workPlace = this.totalData[0].employee[0].workPlace;
      this.previewObj.jobTitle = this.totalData[0].employee[0].jobTitle;
      this.previewObj.salary = this.totalData[0].employee[0].salary;
      this.previewObj.loanAmt = this.totalData[0].employee[0].loanAmt;
      this.previewObj.areaPinCode = this.totalData[0].property[0].areaPinCode;
      this.previewObj.houseAge = this.totalData[0].property[0].houseAge;
      this.previewObj.landArea = this.totalData[0].property[0].landArea;
      this.previewObj.builtUpArea = this.totalData[0].property[0].builtUpArea;
    });


    // this.apiCall.getPersonalDetails().then(data1 => {
    //   console.log(data1);
    //   this.previewObj.username = data1.username;
    //   this.previewObj.email = data1.email;
    //   this.previewObj.phNumber = data1.phNumber;
    //   this.previewObj.panNumber = data1.panNumber;
    // });

    // this.apiCall.getEmployementDetails().then(data2 => {
    //   console.log(data2);
    //   this.previewObj.workPlace = data2.workPlace;
    //   this.previewObj.jobTitle = data2.jobTitle;
    //   this.previewObj.salary = data2.salary;
    //   this.previewObj.loanAmt = data2.loanAmt;
    // });

    // this.apiCall.getPropertyDetails().then(data3 => {
    //   console.log(data3);
    //   this.previewObj.areaPinCode = data3.areaPinCode;
    //   this.previewObj.houseAge = data3.houseAge;
    //   this.previewObj.landArea = data3.landArea;
    //   this.previewObj.builtUpArea = data3.builtUpArea;
    // });
  }

  submit() {
    alert("Success! Check console")
    console.log(this.previewObj);
    localStorage.clear();
    this.route.navigate(['/offers']);
  }

  previous() {
    this.route.navigate(['/loan-eligibility/property']);
  }

}
