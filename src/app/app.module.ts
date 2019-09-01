import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from './auth';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';

import { AppComponent } from './core/containers';
import { FooComponent } from './foo.component';

@NgModule({
  declarations: [FooComponent],
  imports: [BrowserModule, AuthModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
