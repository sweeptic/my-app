import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-outer2',
  templateUrl: './outer2.component.html',
  providers: [CounterService],
})
export class Outer2Component {
  counter: number = 0;
  constructor(private counterService: CounterService) {
    this.counterService.increase.subscribe((value) => {
      console.log('value', value);

      this.counter = value;
    });
  }

  onClickHandler() {
    this.counterService.increaseCounter();
  }
}
