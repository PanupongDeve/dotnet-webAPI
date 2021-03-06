import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServices: AuthService, private router: Router, private alertify: AlertifyService) {}

  canActivate(): boolean {
    if (this.authServices.loggedIn()) {
      return true;
    }

    this.alertify.error(`You cannot access because you don't have permission `);
    this.router.navigate(['']);
    return false;
  }
}
