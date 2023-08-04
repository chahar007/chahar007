import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CARD_TEMPLATES, HOME_SLIDER } from 'src/assets/constant/app-constant';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  categorySlider: any;
  selectedIndex: number = 0;
  @ViewChild('categorySlider', { static: true })
  categorySliderElement: ElementRef | any;
  imagesList: any = CARD_TEMPLATES;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
