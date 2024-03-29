import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/Alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class MemberListResolver implements Resolve<User[]>{

  constructor(private userService:UserService,private router:Router,private alertfy:AlertifyService) { }
  resolve(route:ActivatedRouteSnapshot ):Observable<User[]>{
    return this.userService.getUsers().pipe(
      catchError(error=>{
        this.alertfy.error('يوجد مشكلة في عرض البيانات');
        this.router.navigate(['']);
        return of(null);
      })
    )
  }
}
