import { Component, Input } from '@angular/core';

export interface Wallet {
  color: string;
  title: string;
  price: string;
  defaultPosition: number;
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

  get currentTranslate(): string {
    return `translateY(${this.card.yPosition}px)`;
  }
}
