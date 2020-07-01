import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConfirmDialogComponent} from '../../../share/components/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ToDo} from '../../../core/models/todo';
import {ConvertDate} from '../../../core/helpers/time-zone';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Output() updateToDo: EventEmitter<ToDo> = new EventEmitter();
  @Output() removeToDo: EventEmitter<number> = new EventEmitter();

  public edit: boolean = true;
  private date = new Date();
  public todo: ToDo;

  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.activatedRoute.snapshot.params[todo]
  }

  public back() {

  }

  public cancel() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'exit editing'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return true;
      }
    });
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

  public deleteToDo(vacancyId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'delete'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return true;
      }
      this.removeToDo.emit(vacancyId);
    });
  }
}
