import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ObjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-sub-outer1',
  templateUrl: './sub-outer1.component.html',
})
export class SubOuter1Component {
  constructor(private subjService: ObjectService) {}

  onClickHandler() {
    this.subjService.increaseCounterSubj();
  }
}
