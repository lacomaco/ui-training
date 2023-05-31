import { Injectable, signal } from '@angular/core';

@Injectable()
export class ClickManagerService {
  readonly minimumGap = 5;

  isClick = signal(false);

  constructor() {}
}
