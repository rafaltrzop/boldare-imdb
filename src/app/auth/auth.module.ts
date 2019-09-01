import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';

import { LoginPageComponent } from '@app/auth/containers';
import { LoginFormComponent } from '@app/auth/components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule
  ],
  declarations: [LoginPageComponent, LoginFormComponent]
})
export class AuthModule {}
