import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
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

  BehaviorSubjectHandler() {
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);
  }

  ReplaySubjectHandler() {
    const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);
  }

  ReplaySubjectHandler2() {
    const subject = new ReplaySubject(100, 500 /* windowTime */);

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    let i = 1;
    setInterval(() => subject.next(i++), 200);

    setTimeout(() => {
      subject.subscribe({
        next: (v) => console.log(`observerB: ${v}`),
      });
    }, 1000);
  }

  AsyncSubjectHandler() {
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);
    subject.complete();

    // Logs:
    // observerA: 5
    // observerB: 5
  }

  voidSubject() {
    // const subject = new Subject(); // Shorthand for Subject<void>
    // subject.subscribe({
    //   next: () => console.log('One second has passed'),
    // });
    // setTimeout(() => subject.next(), 1000);
  }
}
