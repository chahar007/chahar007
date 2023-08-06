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
    this.router.navigate([type]);
    // switch (type) {
    //   case 'home':
    //     break;

    //   case 'create':
    //     this.router.navigate(['/create-wishes/']);
    //     break;
    // }
  }
}
