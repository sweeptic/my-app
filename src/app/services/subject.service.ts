import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject, connectable, from, multicast } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObjectService {
  increase = new Subject<number>();
  numList = new Subject<number>();
  counter = 0;

  constructor() {}

  increaseCounterSubj() {
    this.counter = this.counter + 1;
    console.log('this.counter', this.counter);
    this.increase.next(this.counter);
  }

  listNum() {
    const source = from([1, 2, 3]);
    // source.subscribe(this.numList);

    const multicasted = connectable(source, { connector: () => this.numList });
    multicasted.connect();
  }

  getCounterSubj() {
    return this.counter;
  }
}
