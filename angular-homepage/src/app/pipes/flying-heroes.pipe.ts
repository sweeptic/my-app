import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './flying-heroes/flying-heroes.component';


@Pipe({
    name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

    transform(allHeroes: Hero[]) {
        return allHeroes.filter(hero => hero.canFly);
    }

}
