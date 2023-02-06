import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { SingleMovie } from 'src/app/interfaces/singleMovie.interface';
import { PlayMovieService } from 'src/app/services/playMovie.service';
import { SingleMovieService } from 'src/app/services/singleMovie.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'],
})
export class SingleMovieComponent implements OnInit {
  @Input() movieId!: number;
  constructor(
    private singleMovieService: SingleMovieService, private playMovieService: PlayMovieService) {}
  movie!: SingleMovie;
  ngOnInit(): void {
    this.singleMovieService
      .getSingleMovie(this.movieId)
      .pipe(
        tap((movie) => {
          this.movie = movie;
        })
      )
      .subscribe();
  }
  fnPlayMovie():void{
    console.log('play')
    this.playMovieService.play()  }
}
