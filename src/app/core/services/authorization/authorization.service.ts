import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment, } from '../../../../environments/environment';
import {SignIn} from '../../models/sign-in';
import {SignUp} from '../../models/sign-up';
import {Router} from '@angular/router';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  constructor(private http: HttpClient,
              private  router: Router) {
  }

  loginUser(loginDate): Observable<SignIn> {
    return this.http.post<SignIn>(environment.urlAuthorization, loginDate, headerOption);
  }

  registerUser(registrationDate): Observable<SignUp> {
    return this.http.post<SignUp>(environment.urlAuthorization, registrationDate, headerOption);
  }

  public logoutUser() {
    // localStorage.removeItem('token');
    // this.router.navigate(['../']);
  }

  // getToken() {
  //   return localStorage.getItem('token');
  // }
  //
  // loggedIn() {
  //   const checker = localStorage.getItem('token');
  //   return checker !== null || checker !== '';
  // }
}
