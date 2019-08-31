import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth';

import { AppComponent } from './app.component';
import { FooComponent } from './foo.component';

@NgModule({
  declarations: [AppComponent, FooComponent],
  imports: [BrowserModule, AuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
