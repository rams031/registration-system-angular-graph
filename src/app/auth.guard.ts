import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public jwtHelper: JwtHelperService, public router: Router) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    console.log(`token:`, token);

    return !this.jwtHelper.isTokenExpired(token);
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
