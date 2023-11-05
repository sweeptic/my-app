import { Component } from '@angular/core';
import { Hero, heroes } from '../hero';

export type Loaded<T> = { type: 'loaded', data: T; };

export type Loading = { type: 'loading'; };

export type LoadingState<T> = Loaded<T> | Loading;



@Component({
    selector: 'app-hero-comp-strdir',
    templateUrl: './hero-comp-strdir.component.html',
})
export class HeroCompStrdirComponent {
    heroLoadingState: LoadingState<Hero> = { type: 'loading' };

    onLoadHero(): void {
        this.heroLoadingState = { type: 'loaded', data: heroes[0] };
    }
}
