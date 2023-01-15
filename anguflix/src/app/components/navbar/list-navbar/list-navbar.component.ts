import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';
import { Genre } from 'src/app/interfaces/genre.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list-navbar',
  templateUrl: './list-navbar.component.html',
  styleUrls: ['./list-navbar.component.scss'],
})
export class ListNavbarComponent implements OnInit {
  constructor(private genresService: GenresService) {}
  genres!: Genre[];
  selected!: Genre;

  ngOnInit() {
    this.genresService
      .getGenres()
      .pipe(
        tap((genres) => {
          this.genres = genres.genres;
          this.selected = genres.genres[0]
        })
      )
      .subscribe();
  }

  fnSelected(value: Genre): void {
    if (this.selected != value) this.selected = value;
    console.log(this.selected);
  }
}
