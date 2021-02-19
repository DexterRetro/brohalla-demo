import { UsersServiceService } from './../services/users-service.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembershipGuardGuard implements CanActivate {
  constructor(private user: UsersServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.user.isAuthenticated) {
      this.router.navigateByUrl('/member/logIn');
    }
    console.log(this.user.isAuthenticated);
    return this.user.isAuthenticated;
  }
}
