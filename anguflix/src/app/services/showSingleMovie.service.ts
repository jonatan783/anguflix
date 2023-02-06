import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleSearchService {
  show: boolean = false;

  private showState = new Subject<boolean>();

  get showState$(): Observable<boolean> {
    return this.showState.asObservable();
  }

  fnShowState(state: boolean): void {
    this.show = state;
    this.showState.next(state);
  }
}
