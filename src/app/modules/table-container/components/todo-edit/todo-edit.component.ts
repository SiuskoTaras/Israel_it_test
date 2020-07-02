import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/core/models/todo';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { ConvertDate } from 'src/app/core/helpers/time-zone';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  @Output() updateToDo: EventEmitter<ToDo> = new EventEmitter();

  @Input('todo') todo: ToDo;
  private date = new Date();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public saveUpdate(todo: ToDo) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'save changes'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return true;
      }
      this.todo.editedAt = ConvertDate.createDateObject(this.date);
      const updatedToDo = {...todo, ...this.todo};
      this.updateToDo.emit(updatedToDo);
    });
  }

}
