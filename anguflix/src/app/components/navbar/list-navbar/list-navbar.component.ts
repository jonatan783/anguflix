import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';
import { Genre } from 'src/app/interfaces/genre.interface';
import { tap } from 'rxjs';
import { ToggleSearchService } from 'src/app/services/toggleSearch.service';

@Component({
  selector: 'app-list-navbar',
  templateUrl: './list-navbar.component.html',
  styleUrls: ['./list-navbar.component.scss'],
})
export class ListNavbarComponent implements OnInit {
  constructor(
    private genresService: GenresService,
    private toggleSeachService: ToggleSearchService
    ) {}
  genres!: Genre[];
  selected!: Genre;
  singleMovie: boolean = false;

  ngOnInit() {
    this.genresService
      .getGenres()
      .pipe(
        tap((genres) => {
          this.genres = [{id:100000, name:'Inicio'}, ...genres.genres]
          //this.genres = genres.genres;
          this.selected =this.genres[0]
        })
      )
      .subscribe();
  }

  fnSelected(value: Genre): void {
    if (this.selected != value) this.selected = value;
    console.log(this.selected);
    if(value.id&&(value.id!=100000)) this.toggleSeachService.trueToggle({
      state:true,
      name:undefined,
      genreId:value.id
    })
    if(value.id===100000)this.toggleSeachService.trueToggle({
      state:false,
      name:undefined,
      genreId:undefined
    })

  }

}
