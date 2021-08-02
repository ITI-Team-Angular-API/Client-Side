import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private storageService: StorageService) { }

  canActivate(routeAc: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let userAccount = this.storageService.getUserInfo();
    if (userAccount != null)
      return true;
    else
      this.router.navigate(['/login']);
  }
}
