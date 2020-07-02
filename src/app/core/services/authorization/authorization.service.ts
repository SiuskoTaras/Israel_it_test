import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from '../../models/sign-in';
import { SignUp } from '../../models/sign-up';
import { Router } from '@angular/router';
import { Token } from 'src/app/core/models/token';
import { environment } from 'src/environments/environment';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  private registerUrl = `${environment.urlAuthorization}registration/user`;
  private loginUrl = `${environment.urlAuthorization}login`;

  constructor(private http: HttpClient,
              private  router: Router) {
  }

  public registerUser(user: SignUp): Observable<Token> {
    return this.http.post<Token>(this.registerUrl, user);
  }

  public loginUser(user: SignIn): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, user);
  }

  public logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['../']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    const checker = localStorage.getItem('token');
    return checker !== null || checker !== '';
  }
}
