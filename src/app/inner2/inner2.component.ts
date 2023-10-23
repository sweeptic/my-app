import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inner2',
  templateUrl: './inner2.component.html',
})
export class Inner2Component {
  counter: number = 0;

  constructor(private counterService: CounterService) {
    this.counterService.increase.subscribe((value) => (this.counter = value));
  }
}
