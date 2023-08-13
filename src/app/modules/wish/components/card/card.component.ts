import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, pipe } from 'rxjs';
import { WishService } from 'src/app/core/services/wish.service';
import { CARD_TEMPLATES } from 'src/assets/constant/app-constant';
import * as htmlToImage from 'html-to-image';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  selectedTemplate: any = {};
  templates: any = CARD_TEMPLATES;
  // tempArray = [];
  step = 1;
  userText = '';
  formData: FormGroup;
  os = 'android';
  constructor(private wishService: WishService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectedTemplate = this.templates[0];
    console.log('selected templates', this.selectedTemplate);

    this.formData = this.fb.group({
      text: [this.selectedTemplate.value, Validators.required],
    });
    this.os = this.getOS();
    this.userInputSubs();
  }

  templateSelected(template) {
    this.selectedTemplate = template;
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
    if (this.os != 'ios') {
      htmlToImage
        .toPng(document.getElementById('card-drawred'), { quality: 0.95 })
        .then(function (dataUrl: any) {
          var link = document.createElement('a');
          link.download = 'greetings.png';
          link.href = dataUrl;
          link.click();
        });
    } else {
      this.wishService
        .createMeme(this.selectedTemplate)
        .subscribe((res: any) => {});
    }
  }

  getOS() {
    if (navigator.userAgent.match(/Android/i)) {
      return 'android';
    }
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      return 'ios';
    }
    return 'others';
  }

  ngOnDestroy(): void {}
}
