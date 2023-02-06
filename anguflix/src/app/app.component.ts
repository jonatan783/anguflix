import { Component, OnInit } from '@angular/core';
import { Search } from './interfaces/search.interface';
import { PlayMovieService } from './services/playMovie.service';
import { ToggleSearchService } from './services/toggleSearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  statePlayMovie$ = this.playMovieService.statePlayMovie$;
  stateToggle$ = this.toggleSearchService.stateToogle$;

  state?: boolean;
  stateSearch?: boolean;

  constructor(
    private playMovieService: PlayMovieService,
    private toggleSearchService: ToggleSearchService
  ) {}

  ngOnInit(): void {
    this.statePlayMovie$.subscribe((res) => {
      console.log('este es el estado', res);
      this.state = res;
    });

    this.stateToggle$.subscribe((res:Search) => {
      console.log('estado de busqueda', res);
      this.stateSearch=res.state;
    });
  }
}
