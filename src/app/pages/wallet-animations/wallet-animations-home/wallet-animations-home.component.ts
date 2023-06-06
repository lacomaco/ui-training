import { Component, Signal, computed, signal } from '@angular/core';
import { CardBodyHeight, Wallet } from '../wallet-card/wallet-card.component';
import { DragEvent, DragInfo } from '../../shared/drag-observe-directive';
import { interpolation } from '../../utils/interpolation';
import { Bezier } from 'bezier-js';

@Component({
  selector: 'app-wallet-animations-home',
  templateUrl: './wallet-animations-home.component.html',
  styleUrls: ['./wallet-animations-home.component.css'],
})
export class WalletAnimationsHomeComponent {
  cardData = [
    {
      color: '#a8d2bb',
      title: 'SHOOT',
      price: '30CHF',
    },
    {
      color: '#f3b7d7',
      title: 'JUICE/SHAKE',
      price: '27CHF',
    },
    {
      color: '#f3a44f',
      title: 'MIGHTY JUICE',
      price: '48CHF',
    },
    {
      color: '#95c2ef',
      title: 'SANDWITCH',
      price: '59CHF',
    },
    {
      color: '#221b20',
      title: 'COMBI',
      price: '60CHF',
    },
    {
      color: '#a994c5',
      title: 'SIGNATURE',
      price: '72CHF',
    },
    {
      color: '#feef8f',
      title: 'COFFEE',
      price: '13CHF',
    },
  ];

  movingPosition = signal(0);
  isUp = signal(false);

  clickedCardIndex = signal(this.cardData.length - 1);
  minimumGap = 5;

  cardBezier = new Bezier([0.28, 0.09, 0.31, 0.93]);

  cards: Signal<Wallet[]> = computed(() => {
    const currentSelectedCard = this.clickedCardIndex();
    const movedY = this.movingPosition();

    const cardMoveData = this.cardMove(movedY, currentSelectedCard);

    return cardMoveData.map((yPosition, index) => {
      return {
        ...this.cardData[index],
        yPosition,
        index,
      };
    });
  });

  private isResetAnimationRun = false;

  private cardMove(movedY: number, selectedIndex: number): number[] {
    let resource = movedY;

    return this.cardData.map((_, index) => {
      const defaultPosition = -index * CardBodyHeight;

      if (index === 0) {
        return 0;
      }

      if (index >= selectedIndex) {
        return defaultPosition + movedY;
      }

      const currentT = index / this.cardData.length;

      const moveY = interpolation(0, movedY, currentT);

      return defaultPosition + moveY;
    });
  }

  isCardMove(e: DragInfo): void {
    if (e.event === DragEvent.MOVE) {
      this.movingPosition.set(e.y);
      this.isUp.set(e.isUp);
    }
  }

  cardClick(index: number): void {
    this.clickedCardIndex.set(index);
  }

  resetClickedCardIndex(): void {
    if (this.isResetAnimationRun) {
      return;
    }

    requestAnimationFrame(this.resetAnimation.bind(this));
  }

  resetAnimation(startTimeStamp: DOMHighResTimeStamp): void {
    const start = startTimeStamp;
    this.isResetAnimationRun = true;
    const currentPosition = this.movingPosition();

    const runAnimation = (timestamp: DOMHighResTimeStamp) => {
      const progress = (timestamp - start) / 200;
      const bezierY = this.cardBezier.get(progress).y;

      if (progress < 1) {
        this.movingPosition.set(currentPosition - bezierY * currentPosition);
        this.clickedCardIndex.set(this.cardData.length - 1);

        requestAnimationFrame(runAnimation.bind(this));
        return;
      }

      this.movingPosition.set(0);
      this.isResetAnimationRun = false;
    };

    requestAnimationFrame(runAnimation.bind(this));
  }
}
