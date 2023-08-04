import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishRoutingModule } from './wish-routing.module';
import { WishComponent } from './components/wish/wish.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WishComponent, CardComponent],
  imports: [CommonModule, WishRoutingModule, SharedModule, ReactiveFormsModule],
})
export class WishModule {}
