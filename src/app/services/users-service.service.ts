import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  constructor(private http: HttpClient, private router: Router) {}
  isAuthenticated = false;
  user: User;
  getToken() {
    return localStorage.getItem('AuthToken');
  }
  async SignUp(newUser: User): Promise<Observable<object>> {
    const Response = await this.http.post<{
      status: String;
      token: String;
      user: User;
      message?: String;
    }>(`${environment.backendURL_Cloud}/users/signup`, newUser);
    Response.subscribe((res) => {
      if (res.status === 'success') {
        this.isAuthenticated = true;
        this.user = res.user;
        localStorage.setItem('AuthToken', res.token.toString());
        this.router.navigateByUrl('/member/home');
      }
    });
    return Response;
  }
  async logIn({
    email,
    password,
    phoneNumber,
  }): Promise<
    Observable<{
      status: String;
      token: String;
      user: User;
      message?: String;
    }>
  > {
    const Response = await this.http.post<{
      status: String;
      token: String;
      user: User;
    }>(`${environment.backendURL_Cloud}/users/login`, {
      email,
      password,
      phoneNumber,
    });
    Response.subscribe((res) => {
      if (res.status === 'success') {
        this.isAuthenticated = true;
        this.user = res.user;
        localStorage.setItem('AuthToken', res.token.toString());
        this.router.navigateByUrl('/member/home');
      }
    });
    return Response;
  }

  async ChangeUserDetails(user: User) {
    const Response = await this.http.post<{
      status: String;
      token: String;
      user: User;
      message?: String;
    }>(`${environment.backendURL_Cloud}/users`, user);
    Response.subscribe((res) => {
      if (res.status === 'success') {
        this.user = res.user;
        this.router.navigateByUrl('/member/home');
      }
    });
  }
}
