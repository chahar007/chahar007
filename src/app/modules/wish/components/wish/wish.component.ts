import { Component } from '@angular/core';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
})
export class WishComponent {
  selectedTemplates: any = {};

  constructor(private eventEmitterService: EventEmitterService) {}
}
