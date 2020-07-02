import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationGuard implements CanActivate {

 constructor(private router: Router,
             private authorizationService: AuthorizationService){
 }

  canActivate(): boolean  {
    if (this.authorizationService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/authorization']);
      return false;
    }
  }
}
