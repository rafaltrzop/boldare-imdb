import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '@app/auth/containers';
import { NotAuthGuard } from '@app/auth/services';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NotAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
