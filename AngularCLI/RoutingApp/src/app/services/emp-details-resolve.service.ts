import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmpDetailsResolveService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var routeParam = route.params["id"];
    return Observable.of({ eno: routeParam, ename: "E" + routeParam, age: 30 }).delay(5000);//this data comes from api
  }
  constructor() { }

}
