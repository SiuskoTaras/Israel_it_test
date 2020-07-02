import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SignIn } from 'src/app/core/models/sign-in';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() loginUp: EventEmitter<SignIn> = new EventEmitter();
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public isControlInvalid(controlName: string) {
    const control = this.loginForm.controls[controlName];
    return control.invalid && control.touched;
  }

  public loginUser() {
    const controls = this.loginForm.controls;
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    const formData = this.loginForm.getRawValue();
    this.loginUp.emit(formData);
  }
}
