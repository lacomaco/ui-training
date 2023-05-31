import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  @Output()
  public clickOutside = new EventEmitter<void>();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: MouseEvent) {
    const clickedInside =
      this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
