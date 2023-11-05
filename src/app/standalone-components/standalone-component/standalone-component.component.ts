import { Component } from '@angular/core';
import { ImageGridComponent } from '../image-grid/image-grid.component';


@Component({
    standalone: true,
    selector: 'app-standalone-component',
    templateUrl: './standalone-component.component.html',
    imports: [ImageGridComponent,]
})
export class StandaloneComponentComponent {

}
