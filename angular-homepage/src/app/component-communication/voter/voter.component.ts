import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styles: [],
})
export class VoterComponent {
  didVote = false;
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
