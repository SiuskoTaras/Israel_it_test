import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/share/components/confirm-dialog/confirm-dialog.component';
import { ToDo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Output() removeToDo: EventEmitter<number> = new EventEmitter();

  @Input('todo') todo: ToDo;


  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }


  public deleteToDo(todoId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'delete'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return true;
      }
      this.removeToDo.emit(todoId);
    });
  }
}
