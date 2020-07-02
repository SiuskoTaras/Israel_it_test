import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthorizationService } from 'src/app/core/services/authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req, next) {
    const authService = this.injector.get(AuthorizationService);
    const token = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(token);
  }
}
