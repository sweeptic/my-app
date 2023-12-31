import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-sizer',
    template: ` <div>
    <button class='btn btn-primary m-3' type="button" (click)="dec()" title="smaller">-</button>
    <button class='btn btn-primary m-3' type="button" (click)="inc()" title="bigger">+</button>
    <span [style.font-size.px]="size">FontSize: {{ size }}px</span>
  </div>`,
})
export class SizerComponent {
    @Input() size!: number | string;
    @Output() sizeChange = new EventEmitter<number>();

    dec() {
        this.resize(-1);
    }
    inc() {
        this.resize(+1);
    }

    resize(delta: number) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        console.log('this.size', this.size);

        this.sizeChange.emit(this.size);
    }
}
