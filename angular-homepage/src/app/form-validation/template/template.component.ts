import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-form-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css']
})
export class TemplateComponent {

    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

    hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

}
