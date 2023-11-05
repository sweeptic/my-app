import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  @Output() increase = new EventEmitter<number>();
  counter = 0;

  constructor() {}

  increaseCounter() {
    this.counter = this.counter + 1;
    this.increase.emit(this.counter);
  }
}
