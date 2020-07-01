import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TablePanelComponent} from './containers/table-panel/table-panel.component';
import {ListTodoComponent} from './components/list-todo/list-todo.component';
import {TodoDetailComponent} from './components/todo-detail/todo-detail.component';

const routes: Routes = [
  {path: '', component: TablePanelComponent,
  children: [{path: 'itemToDO/:id', component: TodoDetailComponent}]},
  // {
  //   path: 'listToDo', component: TablePanelComponent,
  //   children: [{path: '', component: ListTodoComponent}]
  // },
  // {
  //   path: 'itemToDO:id', component: TablePanelComponent,
  //   children: [{path: '', component: ItemTodoComponent}]
  // },

  // {
  //   path: 'listToDo', component: TablePanelComponent,
  //   children: [{ path: '', component: ListTodoComponent }]
  // },
  // {
  //   path: 'listToDo:id', component: TablePanelComponent,
  //   children: [{ path: '', component: TodoDetailComponent }]
  // },
  // { path : '', redirectTo:'listToDo', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TablePanelRoutingModule {
}
