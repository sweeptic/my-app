import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ObjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-sub-outer1',
  templateUrl: './sub-outer1.component.html',
})
export class SubOuter1Component {
  list?: number[] = [];

  constructor(private subjService: ObjectService) {
    this.subjService.numList.subscribe({
      next: (v: number) => {
        console.log('v', v);
        this.list?.push(v);
      },
    });
  }

  onClickHandler() {
    this.subjService.increaseCounterSubj();
  }

  onClickHandlerList() {
    this.subjService.listNum();
  }
}
