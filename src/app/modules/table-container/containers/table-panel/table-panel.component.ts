import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoTableService } from 'src/app/core/services/todo-table/todo-table.service';
import { AuthorizationService } from 'src/app/core/services/authorization/authorization.service';
import { Messages } from 'src/app/core/models/messages';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToDo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.scss']
})
export class TablePanelComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<boolean> = new Subject();
  private timer$ = timer(2000).pipe(takeUntil(this.unsubscribe));

  public createNew: boolean = false;
  public messages = new Messages();
  public listToDo: ToDo[];

  constructor(private todoTableService: TodoTableService,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.getAllToDo();
  }

  public async create(newToDo) {
    try {
      await this.todoTableService.createToDo(newToDo)
        .toPromise()
        .then(() => {
          this.success();
        })
        .catch(err => {
          console.log(err);
          this.messages.error = true;
        });
    } catch (e) {
      console.log(e);
      this.messages.warning = true;
    }
    this.timerSubscribe();
  }

  private getAllToDo() {
    try {
      this.todoTableService.getToDoList()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
          res => {
            this.listToDo = res;
          },
          err => {
            console.log(err);
            this.messages.error = true;
          }
        );
    } catch (e) {
      console.log(e);
      this.messages.warning = true;
    }
    this.timerSubscribe();
  }

  public async deleteToDo(id: number) {
    await this.todoTableService.deleteToDo(id)
      .toPromise()
      .then(() => {
        this.success();
      })
      .catch(err => {
        console.log(err);
        this.messages.error = true;
      });
    this.timerSubscribe();
  }

  public logOut() {
    this.authorizationService.logoutUser();
  }

  private timerSubscribe() {
    this.timer$.subscribe(() => this.messages = new Messages());
  }

  private success() {
    this.messages.success = true;
    setTimeout(() => {
      this.getAllToDo();
    }, 2200);
  }

  public trackByFunction(index: number, todo: ToDo) {
    return todo.id; // or index
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
