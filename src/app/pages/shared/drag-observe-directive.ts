import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[dragObserve]',
})
export class DragObserveDirective {
  private startX: number = 0;
  private startY: number = 0;

  private isDragging = false;

  @Output()
  dragObserve = new EventEmitter<{ x: number; y: number }>();

  constructor() {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    event.stopPropagation();

    const hostElement = this.getHostElement(event);

    if (!hostElement) {
      return;
    }

    if (!this.isDragging) return;

    const movedX = event.clientX - this.startX;
    const movedY = event.clientY - this.startY;

    this.dragObserve.next({ x: movedX, y: movedY });
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const hostElement = this.getHostElement(event);
    if (!hostElement) {
      return;
    }

    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    event.stopPropagation();

    if (!this.getHostElement(event)) {
      return;
    }

    this.isDragging = false;

    this.startX = -1;
    this.startY = -1;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isDragging = false;
    this.startX = -1;
    this.startY = -1;
  }

  getHostElement(e: MouseEvent): undefined | null | Element {
    return (e.target as Element).closest('[dragobserve]');
  }
}
