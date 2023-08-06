import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  showToaster = false;

  submit() {
    this.showToaster = true;

    setTimeout(() => {
      this.showToaster = false;
    }, 3000);
  }
}
