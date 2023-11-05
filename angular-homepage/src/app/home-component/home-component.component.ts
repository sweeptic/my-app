import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
})
export class HomeComponentComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.subscribe((param) => {
      console.log('param', param);
    });
  }
}
