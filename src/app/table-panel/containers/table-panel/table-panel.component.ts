import { Component, OnInit } from '@angular/core';
import {TodoTableService} from '../../../core/services/todo-table/todo-table.service';
import {AuthorizationService} from '../../../core/services/authorization/authorization.service';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.scss']
})
export class TablePanelComponent implements OnInit {

  public createNew: boolean = false;

  constructor( private todoTable: TodoTableService,
               private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }


  public async create(newToDo) {
    try {
      await this.todoTable.createToDo(newToDo)
        .toPromise()
        .then(success => console.log(success))
        .catch(err => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }


  public logOut() {
    // this.authorizationService.logoutUser();
  }
}
