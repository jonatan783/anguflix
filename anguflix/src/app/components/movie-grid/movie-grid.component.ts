import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Genre } from 'src/app/interfaces/genre.interface';
import { MoviesByGenre } from 'src/app/interfaces/movie.interface';
import { GenresService } from 'src/app/services/genres.service';
import { MoviesByGenreService } from 'src/app/services/movieByGenre.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
})
export class MovieGridComponent implements OnInit {
  constructor(
    private genresService: GenresService,
    private moviesByGenreService: MoviesByGenreService
  ) {}
  genres!: Genre[];
  moviesByGenres: MoviesByGenre[] = [];

  ngOnInit(): void {
    this.genresService
      .getGenres()
      .pipe(
        tap((genres) => {
          let moviesByGenresLoop: MoviesByGenre[] = [];
          this.genres = genres.genres;
          this.genres.forEach((genre) => {
            this.moviesByGenreService
              .getMoviesbyGenre(genre.id,1)
              .pipe(
                tap(({ results }) => {
                  moviesByGenresLoop.push({
                    name: genre.name,
                    movie: results,
                  });
                })
              )
              .subscribe();
          });
          this.moviesByGenres = moviesByGenresLoop
        })
      )
      .subscribe();
  }
}
