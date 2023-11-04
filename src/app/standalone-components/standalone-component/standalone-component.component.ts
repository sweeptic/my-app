import { Component } from '@angular/core';
import { ImageGridComponent } from '../image-grid/image-grid.component';
import { AppModule } from 'src/app/app.module';

@Component({
    standalone: true,
    selector: 'app-standalone-component',
    templateUrl: './standalone-component.component.html',
    imports: [ImageGridComponent, AppModule]
})
export class StandaloneComponentComponent {

}
