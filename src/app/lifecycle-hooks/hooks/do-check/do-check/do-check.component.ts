import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
})
export class DoCheckComponent {
  @Input() hero!: Hero;
  @Input() power = '';
  changeDetected = false;
  changeLog: string[] = [];
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;
  ngDoCheck() {
    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changeLog.push(
        `DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`
      );
      this.oldHeroName = this.hero.name;
    }
    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(
        `DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`
      );
      this.oldPower = this.power;
    }
    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      // log that hook was called when there was no relevant change.
      const count = (this.noChangeCount += 1);
      const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        // add new "no change" message
        this.changeLog.push(noChangeMsg);
      } else {
        // update last "no change" message
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }
    this.changeDetected = false;
  }
  reset() {
    this.changeDetected = true;
    this.changeLog = [];
  }
}
