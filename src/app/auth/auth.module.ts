import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/material';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';

import { LoginPageComponent } from '@app/auth/containers';
import { LoginFormComponent } from '@app/auth/components';

import { AuthEffects } from '@app/auth/effects';
import * as fromAuth from '@app/auth/reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginPageComponent, LoginFormComponent]
})
export class AuthModule {}
