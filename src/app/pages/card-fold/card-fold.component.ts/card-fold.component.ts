import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { degreeToRadians } from '../../utils/math';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-fold',
  templateUrl: './card-fold.component.html',
  styleUrls: ['./card-fold.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CardFoldComponent implements AfterViewInit {
  @ViewChild('sampleImage') img?: ElementRef;

  h = signal(267);

  // deg 기준
  #alpha = signal(90);

  // sin 함수로 계산
  #x = computed(() => {
    const r = Math.sin(degreeToRadians(this.#alpha())) * this.h();
    return r;
  });

  public css = computed(() => {
    console.log(Math.cos(degreeToRadians(this.#alpha())));
    const d =
      this.h() / 2 - Math.cos(degreeToRadians(this.#alpha())) * (this.h() / 2);
    return `translate(-50%,-100%) translateY(${d}px) translateZ(-${this.#x()}px) rotateX(-${this.#alpha()}deg)`;
  });

  css2 = computed(() => {
    const d =
      this.h() / 2 - Math.cos(degreeToRadians(this.#alpha())) * (this.h() / 2);
    return `translate(-50%,0%) translateY(-${
      d * 1.0001
    }px) translateZ(-${this.#x()}px) rotateX(${this.#alpha()}deg)`;
  });

  constructor() {}
  ngAfterViewInit(): void {
    requestAnimationFrame(this.animationStart.bind(this));
  }

  imageLoad(): void {
    console.log('here');
    this.h.set(this.img?.nativeElement.offsetHeight);

    requestAnimationFrame(this.animationStart.bind(this));
  }

  animationStart(timestamp: DOMHighResTimeStamp): void {
    this.#alpha.set(Math.abs(Math.sin(timestamp / (360 * 7))) * 90);
    requestAnimationFrame(this.animationStart.bind(this));
  }
}
