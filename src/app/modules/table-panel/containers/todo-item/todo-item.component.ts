import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDo } from 'src/app/core/models/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoTableService } from 'src/app/core/services/todo-table/todo-table.service';
import { Messages } from 'src/app/core/models/messages/messages';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnDestroy {

  public todo: ToDo;
  public edit: boolean = true;
  public messages = new Messages();

  private unsubscribe: Subject<boolean> = new Subject();
  private timer$ = timer(2000).pipe(takeUntil(this.unsubscribe));

  constructor(private activatedRoute: ActivatedRoute,
              private todoTableService: TodoTableService,
              private router: Router) { }

  ngOnInit(): void {
    this.getToDo();
  }

  private getToDo() {
    this.activatedRoute.params.pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      this.todoTableService.getToDoDetails(res.id).subscribe((resp: ToDo) => {
        this.todo = resp;
      });
    });
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

  public async update(updateToDo: ToDo) {
    try {
      this.todoTableService.updateToDo(updateToDo)
        .toPromise()
        .then(() => {
          this.success();
        })
        .catch( err => {
          console.log(err);
          this.messages.error = true;
        });
    } catch (e) {
      console.log(e);
      this.messages.warning = true;
    }
    this.timerSubscribe();
  }

  private timerSubscribe() {
    this.timer$.subscribe(() => this.messages = new Messages());
  }

  private success() {
    this.messages.success = true;
    setTimeout(() => {
      this.router.navigate( ['/todo/']);
    }, 2200);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
