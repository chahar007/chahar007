import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  createWish() {
    this.router.navigate(['/create-wishes']);
  }

  navigate(type) {
    switch (type) {
      case 'tic-tac-toe':
        this.router.navigate(['/games/tic-tac-toe']);
        break;
      case 'flames':
        this.router.navigate(['/games/flames']);
        break;
    }
  }
}
