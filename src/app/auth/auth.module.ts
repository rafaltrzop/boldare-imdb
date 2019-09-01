import { NgModule } from '@angular/core';

import { AuthRoutingModule } from '@app/auth/auth-routing.module';

import { LoginPageComponent } from '@app/auth/containers';
import { LoginFormComponent } from '@app/auth/components';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [LoginPageComponent, LoginFormComponent]
})
export class AuthModule {}
