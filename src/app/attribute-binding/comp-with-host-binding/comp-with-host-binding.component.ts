import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-comp-with-host-binding',
    templateUrl: './comp-with-host-binding.component.html',

})
export class CompWithHostBindingComponent {
    @HostBinding('class.special') isSpecial = false;

    @HostBinding('style.color') color = 'pink';

    @HostBinding('style.width') width = '200px';
}
