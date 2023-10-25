import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter } from '@angular/core';
import {
  EMPTY,
  Observable,
  Subscription,
  asapScheduler,
  asyncScheduler,
  catchError,
  concatAll,
  concatMap,
  defer,
  first,
  from,
  fromEvent,
  fromEventPattern,
  generate,
  iif,
  interval,
  last,
  map,
  of,
  range,
  take,
  takeUntil,
  throwError,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observables-component',
  templateUrl: './observables-component.component.html',
})
export class ObservablesComponentComponent {
  constructor(private http: HttpClient) {}

  countSub = new Subscription();

  observable = new Observable((subscriber) => {
    console.log('subscriber', subscriber);

    subscriber.next(1);
    subscriber.error(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  onClickHandler() {
    this.observable.subscribe({
      next(x) {
        console.log('next ' + x);
      },
      error(err) {
        console.log('something wrong occurred: ' + err);
        const errorObj = new Error();
        console.log('err', errorObj);
      },
      complete() {
        console.log('done');
      },
    });
  }
  event1 = new EventEmitter();
  ngOnInit() {
    // this.countSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    this.event1.subscribe((x) => {
      console.log(x);
    });
    this.event1.subscribe((x) => {
      console.log(x * 2);
    });
  }

  onEmitEvent() {
    this.event1.emit(45);
    this.event1.emit(100);
  }

  observerFunc() {
    // function foo() {
    //   console.log('Hello');
    //   return 42;
    // }
    // const x = foo.call('a');
    // console.log('x', x);
    // const y = foo.call('b');
    // console.log('y', y);

    const observable1 = new Observable((subscriber) => {
      console.log('Hello');
      subscriber.next(42); // "return" another value
      subscriber.next(100); // "return" yet another
      subscriber.complete();
    });

    observable1.subscribe((x) => {
      console.log(x);
    });
    observable1.subscribe({
      next: (x) => console.log('Observer got a next value: ' + x),
      error: (err) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  onOperators1() {
    of(1, 2, 3)
      //   .pipe(map((x) => x * x))
      .pipe(
        last(),
        map((x) => x * x)
      )
      .subscribe((v) => console.log(`value is: ${v}`));
    //
    //
    // const observable2 = interval(1000).subscribe((x) => console.log(x));
  }

  onfileObs1() {
    const urlObservable = new Observable();

    // 'https://httpbin.org/get'

    const fileObservable = urlObservable.pipe(
      map((url: any) => this.http.get('https://httpbin.org/get')),
      concatAll()
    );

    fileObservable.subscribe((data) => {
      console.log(data);
    });
  }

  ajaxOp() {
    const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
      map((userResponse) => console.log('users: ', userResponse)),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    );

    obs$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }

  ajaxGetJSON() {
    const obs$ = ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
      map((userResponse) => console.log('users: ', userResponse)),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    );

    obs$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }

  ajaxPost() {
    const users = ajax({
      url: 'https://httpbin.org/delay/2',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs',
      },
      body: {
        rxjs: 'Hello World!',
      },
    }).pipe(
      map((response) => console.log('response: ', response)),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    );

    users.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }

  ajaxFetch() {
    const obs$ = ajax('https://api.github.com/404').pipe(
      map((userResponse) => console.log('users: ', userResponse)),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    );

    obs$.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }

  defer() {
    const clicksOrInterval = defer(() => {
      return Math.random() > 0.5
        ? fromEvent(document, 'click')
        : interval(1000);
    });
    clicksOrInterval.subscribe((x) => console.log(x));
  }

  fromArr() {
    const array = [10, 20, 30];
    const result = from(array);

    result.subscribe((x) => console.log(x));
  }

  fromGen() {
    function* generateDoubles(seed: any) {
      let i = seed;
      while (true) {
        yield i;
        i = 2 * i; // double it
      }
    }

    const iterator = generateDoubles(3);
    const result = from(iterator).pipe(take(10));

    result.subscribe((x) => console.log(x));
  }

  fromEvent() {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe((x) => console.log(x));

    // Results in:
    // MouseEvent object logged to console every time a click
    // occurs on the document.
  }

  fromasyncscheduler() {
    console.log('start');

    const array = [10, 20, 30];
    const result = from(array, asyncScheduler);

    result.subscribe((x) => console.log(x));

    console.log('end');
  }

  fromEventListener() {
    const div = document.createElement('div');
    div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
    document.body.appendChild(div);

    // note optional configuration parameter which will be passed to addEventListener
    const clicksInDocument = fromEvent(document, 'click', { capture: true });
    const clicksInDiv = fromEvent(div, 'click');

    clicksInDocument.subscribe(() => console.log('document'));
    clicksInDiv.subscribe(() => console.log('div'));

    // By default events bubble UP in DOM tree, so normally
    // when we would click on div in document
    // "div" would be logged first and then "document".
    // Since we specified optional `capture` option, document
    // will catch event when it goes DOWN DOM tree, so console
    // will log "document" and then "div".
  }

  fromEventPattern() {
    function addClickHandler(handler: any) {
      document.addEventListener('click', handler);
    }

    function removeClickHandler(handler: any) {
      document.removeEventListener('click', handler);
    }

    const clicks = fromEventPattern(addClickHandler, removeClickHandler);
    clicks.subscribe((x) => console.log(x));
  }

  generate1() {
    const result = generate(
      0,
      (x) => x < 33,
      (x) => x + 1,
      (x) => x
    );

    result.subscribe((x) => console.log(x));
  }

  generate2() {
    const result = generate(
      1,
      (x) => x < 5,
      (x) => x * 2,
      (x) => x + 1,
      asapScheduler
    );

    result.subscribe((x) => console.log(x));
  }

  generate3() {
    const result = generate(
      0,
      (x) => x < 3,
      (x) => x + 1
    );

    result.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Complete!'),
    });
  }

  generate4() {
    const result = generate({
      initialState: 0,
      condition: (x) => x < 3,
      iterate: (x) => x + 1,
      resultSelector: (x: any) => x,
    });

    result.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Complete!'),
    });
  }

  interval() {
    const numbers = interval(1000);
    const takeFourNumbers = numbers.pipe(take(4));
    takeFourNumbers.subscribe((x) => console.log('Next: ', x));
  }

  of1() {
    of(10, 20, 30).subscribe({
      next: (value) => console.log('next:', value),
      error: (err) => console.log('error:', err),
      complete: () => console.log('the end'),
    });
  }

  range() {
    const numbers = range(1, 50);
    numbers.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Complete!'),
    });
  }

  throw1() {
    let errorCount = 0;

    const errorWithTimestamp$ = throwError(() => {
      const error: any = new Error(`This is error number ${++errorCount}`);
      error.timestamp = Date.now();
      return error;
    });

    errorWithTimestamp$.subscribe({
      error: (err) => console.log(err.timestamp, err.message),
    });

    errorWithTimestamp$.subscribe({
      error: (err) => console.log(err.timestamp, err.message),
    });

    // Logs the timestamp and a new error message for each subscription
  }

  throw2() {
    const delays$ = of(1000, 2000, Infinity, 3000);

    delays$
      .pipe(
        concatMap((ms) => {
          if (ms < 10000) {
            return timer(ms);
          } else {
            // This is probably overkill.
            return throwError(() => new Error(`Invalid time ${ms}`));
          }
        })
      )
      .subscribe({
        next: console.log,
        error: console.error,
      });
  }

  throw3() {
    const delays$ = of(1000, 2000, Infinity, 3000);

    delays$
      .pipe(
        concatMap((ms) => {
          if (ms < 10000) {
            return timer(ms);
          } else {
            // Cleaner and easier to read for most folks.
            throw new Error(`Invalid time ${ms}`);
          }
        })
      )
      .subscribe({
        next: console.log,
        error: console.error,
      });
  }

  timer1() {
    // This could be any observable
    const source = of(1, 2, 3);

    timer(3000)
      .pipe(concatMap(() => source))
      .subscribe(console.log);
  }

  timer2() {
    // Build a Date object that marks the
    // next minute.
    const currentDate = new Date();
    const startOfNextMinute = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes() + 1
    );

    // This could be any observable stream
    const source = interval(1000);

    const result = source.pipe(takeUntil(timer(startOfNextMinute)));

    result.subscribe(console.log);
  }

  timer3() {
    timer(0, 1000).subscribe((n) => console.log('timer', n));
    interval(1000).subscribe((n) => console.log('interval', n));
  }

  iif1() {
    let subscribeToFirst: any;
    const firstOrSecond = iif(
      () => subscribeToFirst,
      of('first'),
      of('second')
    );

    subscribeToFirst = true;
    firstOrSecond.subscribe((value) => console.log(value));

    // Logs:
    // 'first'

    subscribeToFirst = false;
    firstOrSecond.subscribe((value) => console.log(value));

    // Logs:
    // 'second'
  }

  iif2() {
    let accessGranted: any;
    const observableIfYouHaveAccess = iif(
      () => accessGranted,
      of('It seems you have an access...'),
      EMPTY
    );

    accessGranted = true;
    observableIfYouHaveAccess.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('The end'),
    });

    // Logs:
    // 'It seems you have an access...'
    // 'The end'

    accessGranted = false;
    observableIfYouHaveAccess.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('The end'),
    });
  }
  // Logs:
  // 'The end'}

  //
  //
  //
  //

  onStopHandler() {
    this.countSub.unsubscribe();
  }

  ngOnDestroy() {
    this.countSub.unsubscribe();
  }
}
