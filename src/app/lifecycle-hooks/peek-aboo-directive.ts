import { Directive } from '@angular/core';
import { LoggerService } from '../services/logger.service';

let nextId = 1;

@Directive({
  selector: '[appPeekABoo]',
})
export class PeekABooDirective {
  constructor(private logger: LoggerService) {}

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
