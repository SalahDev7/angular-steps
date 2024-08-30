import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el:ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('');
  }

  // @HostListener('onscroll') onScroll() {
  //   this.highLight('red');
  // }



   private highLight(color : string){
    this.el.nativeElement.style.backgroundColor = color;
    }

}
