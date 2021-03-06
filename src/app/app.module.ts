import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import 'focus-visible';

import { AuthModule } from '@app/auth';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core';

import { AppComponent } from '@app/core/containers';

import { httpInterceptorProviders } from '@app/core/interceptors';
import { reducers, metaReducers, CustomSerializer } from '@app/reducers';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: CustomSerializer
    }),
    StoreDevtoolsModule.instrument({
      name: 'Boldare IMDb',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    CoreModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
