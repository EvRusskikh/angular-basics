import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input() dStyle: {border?: string, borderRadius?: string, color?: string}

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.dStyle.color);
    this.r.setStyle(this.el.nativeElement, 'border-radius', this.dStyle.borderRadius);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'border-radius', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
  }

}
