import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/rootObject.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl =
    'https://api.themoviedb.org/3/discover/movie?api_key=f6c22acfbb5aac96138bfd137d4aac0b';
  constructor(private http: HttpClient) {}
  getMovies(): Observable<RootObject> {
    return this.http.get<RootObject>(this.apiUrl);
  }
}
