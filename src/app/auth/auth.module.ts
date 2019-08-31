import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [LoginFormComponent]
})
export class AuthModule {}
