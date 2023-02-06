import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleMovie } from '../interfaces/singleMovie.interface';

@Injectable({
  providedIn: 'root',
})
export class SingleMovieService {
  constructor(private http: HttpClient) {}

  private apiUrl = (id: number): string =>
    `https://api.themoviedb.org/3/movie/${id}?api_key=f6c22acfbb5aac96138bfd137d4aac0b&language=es-ES&append_to_response=similar`;

  getSingleMovie(idGenre: number): Observable<SingleMovie> {
    return this.http.get<SingleMovie>(this.apiUrl(idGenre));
  }
}
