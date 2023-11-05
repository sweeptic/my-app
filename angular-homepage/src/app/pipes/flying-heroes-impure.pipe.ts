import { Pipe, PipeTransform } from '@angular/core';
import { FlyingHeroesPipe } from './flying-heroes.pipe';

@Pipe({
    name: 'flyingHeroesImpure',
    pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {



}
