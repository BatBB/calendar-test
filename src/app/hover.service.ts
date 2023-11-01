import { Injectable, signal } from '@angular/core';

@Injectable()
export class HoverService {
  private hoverIndexSignal = signal<number | null>(null);

  public hoverIndex = this.hoverIndexSignal.asReadonly();

  public setHoverIndex(index: number | null) {
    this.hoverIndexSignal.set(index);
  }
}
