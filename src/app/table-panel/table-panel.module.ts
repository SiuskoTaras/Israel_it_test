import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePanelRoutingModule } from './table-panel-routing.module';
import { TablePanelComponent } from './containers/table-panel/table-panel.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import {ShareModule} from '../share/share.module';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

@NgModule({
  declarations: [TablePanelComponent, EditTodoComponent, ListTodoComponent, CreateTodoComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    TablePanelRoutingModule,
    ShareModule,
  ]
})
export class TablePanelModule { }
