import { NgModule } from '@angular/core';
import { WalletAnimationsHomeComponent } from './wallet-animations-home/wallet-animations-home.component';
import { WalletCardComponent } from './wallet-card/wallet-card.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WalletAnimationsHomeComponent, WalletCardComponent],
  imports: [CommonModule, SharedModule],
  providers: [],
  exports: [WalletAnimationsHomeComponent],
})
export class WalletAnimationsModule {}
