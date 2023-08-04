import { Component, OnDestroy, OnInit } from '@angular/core';
import { HOME_SLIDER } from 'src/assets/constant/app-constant';

@Component({
  selector: 'app-coursel',
  templateUrl: './coursel.component.html',
  styleUrls: ['./coursel.component.scss'],
})
export class CourselComponent implements OnInit, OnDestroy {
  images = HOME_SLIDER;
  activeSlide = 0;
  timer: any;

  ngOnInit() {
    this.initSlider();
  }

  initSlider() {
    this.timer = setInterval(() => {
      this.activeSlide = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    }, 2500);
  }

  changeSlide(arg: any) {
    if (this.activeSlide == 2) {
      this.activeSlide = 0;
    } else if (this.activeSlide == 0) {
      this.activeSlide = 2;
    } else {
      this.activeSlide = this.activeSlide + arg;
    }
  }

  ngOnDestroy(): void {
    this.activeSlide = 0;
    clearTimeout(this.timer);
  }
}
