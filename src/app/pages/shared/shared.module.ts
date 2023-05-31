import { NgModule } from '@angular/core';
import { IphoneXrComponent } from './iphone-xr/iphone-xr.component';
import { CommonModule } from '@angular/common';
import { DragObserveDirective } from './drag-observe-directive';
import { ClickOutsideDirective } from './click-outside';

@NgModule({
  declarations: [
    IphoneXrComponent,
    DragObserveDirective,
    ClickOutsideDirective,
  ],
  imports: [CommonModule],
  exports: [IphoneXrComponent, DragObserveDirective, ClickOutsideDirective],
})
export class SharedModule {}
