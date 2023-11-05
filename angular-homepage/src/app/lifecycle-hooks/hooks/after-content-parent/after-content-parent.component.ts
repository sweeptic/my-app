import { Component } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  providers: [LoggerService],
})
export class AfterContentParentComponent {
  show = true;

  constructor(public logger: LoggerService) {}

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => (this.show = true));
  }
}
