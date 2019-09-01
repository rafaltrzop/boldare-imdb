import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/auth/services';

import { NotFoundPageComponent } from '@app/core/containers';
import { FooComponent } from '@app/foo.component';

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
