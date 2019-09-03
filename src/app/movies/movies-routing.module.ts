import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/auth/services';
import { FooComponent } from '@app/movies/components';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
