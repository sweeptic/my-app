import { Component } from '@angular/core';
import { heroServiceProvider } from './hero.service.provider';


@Component({
    selector: 'app-heroes-dep',
    providers: [heroServiceProvider],
    template: `
    <h2>Heroes</h2>
    <app-hero-list-dep></app-hero-list-dep>
  `
})
export class HeroesComponentDep { }
