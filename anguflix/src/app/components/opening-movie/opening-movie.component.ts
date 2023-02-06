import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { PlayMovieService } from 'src/app/services/playMovie.service';

@Component({
  selector: 'app-opening-movie',
  templateUrl: './opening-movie.component.html',
  styleUrls: ['./opening-movie.component.scss'],
})
export class OpeningMovieComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private playMovieService: PlayMovieService
  ) {}

  urlImage: string = 'https://image.tmdb.org/t/p/original/';
  title!: string;
  overview!: string;

  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .pipe(
        tap((movies) => {
          const numMovie: number = Math.floor(Math.random() * 7);
          this.urlImage =
            this.urlImage + movies.results[numMovie].backdrop_path;
          this.title = movies.results[numMovie].title;
          if (movies.results[numMovie].overview.length < 240)
            this.overview = movies.results[numMovie].overview;
          else
            this.overview =
              movies.results[numMovie].overview.substring(0, 240) + ' ...';
        })
      )
      .subscribe();
  }

  fnPlayMovie():void{
    this.playMovieService.play()
  }
}
