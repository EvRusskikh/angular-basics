import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color = 'blue'

  @Input() dStyle: {border?: string, borderRadius?: string, color?: string}

  @HostBinding('style.color') elColor = null

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    this.r.setStyle(this.el.nativeElement, 'border-radius', this.dStyle.borderRadius);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    this.r.setStyle(this.el.nativeElement, 'border-radius', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
  }

}
