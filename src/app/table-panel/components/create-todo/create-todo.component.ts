import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ToDo} from '../../../core/models/todo';
import {ConfirmDialogComponent} from '../../../share/components/confirm-dialog/confirm-dialog.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConvertDate} from '../../../core/helpers/time-zone';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})

export class CreateTodoComponent implements OnInit {

  @Output() newCreate: EventEmitter<ToDo> = new EventEmitter();
  public myForm: FormGroup;
  private date = new Date();

  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      createdAt: [ConvertDate.createDateObject(this.date)],
      editedAt: ['unedited']
    });
  }

  public isControlInvalid(controlName: string) {
    const control = this.myForm.controls[controlName];
    return control.invalid && control.touched;
  }

  public create() {
    const controls = this.myForm.controls;
    if (this.myForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'create'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return true;
      const formData = this.myForm.getRawValue();
      this.newCreate.emit(formData);
    });
  }
}
