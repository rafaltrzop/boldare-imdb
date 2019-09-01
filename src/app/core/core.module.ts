import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers';

@NgModule({
  imports: [
    // CommonModule,
    RouterModule
  ],
  declarations: [AppComponent],
  exports: [AppComponent]
})
export class CoreModule {}
