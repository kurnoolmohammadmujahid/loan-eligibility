import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../../services/api-services.service';

@Component({
  selector: 'app-create-customer-session',
  templateUrl: './create-customer-session.component.html',
  styleUrls: ['./create-customer-session.component.scss']
})
export class CreateCustomerSessionComponent implements OnInit {
  display: boolean = true;
  tempData = [
    {
      "personal": [
        {
          "username": "",
          "email": "",
          "phNumber": "",
          "panNumber": ""
        }
      ],
      "employee": [
        {
          "workPlace": "",
          "jobTitle": "",
          "salary": "",
          "loanAmt": ""
        }
      ],
      "property": [
        {
          "areaPinCode": "",
          "houseAge": "",
          "landArea": "",
          "builtUpArea": ""
        }
      ]
    }
  ]
  constructor(private route: Router, private apiCall: ApiServicesService) { }

  ngOnInit(): void {
  }

  next() {
    this.apiCall.postCustomer(this.tempData).then(data1 => {
      console.log(data1);
      this.route.navigate(['/loan-eligibility/personal']);
    });
  }


  createSession() {
    this.apiCall.getAllCustomers().then(data => {
      let storeValue = data.length;
      storeValue++;
      localStorage.setItem('customerId', storeValue.toString());
      this.next();
    });
  }

}
