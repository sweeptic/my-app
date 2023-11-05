import { Component } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';
import { AdDirective } from './ad.directive';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css'],
  providers: [AdService],
})
export class DynamicComponentComponent {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
