import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from 'src/app/core/models/todo';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/share/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  @Input('todo') todo: ToDo;
  @Output() deleteUp: EventEmitter<number> = new EventEmitter<number>();
  public panelOpenState: boolean = false;

  constructor(private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  editToDo(edit: ToDo) {
    this.router.navigate( ['/todo/item/', edit.id]);
  }

  deleteToDo(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'delete'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return true;
      }
      this.deleteUp.emit(id);
    });
  }
}
