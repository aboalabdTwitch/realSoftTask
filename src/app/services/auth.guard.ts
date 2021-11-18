import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:DataService,private router:Router){

  }
  canActivate(){
    if(this.auth.isLoggedIn()){
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
  
}
