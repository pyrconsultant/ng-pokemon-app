import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})

export class BorderCardDirective {
  private activecolor: string = 'blue';
  private idlecolor: string = 'green';  
    constructor(private el: ElementRef) { 
//    this.el = element;
    this.setHeight(360);
    this.setBorder(`${this.idlecolor}`);
    
}

  @Input('appBorderCard') borderColor :string;

  @HostListener('mouseenter') onMouseEnter () {
    this.setBorder(`${this.activecolor}`);
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.setBorder(`${this.idlecolor}`);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  
  setBorder(color: string)  {
      this.el.nativeElement.style.border = `4px solid ${color}`;
  }
}
