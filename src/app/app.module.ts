import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AuthModule } from '@app/auth';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core';

import { AppComponent } from '@app/core/containers';
import { FooComponent } from '@app/foo.component'; // TODO: remove

import { reducers, metaReducers } from '@app/reducers';
import { environment } from '../environments/environment'; // TODO: add @env alias

@NgModule({
  declarations: [FooComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      name: 'Boldare IMDb',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
