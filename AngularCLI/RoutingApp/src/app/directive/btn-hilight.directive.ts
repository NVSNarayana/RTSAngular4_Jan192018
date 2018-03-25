import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hilightbutton]'
})
export class BtnHilightDirective {
  @Input() highlightColor: string = "red";
  constructor(private el: ElementRef) {
    //console.log(el);
    //console.log(el.nativeElement);
    //this.el.nativeElement.style.backgroundColor="red";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
