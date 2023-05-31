import { Component, signal } from '@angular/core';
import {
  CardBodyHeight,
  CardTitleHeight,
  Wallet,
} from '../wallet-card/wallet-card.component';

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

  isClick = signal(false);
  minimumGap = 5;

  cards: Wallet[] = this.cardData.map((card, index) => {
    const defaultPosition = -index * CardBodyHeight;
    return {
      ...card,
      defaultPosition: -index * CardBodyHeight,
      yPosition: -index * CardBodyHeight,
      index,
    };
  });

  test(e: any) {
    console.log(e);
  }
}
