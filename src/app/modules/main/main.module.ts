import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { CourselComponent } from './components/coursel/coursel.component';

@NgModule({
  declarations: [MainComponent, CourselComponent],
  imports: [CommonModule, MainRoutingModule, NgOptimizedImage],
})
export class MainModule {}
