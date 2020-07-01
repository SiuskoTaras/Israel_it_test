import {Component, OnInit} from '@angular/core';
import {TodoTableService} from '../../../core/services/todo-table/todo-table.service';
import {AuthorizationService} from '../../../core/services/authorization/authorization.service';
import {Messages} from '../../../core/models/messages/messages';
import {Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.scss']
})
export class TablePanelComponent implements OnInit {

  unsubscribe: Subject<boolean> = new Subject();
  timer$ = timer(3000).pipe(takeUntil(this.unsubscribe));

  public createNew: boolean = false;
  public messages = new Messages();

  constructor(private todoTable: TodoTableService,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
  }


  public async create(newToDo) {
    try {
      await this.todoTable.createToDo(newToDo)
        .toPromise()
        .then(res => this.messages.success = true)
        .catch(err => console.log(err));
    } catch (e) {
      console.log(e);
      this.messages.error = true;
    }
    this.timer$.subscribe(() => this.messages = new Messages());
  }


  public logOut() {
    // this.authorizationService.logoutUser();
  }
}
