import { Component } from '@angular/core';
import { Observable, asyncScheduler, observeOn } from 'rxjs';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
})
export class SchedulerComponent {
  asyncSchedulerHandler() {
    const observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    }).pipe(observeOn(asyncScheduler));

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
  }

  proxyObserver() {
    const observable = new Observable((proxyObserver) => {
      proxyObserver.next(1);
      proxyObserver.next(2);
      proxyObserver.next(3);
      proxyObserver.complete();
    }).pipe(observeOn(asyncScheduler));

    const finalObserver = {
      next(x: any) {
        console.log('got value ' + x);
      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    };

    console.log('just before subscribe');
    observable.subscribe(finalObserver);
    console.log('just after subscribe');
  }
}
