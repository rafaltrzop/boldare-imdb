import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material';

import { AppComponent, NotFoundPageComponent } from '@app/core/containers';

@NgModule({
  imports: [RouterModule, MaterialModule],
  declarations: [AppComponent, NotFoundPageComponent]
})
export class CoreModule {}
