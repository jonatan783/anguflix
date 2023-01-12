import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MoviesService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-opening-movie',
  templateUrl: './opening-movie.component.html',
  styleUrls: ['./opening-movie.component.scss'],
})
export class OpeningMovieComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  urlImage1: string = 'https://image.tmdb.org/t/p/original/';
  urlImage2: string = 'https://image.tmdb.org/t/p/original/';
  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .pipe(
        tap((movies) => {
          this.urlImage1 = this.urlImage1 + movies.results[0].backdrop_path;
        })
      )
      .subscribe();
  }
}
