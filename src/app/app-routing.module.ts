import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from './core/guards/authorization/authorization.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'authorization', pathMatch: 'full'
  },
  {
    path: 'authorization',
    loadChildren: () => import('src/app/modules/authorization/authorization.module').then(module => module.AuthorizationModule),
  },
  {
    path: 'todo',
    loadChildren: () => import('src/app/modules/table-panel/table-container.module').then(module => module.TableContainerModule),
    canActivate: [AuthorizationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
