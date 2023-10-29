import { Component } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
})
export class PeekABooParentComponent {
  hasChild = false;
  heroName = 'Windstorm';

  private logger: LoggerService;
  hookLog: string[] = [];

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
