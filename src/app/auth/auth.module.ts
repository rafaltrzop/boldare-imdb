import { NgModule } from '@angular/core';

import { AuthRoutingModule } from '@app/auth/auth-routing.module';

import { LoginFormComponent } from '@app/auth/components';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [LoginFormComponent]
})
export class AuthModule {}
