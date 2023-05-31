import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletAnimationsModule } from './pages/wallet-animations/wallet-animations.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WalletAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
