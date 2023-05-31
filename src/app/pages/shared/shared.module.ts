import { NgModule } from '@angular/core';
import { IphoneXrComponent } from './iphone-xr/iphone-xr.component';
import { CommonModule } from '@angular/common';
import { DragObserveDirective } from './drag-observe-directive';

@NgModule({
  declarations: [IphoneXrComponent, DragObserveDirective],
  imports: [CommonModule],
  exports: [IphoneXrComponent, DragObserveDirective],
})
export class SharedModule {}
