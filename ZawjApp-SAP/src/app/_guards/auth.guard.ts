import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../_services/Alertify.service';
import { AuthService } from '../_services/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private alertify:AlertifyService,private authService:AuthService,private router:Router) {  }
  canActivate():boolean {
    if(this.authService.loggedIn()){
    return true;
    }
    this.alertify.error('يجب تسجيل الدخول');
    this.router.navigate(['']);
    return false;
  }
}
