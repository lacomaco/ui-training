import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

export enum DragEvent {
  DOWN,
  MOVE,
  UP,
}

export interface DragInfo {
  x: number;
  y: number;
  isUp: boolean;
  isRight: boolean;
  event: DragEvent;
}

@Directive({
  selector: '[dragObserve]',
})
export class DragObserveDirective {
  private startX: number = 0;
  private startY: number = 0;

  private prevX: number = 0;
  private prevY: number = 0;

  private isDragging = false;

  @Output()
  dragObserve = new EventEmitter<DragInfo>();

  constructor() {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const movedX = event.clientX - this.startX;
    const movedY = event.clientY - this.startY;

    const isUp = this.prevY < event.clientY;
    const isRight = this.prevX < event.clientX;

    this.dragObserve.next({
      x: movedX,
      y: movedY,
      isUp,
      isRight,
      event: DragEvent.MOVE,
    });
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.prevX = event.clientX;
    this.prevY = event.clientY;
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.reset();
    this.dragObserve.next({
      x: 0,
      y: 0,
      isUp: false,
      isRight: false,
      event: DragEvent.UP,
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.reset();
  }

  private reset(): void {
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.prevX = 0;
    this.prevY = 0;
  }
}
