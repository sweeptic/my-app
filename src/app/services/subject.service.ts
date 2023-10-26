import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObjectService {
  @Output() increase = new Subject<number>();
  counter = 0;

  constructor() {}

  increaseCounterSubj() {
    this.counter = this.counter + 1;
    console.log('this.counter', this.counter);

    this.increase.next(this.counter);
  }

  getCounterSubj() {
    return this.counter;
  }
}
