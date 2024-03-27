import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {
  @Input('appProductCard') bgColor: string;

  originalShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  increasedShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.originalShadow);
    if (this.bgColor) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.bgColor);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.increasedShadow);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.originalShadow);
  }
}
