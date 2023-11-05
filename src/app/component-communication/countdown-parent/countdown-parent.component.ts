import { Component, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

// <div class="container p-3" style="background-color: lightgoldenrodyellow">
//   <p>countdown-parent works!</p>
// </div>;

//// Local variable, #timer, version
@Component({
  selector: 'app-countdown-parent-lv',
  template: `<div
    class="container p-3"
    style="background-color: lightgoldenrodyellow"
  >
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button class="btn btn-primary" type="button" (click)="timer.start()">
      Start
    </button>
    <button class="btn btn-primary mx-3" type="button" (click)="timer.stop()">
      Stop
    </button>
    <app-countdown-timer #timer></app-countdown-timer>
    <div class="seconds">{{ timer.seconds }}</div>
  </div> `,
  styleUrls: ['../../../assets/demo.css'],
})
export class CountdownParentComponent {}
//// View Child version
@Component({
  selector: 'app-countdown-parent-vc',
  template: `<div class="container p-3" style="background-color: lightgreen">
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button class="btn btn-primary" type="button" (click)="start()">
      Start
    </button>
    <button class="btn btn-primary mx-3" type="button" (click)="stop()">
      Stop
    </button>
    <app-countdown-timer></app-countdown-timer>
    <div class="seconds">{{ seconds() }}</div>
  </div> `,
  styleUrls: ['../../../assets/demo.css'],
})
export class CountdownViewChildParentComponent {
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
  }

  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
}
