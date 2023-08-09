import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlamesComponent } from './flames.component';

const routes: Routes = [
  {
    path: '',
    component: FlamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlamesRoutingModule {}
