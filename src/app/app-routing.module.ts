import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/services';

import { NotFoundPageComponent } from './core/containers';
import { FooComponent } from './foo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: FooComponent,
    //   component: MoviesComponent,
    canActivate: [AuthGuard]
    //   canActivateChild: [AuthGuard],
    //   children: [
    //     {
    //       path: ':id',
    //       component: MovieDetailsComponent
    //     }
    //   ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
