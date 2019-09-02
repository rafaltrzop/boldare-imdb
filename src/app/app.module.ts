import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AuthModule } from '@app/auth';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core';

import { AppComponent } from '@app/core/containers';
import { FooComponent } from '@app/foo.component'; // TODO: remove

import { reducers, metaReducers } from '@app/reducers';

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
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
