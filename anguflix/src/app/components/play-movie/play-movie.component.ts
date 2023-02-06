import { Component, OnInit } from '@angular/core';
import { PlayMovieService } from 'src/app/services/playMovie.service';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.scss'],
})
export class PlayMovieComponent implements OnInit {
  constructor(private playMovieService: PlayMovieService){}
  ngOnInit(): void {}
  fnCloseMovie(): void {
    console.log('close')
    this.playMovieService.close()
  }
}
