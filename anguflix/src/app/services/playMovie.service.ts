import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayMovieService {
  state: boolean = false;

  private playMovie = new Subject<boolean>();
  private closeMovie = new Subject<boolean>();
  private statePlayMovie = new Subject<boolean>();

  get playMovie$(): Observable<boolean> {
    return this.playMovie.asObservable();
  }
  get closeMovie$(): Observable<boolean> {
    return this.closeMovie.asObservable();
  }
  get statePlayMovie$(): Observable<boolean> {
    return this.statePlayMovie.asObservable();
  }

  play(): void {
    this.state = true;
    this.playMovie.next(this.state);
    this.stateMovie()
  }
  close(): void {
    this.state = false;
    this.closeMovie.next(this.state);
    this.stateMovie()
  }
  stateMovie(): void {
    this.statePlayMovie.next(this.state);
  }
}
