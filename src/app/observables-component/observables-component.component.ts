import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter } from '@angular/core';
import {
  EMPTY,
  Observable,
  Subscription,
  asapScheduler,
  asyncScheduler,
  buffer,
  bufferCount,
  bufferToggle,
  bufferWhen,
  catchError,
  combineLatest,
  concat,
  concatAll,
  concatMap,
  concatMapTo,
  defer,
  delay,
  exhaustMap,
  expand,
  first,
  forkJoin,
  from,
  fromEvent,
  fromEventPattern,
  generate,
  groupBy,
  iif,
  interval,
  last,
  map,
  mapTo,
  merge,
  mergeAll,
  mergeMap,
  mergeMapTo,
  mergeScan,
  of,
  pairwise,
  partition,
  pluck,
  race,
  range,
  reduce,
  scan,
  skip,
  startWith,
  switchMap,
  switchMapTo,
  take,
  takeUntil,
  throwError,
  timer,
  windowCount,
  windowTime,
  windowToggle,
  windowWhen,
  zip,
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

  combineLatest1() {
    const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
    const combinedTimers = combineLatest([firstTimer, secondTimer]);
    combinedTimers.subscribe((value) => console.log(value));
  }

  combineLatest2() {
    const observables = {
      a: of(1).pipe(delay(1000), startWith(0)),
      b: of(5).pipe(delay(5000), startWith(0)),
      c: of(10).pipe(delay(10000), startWith(0)),
    };
    const combined = combineLatest(observables);
    combined.subscribe((value) => console.log(value));
  }
  // Logs
  // { a: 0, b: 0, c: 0 } immediately
  // { a: 1, b: 0, c: 0 } after 1s
  // { a: 1, b: 5, c: 0 } after 5s
  // { a: 1, b: 5, c: 10 } after 10s}
  combineLatest3() {
    const observables = [1, 5, 10].map((n) =>
      of(n).pipe(
        delay(n * 1000), // emit 0 and then emit n after n seconds
        startWith(0)
      )
    );
    const combined = combineLatest(observables);
    combined.subscribe((value) => console.log(value));
    // Logs
    // [0, 0, 0] immediately
    // [1, 0, 0] after 1s
    // [1, 5, 0] after 5s
    // [1, 5, 10] after 10s
  }

  combineLatest4() {
    const weight = of(70, 72, 76, 79, 75);
    const height = of(1.76, 1.77, 1.78);
    const bmi = combineLatest([weight, height]).pipe(
      map(([w, h]) => w / (h * h))
    );
    bmi.subscribe((x) => console.log('BMI is ' + x));
  }

  concat1() {
    const timer = interval(1000).pipe(take(4));
    const sequence = range(1, 10);
    const result = concat(timer, sequence);
    result.subscribe((x) => console.log(x));
  }
  concat2() {
    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    const result = concat(timer1, timer2, timer3);
    result.subscribe((x) => console.log(x));

    // results in the following:
    // (Prints to console sequentially)
    // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
    // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
    // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
  }
  concat3() {
    const timer = interval(1000).pipe(take(2));

    concat(timer, timer) // concatenating the same Observable!
      .subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('...and it is done!'),
      });

    // Logs:
    // 0 after 1s
    // 1 after 2s
    // 0 after 3s
    // 1 after 4s
    // '...and it is done!' also after 4s
  }

  forkJoin1() {
    const observable = forkJoin({
      foo: of(1, 2, 3, 4),
      bar: Promise.resolve(8),
      baz: timer(4000),
    });
    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('This is how it ends!'),
    });
  }
  forkJoin2() {
    const observable = forkJoin([
      of(1, 2, 3, 4),
      Promise.resolve(8),
      timer(4000),
    ]);
    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('This is how it ends!'),
    });

    // Logs:
    // [4, 8, 0] after 4 seconds
    // 'This is how it ends!' immediately after
  }

  merge1() {
    const clicks = fromEvent(document, 'click');
    const timer = interval(1000);
    const clicksOrTimer = merge(clicks, timer);
    clicksOrTimer.subscribe((x) => console.log(x));

    // Results in the following:
    // timer will emit ascending values, one every second(1000ms) to console
    // clicks logs MouseEvents to console every time the "document" is clicked
    // Since the two streams are merged you see these happening
    // as they occur.
  }

  merge2() {
    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    const concurrent = 2; // the argument
    const merged = merge(timer1, timer2, timer3, concurrent);
    merged.subscribe((x) => console.log(x));

    // Results in the following:
    // - First timer1 and timer2 will run concurrently
    // - timer1 will emit a value every 1000ms for 10 iterations
    // - timer2 will emit a value every 2000ms for 6 iterations
    // - after timer1 hits its max iteration, timer2 will
    //   continue, and timer3 will start to run concurrently with timer2
    // - when timer2 hits its max iteration it terminates, and
    //   timer3 will continue to emit a value every 500ms until it is complete
  }

  partition() {
    const observableValues = of(1, 2, 3, 4, 5, 6);
    const [evens$, odds$] = partition(
      observableValues,
      (value) => value % 2 === 0
    );

    odds$.subscribe((x) => console.log('odds', x));
    evens$.subscribe((x) => console.log('evens', x));

    // Logs:
    // odds 1
    // odds 3
    // odds 5
    // evens 2
    // evens 4
    // evens 6
  }

  winner() {
    const obs1 = interval(7000).pipe(map(() => 'slow one'));
    const obs2 = interval(3000).pipe(map(() => 'fast one'));
    const obs3 = interval(5000).pipe(map(() => 'medium one'));

    race(obs1, obs2, obs3).subscribe((winner) => console.log(winner));

    // Outputs
    // a series of 'fast one'
  }

  zip() {
    const age$ = of(27, 25, 29);
    const name$ = of('Foo', 'Bar', 'Beer');
    const isDev$ = of(true, true, false);

    zip(age$, name$, isDev$)
      .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      .subscribe((x) => console.log(x));

    // Outputs
    // { age: 27, name: 'Foo', isDev: true }
    // { age: 25, name: 'Bar', isDev: true }
    // { age: 29, name: 'Beer', isDev: false }
  }

  buffer() {
    const clicks = fromEvent(document, 'click');
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicks));
    buffered.subscribe((x) => console.log(x));
  }

  bufferCount1() {
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(bufferCount(2));
    buffered.subscribe((x) => console.log(x));
  }
  bufferCount2() {
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(bufferCount(2, 1));
    buffered.subscribe((x) => console.log(x));
  }

  bufferToggle() {
    const clicks = fromEvent(document, 'click');
    const openings = interval(1000);
    const buffered = clicks.pipe(
      bufferToggle(openings, (i) => (i % 2 ? interval(500) : EMPTY))
    );
    buffered.subscribe((x) => console.log(x));
  }

  bufferWhen() {
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(
      bufferWhen(() => interval(1000 + Math.random() * 4000))
    );
    buffered.subscribe((x) => console.log(x));
  }

  concatMap() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
    result.subscribe((x) => console.log(x));

    // Results in the following:
    // (results are not concurrent)
    // For every click on the "document" it will emit values 0 to 3 spaced
    // on a 1000ms interval
    // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
  }

  concatMapTo() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(concatMapTo(interval(1000).pipe(take(4))));
    result.subscribe((x) => console.log(x));

    // Results in the following:
    // (results are not concurrent)
    // For every click on the "document" it will emit values 0 to 3 spaced
    // on a 1000ms interval
    // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
  }

  exhaustMap() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(exhaustMap(() => interval(1000).pipe(take(5))));
    result.subscribe((x) => console.log(x));
  }

  expand() {
    const clicks = fromEvent(document, 'click');
    const powersOfTwo = clicks.pipe(
      map(() => 1),
      expand((x) => of(2 * x).pipe(delay(1000))),
      take(10)
    );
    powersOfTwo.subscribe((x) => console.log(x));
  }

  groupBy1() {
    of(
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'Parcel' },
      { id: 2, name: 'webpack' },
      { id: 1, name: 'TypeScript' },
      { id: 3, name: 'TSLint' }
    )
      .pipe(
        groupBy((p) => p.id),
        mergeMap((group$) =>
          group$.pipe(reduce((acc: any, cur) => [...acc, cur], []))
        )
      )
      .subscribe((p) => console.log(p));

    // displays:
    // [{ id: 1, name: 'JavaScript' }, { id: 1, name: 'TypeScript'}]
    // [{ id: 2, name: 'Parcel' }, { id: 2, name: 'webpack'}]
    // [{ id: 3, name: 'TSLint' }]
  }

  groupBy2() {
    of(
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'Parcel' },
      { id: 2, name: 'webpack' },
      { id: 1, name: 'TypeScript' },
      { id: 3, name: 'TSLint' }
    )
      .pipe(
        groupBy((p) => p.id, { element: (p) => p.name }),
        mergeMap((group$) =>
          group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
        ),
        map((arr) => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
      )
      .subscribe((p) => console.log(p));

    // displays:
    // { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
    // { id: 2, values: [ 'Parcel', 'webpack' ] }
    // { id: 3, values: [ 'TSLint' ] }
  }

  map() {
    const clicks = fromEvent<PointerEvent>(document, 'click');
    const positions = clicks.pipe(map((ev) => ev.clientX));

    positions.subscribe((x) => console.log(x));
  }

  mapTo() {
    const clicks = fromEvent(document, 'click');
    const greetings = clicks.pipe(mapTo('Hi'));

    greetings.subscribe((x) => console.log(x));
  }

  mergeMap() {
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
    );

    result.subscribe((x) => console.log(x));

    // Results in the following:
    // a0
    // b0
    // c0
    // a1
    // b1
    // c1
    // continues to list a, b, c every second with respective ascending integers
  }

  mergeMapTo() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(mergeMapTo(interval(1000)));

    result.subscribe((x) => console.log(x));
  }

  mergeScan() {
    const click$ = fromEvent(document, 'click');
    const one$ = click$.pipe(map(() => 1));
    const seed = 0;
    const count$ = one$.pipe(mergeScan((acc, one) => of(acc + one), seed));

    count$.subscribe((x) => console.log(x));

    // Results:
    // 1
    // 2
    // 3
    // 4
    // ...and so on for each click
  }

  pairWise() {
    const clicks = fromEvent<PointerEvent>(document, 'click');
    const pairs = clicks.pipe(pairwise());
    const distance = pairs.pipe(
      map(([first, second]) => {
        const x0 = first.clientX;
        const y0 = first.clientY;
        const x1 = second.clientX;
        const y1 = second.clientY;
        return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
      })
    );

    distance.subscribe((x) => console.log(x));
  }

  // partition2() {

  // const div = document.createElement('div');
  // div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
  // document.body.appendChild(div);

  // const clicks = fromEvent(document, 'click');
  // const [clicksOnDivs, clicksElsewhere]: any = clicks.pipe(
  //   partition((ev) => (<HTMLElement>ev.target).tagName === 'DIV')
  // );

  // clicksOnDivs.subscribe((x) => console.log('DIV clicked: ', x));
  // clicksElsewhere.subscribe((x) => console.log('Other clicked: ', x));}

  pluck() {
    const clicks = fromEvent(document, 'click');
    const tagNames = clicks.pipe(pluck('target', 'tagName'));

    tagNames.subscribe((x) => console.log(x));
  }

  scan1() {
    const numbers$ = of(1, 2, 3);

    numbers$
      .pipe(
        // Get the sum of the numbers coming in.
        scan((total, n) => total + n),
        // Get the average by dividing the sum by the total number
        // received so far (which is 1 more than the zero-based index).
        map((sum, index) => sum / (index + 1))
      )
      .subscribe(console.log);
  }

  scan2() {
    const firstTwoFibs = [0, 1];
    // An endless stream of Fibonacci numbers.
    const fibonacci$ = interval(1000).pipe(
      // Scan to get the fibonacci numbers (after 0, 1)
      scan(([a, b]) => [b, a + b], firstTwoFibs),
      // Get the second number in the tuple, it's the one you calculated
      map(([, n]) => n),
      // Start with our first two digits :)
      startWith(...firstTwoFibs)
    );

    fibonacci$.subscribe(console.log);
  }

  switchMap1() {
    const switched = of(1, 2, 3).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));
    switched.subscribe((x) => console.log(x));
    // outputs
    // 1
    // 1
    // 1
    // 2
    // 4
    // 8
    // 3
    // 9
    // 27
  }

  switchMap2() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(switchMap(() => interval(1000)));
    result.subscribe((x) => console.log(x));
  }

  switchMapTo() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(switchMapTo(interval(1000)));
    result.subscribe((x) => console.log(x));
  }

  windowCount1() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      windowCount(3),
      map((win) => win.pipe(skip(1))), // skip first of every 3 clicks
      mergeAll() // flatten the Observable-of-Observables
    );
    result.subscribe((x) => console.log(x));
  }

  windowCount2() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      windowCount(2, 3),
      mergeAll() // flatten the Observable-of-Observables
    );
    result.subscribe((x) => console.log(x));
  }

  windowTime1() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      windowTime(1000),
      map((win) => win.pipe(take(2))), // take at most 2 emissions from each window
      mergeAll() // flatten the Observable-of-Observables
    );
    result.subscribe((x) => console.log(x));
  }
  windowTime2() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      windowTime(1000, 5000),
      map((win) => win.pipe(take(2))), // take at most 2 emissions from each window
      mergeAll() // flatten the Observable-of-Observables
    );
    result.subscribe((x) => console.log(x));
  }
  windowTime3() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      windowTime(1000, 5000, 2), // take at most 2 emissions from each window
      mergeAll() // flatten the Observable-of-Observables
    );
    result.subscribe((x) => console.log(x));
  }

  windowToggle() {
    const clicks = fromEvent(document, 'click');
    const openings = interval(1000);
    const result = clicks.pipe(
      windowToggle(openings, (i) => (i % 2 ? interval(500) : EMPTY)),
      mergeAll()
    );
    result.subscribe((x) => console.log(x));
  }

  windowWhen() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      windowWhen(() => interval(1000 + Math.random() * 4000)),
      map((win) => win.pipe(take(2))), // take at most 2 emissions from each window
      mergeAll() // flatten the Observable-of-Observables
    );
    result.subscribe((x) => console.log(x));
  }

  // window1() {
  // const clicks = fromEvent(document, 'click');
  // const sec = interval(1000);
  // const result = clicks.pipe(
  //   window(sec),
  //   map((win) => win.pipe(take(2))), // take at most 2 emissions from each window
  //   mergeAll() // flatten the Observable-of-Observables
  // );
  // result.subscribe((x) => console.log(x));
  // }

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
