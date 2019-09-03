import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material';

import { AppComponent, NotFoundPageComponent } from '@app/core/containers';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [AppComponent, NotFoundPageComponent]
})
export class CoreModule {}
