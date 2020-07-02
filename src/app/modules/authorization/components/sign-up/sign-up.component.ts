import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUp } from 'src/app/core/models/sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output() registrationUp: EventEmitter<SignUp> = new EventEmitter();
  public registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.registrationForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  public isControlInvalid(controlName: string) {
    const control = this.registrationForm.controls[controlName];
    return control.invalid && control.touched;
  }

  public registration() {
    const controls = this.registrationForm.controls;
    if (this.registrationForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    const formData = this.registrationForm.getRawValue();
    this.registrationUp.emit(formData);
  }
}
