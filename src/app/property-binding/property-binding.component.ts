import { Component } from '@angular/core';

@Component({
    selector: 'app-property-binding',
    templateUrl: './property-binding.component.html',
    styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
    itemImageUrl = '../assets/images/phone.svg';
    isUnchanged = true;
    classes = 'special';
    parentItem = 'lamp';

    currentItems = [
        {
            id: 21,
            name: 'phone',
        },
    ];

    interpolationTitle = 'Interpolation';
    propertyTitle = 'Property binding';

    evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
}
