import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletAnimationsHomeComponent } from './pages/wallet-animations/wallet-animations-home/wallet-animations-home.component';
import { WalletAnimationsModule } from './pages/wallet-animations/wallet-animations.module';
import { CardFoldComponent } from './pages/card-fold/card-fold.component.ts/card-fold.component';

const routes: Routes = [
  {
    path: 'wallet-animations',
    component: WalletAnimationsHomeComponent,
  },
  {
    path: 'card-fold-animation',
    component: CardFoldComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
