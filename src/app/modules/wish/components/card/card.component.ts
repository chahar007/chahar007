import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, pipe } from 'rxjs';
import { WishService } from 'src/app/core/services/wish.service';
import { CARD_TEMPLATES } from 'src/assets/constant/app-constant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  selectedTemplate: any = {
    imageUrl: 'assets/images/card/c1.jpeg',
    title: 'Dummy text to check the response of the user',
  };
  templates: any = CARD_TEMPLATES;
  step = 1;
  userText = '';
  formData: FormGroup;
  constructor(private wishService: WishService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formData = this.fb.group({
      text: [this.selectedTemplate.value, Validators.required],
    });
    this.userInputSubs();
  }

  templateSelected(template) {
    this.selectedTemplate.imageUrl = template.imgUrl;
    this.templates.map((temp) => {
      if (temp.id == template.id) {
        temp.selected = true;
      } else {
        temp.selected = false;
      }
      return temp;
    });
  }

  changeStep(step) {
    this.step = step;
  }

  userInputSubs() {
    this.formData
      .get('text')
      .valueChanges.pipe(distinctUntilChanged())
      .subscribe((res) => {
        this.selectedTemplate.title = res.trim();
        this.formData.get('text').setValue(res);
      });
  }

  submit() {
    if (this.formData.invalid) return;

    this.wishService.createMeme(this.selectedTemplate).subscribe((res: any) => {
      console.log('res', res);
    });
  }

  ngOnDestroy(): void {}
}
