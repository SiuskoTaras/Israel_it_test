import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTodoComponent} from './components/list-todo/list-todo.component';

const routes: Routes = [
  {
    path: '',
    component: ListTodoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePanelRoutingModule { }
