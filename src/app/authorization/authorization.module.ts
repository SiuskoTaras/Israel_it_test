import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './containers/authorization/authorization.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [AuthorizationComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
