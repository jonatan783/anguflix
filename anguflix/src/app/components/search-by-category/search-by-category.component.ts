import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesByGenreService } from 'src/app/services/movieByGenre.service';
import { MoviesBySearchService } from 'src/app/services/movieBySearch.service';
import { ToggleSearchService } from 'src/app/services/toggleSearch.service';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.scss'],
})
export class SearchByCategoryComponent implements OnInit {
  constructor(
    private moviesBySearchService: MoviesBySearchService,
    private moviesByGenreService: MoviesByGenreService,
    private toggleSearchService: ToggleSearchService
  ) {}

  stateToggle$ = this.toggleSearchService.stateToogle$;
  movies?: Movie[];

  ngOnInit(): void {
    this.stateToggle$.subscribe((search) => {
      if (search.genreId) {
        this.moviesByGenreService
          .getMoviesbyGenre(search.genreId, 1)
          .pipe(
            tap((movie) => {
              this.movies = movie.results;
            })
          )
          .subscribe();

        this.moviesByGenreService
          .getMoviesbyGenre(search.genreId, 2)
          .pipe(
            tap((movie) => {
              this.movies = this.movies?.concat(movie.results);
            })
          )
          .subscribe();

        this.moviesByGenreService
          .getMoviesbyGenre(search.genreId, 3)
          .pipe(
            tap((movie) => {
              this.movies = this.movies?.concat(movie.results);
            })
          )
          .subscribe();
      }
      if (search.name) {
        this.moviesBySearchService
          .getMoviesbySearch(search.name, 1)
          .pipe(
            tap((movie) => {
              this.movies = movie.results;
            })
          )
          .subscribe();

        this.moviesBySearchService
          .getMoviesbySearch(search.name, 2)
          .pipe(
            tap((movie) => {
              this.movies = this.movies?.concat(movie.results);
            })
          )
          .subscribe();

        this.moviesBySearchService
          .getMoviesbySearch(search.name, 3)
          .pipe(
            tap((movie) => {
              this.movies = this.movies?.concat(movie.results);
            })
          )
          .subscribe();
      }
      console.log('renderizacion', search);
    });
  }
}
