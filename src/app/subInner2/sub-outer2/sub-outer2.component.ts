import { Component } from '@angular/core';
import { ObjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-sub-outer2',
  templateUrl: './sub-outer2.component.html',
})
export class SubOuter2Component {
  counter?: number;

  constructor(private subjCounter: ObjectService) {
    this.subjCounter.increase.subscribe({
      next: (value) => {
        console.log(value);
        this.counter = value;
      },
    });
  }
}
