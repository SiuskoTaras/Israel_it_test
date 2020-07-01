import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthorizationGuard} from './core/guards/authorization/authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'authorization',
        loadChildren: () => import('src/app/authorization/authorization.module').then(module => module.AuthorizationModule),
      },
      {
        path: 'todo-list',
        loadChildren: () => import('./table-panel/table-panel.module').then(module => module.TablePanelModule),
        canActivate: [AuthorizationGuard]
      }
    ],
  },
  {path: '', redirectTo: '/authorization', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
