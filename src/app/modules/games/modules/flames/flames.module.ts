import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlamesRoutingModule } from './flames-routing.module';
import { FlamesComponent } from './flames.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FlamesComponent],
  imports: [CommonModule, FlamesRoutingModule, ReactiveFormsModule],
})
export class FlamesModule {}
