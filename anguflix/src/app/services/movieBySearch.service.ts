import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesBySearchService {
  constructor(private http: HttpClient) {}

  private apiUrl = (search: string, page: number): string =>{
    search = search.replaceAll(' ','%20')
    return `https://api.themoviedb.org/3/search/multi?api_key=f6c22acfbb5aac96138bfd137d4aac0b&language=en-US&query=${search}&page=${page}`;
  }

  getMoviesbySearch(search: string, page: number): Observable<Movies> {
    return this.http.get<Movies>(this.apiUrl(search, page));
  }
}
