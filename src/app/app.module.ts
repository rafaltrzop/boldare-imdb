import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '@app/auth';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core';

import { AppComponent } from '@app/core/containers';
import { FooComponent } from '@app/foo.component'; // TODO: remove

@NgModule({
  declarations: [FooComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
