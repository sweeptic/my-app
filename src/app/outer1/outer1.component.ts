import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-outer1',
  templateUrl: './outer1.component.html',
})
export class Outer1Component {
  counter: number = 0;
  constructor(private counterService: CounterService) {
    this.counterService.increase.subscribe((value) => (this.counter = value));
  }

  onClickHandler() {
    this.counterService.increaseCounter();
  }
}
