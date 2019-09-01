import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent, NotFoundPageComponent } from './containers';

@NgModule({
  imports: [
    // CommonModule,
    RouterModule
  ],
  declarations: [AppComponent, NotFoundPageComponent]
})
export class CoreModule {}
