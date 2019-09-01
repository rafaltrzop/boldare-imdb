import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginFormComponent } from './components';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [LoginFormComponent]
})
export class AuthModule {}
