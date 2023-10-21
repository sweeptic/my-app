import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'server-component',
  templateUrl: 'server.component.html',
  styles: [
    `
      .online {
        color: blue;
      }
    `,
  ],
})
export class ServerComponent implements OnInit {
  name = 'Name data';
  buttonDisabled = false;
  clicked = '';
  entered = '';
  twoWayBinding = '';
  ifHandlerValue = false;
  DisabledInput = 'DISABLED INPUT';
  blue = true;

  constructor() {
    setTimeout(() => {
      this.buttonDisabled = true;
    }, 3000);
  }

  ngOnInit() {}

  getNameStatus() {
    return this.name;
  }

  onClickHandler() {
    this.clicked = 'CLICKED NOW';
  }

  onInputHandler(ev: any) {
    this.entered = ev.target.value;
  }

  ifHandler() {
    this.ifHandlerValue = true;
  }
}
