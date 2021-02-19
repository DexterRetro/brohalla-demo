import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: UsersServiceService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(authReq);
  }
}
