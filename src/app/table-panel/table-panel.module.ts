import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePanelRoutingModule } from './table-panel-routing.module';
import { TablePanelComponent } from './containers/table-panel/table-panel.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { ItemTodoComponent } from './components/item-todo/item-todo.component';


@NgModule({
  declarations: [TablePanelComponent, EditTodoComponent, ListTodoComponent, ItemTodoComponent],
  imports: [
    CommonModule,
    TablePanelRoutingModule
  ]
})
export class TablePanelModule { }
