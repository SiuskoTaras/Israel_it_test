import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from '../../../core/models/todo';
import {ConfirmDialogComponent} from '../../../share/components/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  @Input('todo') todo: ToDo;
  @Output() deleteUp: EventEmitter<number> = new EventEmitter<number>();
  public panelOpenState: boolean = false;

  constructor( private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  editToDo(edit: ToDo) {

  }

  deleteToDo(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'delete'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return true;
      this.deleteUp.emit(id);
    });
  }
}
