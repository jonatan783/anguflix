import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private apiUrl =
    'https://api.themoviedb.org/3/discover/movie?api_key=f6c22acfbb5aac96138bfd137d4aac0b&language=es-ES';

  getMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.apiUrl);
  }
}
