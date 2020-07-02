import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './containers/authorization/authorization.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthorizationComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    SharedModule,
  ]
})
export class AuthorizationModule {
}
