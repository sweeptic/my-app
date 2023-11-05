import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightHostBinding]',
})
export class HighlightDirectiveHostBinding {
  @Input() defaultColor = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'green';
  }
}
