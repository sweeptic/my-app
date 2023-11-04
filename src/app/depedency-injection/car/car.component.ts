import { Component } from '@angular/core';
import { Car, Engine, Tires } from './car';
import { CarFactory } from './car-factory';
import { useInjector } from './car-injector';
import { Car as CarNoDi } from './car-no-di';
import { simpleCar, superCar, testCar } from './car-creation';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    providers: [Car, Engine, Tires]
})
export class CarComponent {
    factoryCar = (new CarFactory()).createCar();
    injectorCar = useInjector();
    noDiCar = new CarNoDi();
    simpleCar = simpleCar();
    superCar = superCar();
    testCar = testCar();

    constructor(public car: Car) { }
}
