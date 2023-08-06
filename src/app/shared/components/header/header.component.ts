import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigate(type) {
    switch (type) {
      case 'home':
        this.router.navigate(['/']);
        break;

      case 'create':
        this.router.navigate(['/create-wishes/']);
        break;
    }
  }
}
