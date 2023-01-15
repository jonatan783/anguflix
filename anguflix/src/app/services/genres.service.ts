import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genres } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private http: HttpClient) {}

  private apiUrl =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=f6c22acfbb5aac96138bfd137d4aac0b&language=es-ES';

  getGenres(): Observable<Genres> {
    return this.http.get<Genres>(this.apiUrl);
  }
}
