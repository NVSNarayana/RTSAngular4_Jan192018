import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Users } from '../models/users';

@Injectable()
export class StudentAuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //take login user details
    console.log("Stu Gurad");
    let user = new Users("abc", "student");
    if (user.userType == "student" || user.userType== "admin") {
      return true;
    }
    return false;
  }
}
