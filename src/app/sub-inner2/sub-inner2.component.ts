import { Component } from '@angular/core';
import { ObjectService } from '../services/subject.service';

@Component({
  selector: 'app-sub-inner2',
  templateUrl: './sub-inner2.component.html',
})
export class SubInner2Component {
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
