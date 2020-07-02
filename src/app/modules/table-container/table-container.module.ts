import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePanelComponent } from './containers/table-panel/table-panel.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { TableContainerComponent } from './containers/table-container/table-container.component';
import { TodoItemComponent } from './containers/todo-item/todo-item.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TableContainerComponent,
    children: [
      {path: '', redirectTo: 'todo', pathMatch: 'full'},
      {
        path: '',
        component: TablePanelComponent,
      },
      {
        path: 'item/:id',
        component: TodoItemComponent,
      },
      {
        path: 'todo-list',
        component: ListTodoComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    TablePanelComponent,
    ListTodoComponent,
    CreateTodoComponent,
    TodoDetailComponent,
    TableContainerComponent,
    TodoItemComponent,
    TodoEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TableContainerModule {
}
