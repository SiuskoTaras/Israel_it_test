import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './containers/authorization/authorization.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [AuthorizationComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ShareModule,
  ]
})
export class AuthorizationModule { }
