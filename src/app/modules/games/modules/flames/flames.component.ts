import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flames',
  templateUrl: './flames.component.html',
  styleUrls: ['./flames.component.scss'],
})
export class FlamesComponent implements OnInit {
  nameForm: any;
  showResult: boolean = false;
  result = 'Friendship';
  flamesArray = [
    'Friendship',
    'Love',
    'Affection',
    'Marriage',
    'Enemy',
    'Sibling',
  ];
  randomNumber = 0;
  flameIndex = 0;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.nameForm = this.fb.group({
      name1: ['', Validators.required],
      name2: ['', Validators.required],
    });
    this.generateRandomNumber();
  }
  generateRandomNumber() {
    setTimeout(() => {
      this.randomNumber + 1 == 5
        ? (this.randomNumber = 0)
        : ++this.randomNumber;
      this.generateRandomNumber();
    }, 2000);
  }

  calculateFlame() {
    if (this.nameForm.invalid) {
      return;
    }

    this.result = this.generateFlames(
      this.nameForm.value.name1,
      this.nameForm.value.name2
    );
    this.flameIndex = this.flamesArray.findIndex((x) => x == this.result);

    if (this.result) {
      this.showResult = true;
    }
  }

  close() {
    this.showResult = false;
    this.result = '';
  }

  generateFlames(name1, name2) {
    let name = name1
      .toLowerCase()
      .split('') // take all characters in "name1", to compare
      .filter((c) => name2.toLowerCase().includes(c)) // keep only characters (in "name1") also found in "name2"
      .reduce(
        (result, c) => [
          result[0].replace(new RegExp(`${c}`, 'g'), ''), // replace common characters in "name1"
          result[1].replace(new RegExp(`${c}`, 'g'), ''), // replace common characters in "name2"
        ],
        [name1.toLowerCase(), name2.toLowerCase()]
      )
      .reduce((length, letters) => [length.shift() + letters.length], [0]) // determine length of characters left, after removal
      .map((length) => {
        const findStop = (flames, startAt) => {
          if (flames.length === 1) return flames; // stop, if one flame character is left
          const position = new Array(length)
            .fill(0) // move "length" number of times
            .reduce(
              (beginAt) => (beginAt + 1 > flames.length ? 1 : beginAt + 1),
              startAt - 1
            ); // determine where to stop, in one move
          flames.splice(position - 1, 1); // remove the "flame" character where we stopped
          return findStop(flames, position); // find the next stop
        };
        return findStop('FLAMES'.split(''), 1)[0]; // begin finding stops
      })
      .map(
        (result) =>
          this.flamesArray.filter((flame) =>
            flame.toLowerCase().startsWith(result.toLowerCase())
          )[0] // present result in readable form
      )[0];

    return name;
  }
}
