import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-inner1',
  templateUrl: './inner1.component.html',
})
export class Inner1Component {
  counter: number = 0;

  constructor(private counterService: CounterService) {
    this.counterService.increase.subscribe((value) => (this.counter = value));
  }
}
