import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Search } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root',
})
export class ToggleSearchService {
  search: Search={
    state:false,
    name:undefined,
    genreId:undefined
  }

  private toggleTrue = new Subject<Search>();
  private toggleFalse = new Subject<Search>();
  private stateToogle = new Subject<Search>();

  get toggleTrue$(): Observable<Search> {
    return this.toggleTrue.asObservable();
  }
  get toggleFalse$(): Observable<Search> {
    return this.toggleFalse.asObservable();
  }
  get stateToogle$(): Observable<Search> {
    return this.stateToogle.asObservable();
  }

  trueToggle(search:Search): void {
    this.search=search;
    this.toggleTrue.next(this.search);
    this.stateToggle();
  }
  falseToggle(search:Search): void {
    this.search=search;
    this.toggleFalse.next(this.search);
    this.stateToggle();
  }
  stateToggle(): void {
    this.stateToogle.next(this.search);
  }
}