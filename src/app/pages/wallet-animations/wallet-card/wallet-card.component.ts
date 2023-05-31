import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Wallet {
  color: string;
  title: string;
  price: string;
  yPosition: number;
  index: number;
}

export const CardTitleHeight = 40;
export const CardBodyHeight = 225;

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.css'],
})
export class WalletCardComponent {
  @Input({
    required: true,
  })
  card!: Wallet;

  @Output()
  clickCard = new EventEmitter<number>();

  @Output()
  mouseUp = new EventEmitter<boolean>();

  get currentTranslate(): string {
    return `translateY(${this.card.yPosition}px)`;
  }
}
