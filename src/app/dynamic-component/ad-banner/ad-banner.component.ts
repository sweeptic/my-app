import { Component, Input, ViewChild } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';
import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css'],
})
export class AdBannerComponent {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHostLocal!: AdDirective;

  private clearTimer: VoidFunction | undefined;

  ngOnInit(): void {
    console.log('ads', this.ads);

    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    this.clearTimer?.();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    // console.log(0 % 4); 0
    // console.log(1 % 4); 1
    // console.log(2 % 4); 2
    // console.log(3 % 4); 3
    // console.log(4 % 4); 0
    // console.log(5 % 4); 1

    // console.log(' this.currentAdIndex', this.currentAdIndex);

    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHostLocal.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    const interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
    this.clearTimer = () => clearInterval(interval);
  }
}
