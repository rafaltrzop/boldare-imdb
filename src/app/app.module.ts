import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';

import { AppComponent } from './core/containers';
import { FooComponent } from './foo.component';

@NgModule({
  declarations: [FooComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
