import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePanelRoutingModule } from './table-panel-routing.module';
import { TablePanelComponent } from './containers/table-panel/table-panel.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { ItemTodoComponent } from './components/item-todo/item-todo.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [TablePanelComponent, EditTodoComponent, ListTodoComponent, ItemTodoComponent, CreateTodoComponent],
  imports: [
    CommonModule,
    TablePanelRoutingModule,
    ShareModule
  ]
})
export class TablePanelModule { }
