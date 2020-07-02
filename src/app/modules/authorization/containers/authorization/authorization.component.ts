import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Messages } from 'src/app/core/models/messages';
import { AuthorizationService } from 'src/app/core/services/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<boolean> = new Subject();
  private timer$ = timer(1000).pipe(takeUntil(this.unsubscribe));
  public messages = new Messages();

  constructor(private authorization: AuthorizationService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  public login(loginDate) {
    try {
      this.authorization.loginUser(loginDate)
        .toPromise()
        .then( res => this.success(res))
        .catch( err => this.error(err));
    } catch (err) {
      this.error(err);
    }
    this.timer$.subscribe(() => this.messages.error = false);
  }

  public registration(registrationUser) {
    try {
      this.authorization.registerUser(registrationUser)
        .toPromise()
        .then( res => this.success(res))
        .catch( err => this.error(err));
    } catch (err) {
      this.error(err);
    }
    this.timer$.subscribe(() => this.messages.error = false);
  }

  private success(res) {
    this.messages.success = true;
    setTimeout(() => {
      this.router.navigate(['/todo']);
      localStorage.setItem('token', res.access_token);
    }, 1200);
  }

  private error(err) {
    console.log(err);
    this.messages.error = true;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}

