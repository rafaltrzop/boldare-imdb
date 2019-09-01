import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material';

import { AppComponent, NotFoundPageComponent } from './containers';

@NgModule({
  imports: [RouterModule, MaterialModule],
  declarations: [AppComponent, NotFoundPageComponent]
})
export class CoreModule {}
