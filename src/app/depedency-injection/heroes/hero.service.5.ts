import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from '@angular/core';

@Injectable({
    providedIn:
        'root'
})
export class SomeService { }

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    private environmentInjector = inject(EnvironmentInjector);

    someMethod() {
        runInInjectionContext(this.environmentInjector, () => {
            inject(SomeService); // Do what you need with the injected service
        });
    }
}
