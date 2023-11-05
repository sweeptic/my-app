import { Component, Input } from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styles: [],
})
export class AstronautComponent {
  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      (mission) => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
