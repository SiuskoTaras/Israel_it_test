import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TablePanelComponent} from './containers/table-panel/table-panel.component';

const routes: Routes = [
  {
    path: '',
    component: TablePanelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePanelRoutingModule { }
