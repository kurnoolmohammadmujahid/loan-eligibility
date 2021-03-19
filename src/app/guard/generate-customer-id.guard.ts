import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateCustomerIdGuard implements CanActivate {
  constructor(public router: Router) { }
  canActivate(ActivatedRouteSnapshot) {
    if (localStorage.getItem('customerId')) {
      return true;
    } else {
      this.router.navigate(['/createCustomerSession']);
      return false;
    }
  }

}
