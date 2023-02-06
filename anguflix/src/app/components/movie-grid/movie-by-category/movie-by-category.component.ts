import { Component, Input, OnInit } from '@angular/core';
import { MoviesByGenre } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie-by-category',
  templateUrl: './movie-by-category.component.html',
  styleUrls: ['./movie-by-category.component.scss'],
})
export class MovieByCategoryComponent implements OnInit {
  @Input() movieByGenre!: MoviesByGenre;
  
  constructor() {}

  ngOnInit(): void {}
  buttonBack: boolean = false;
  buttonForward: boolean = true; //suponemos tener una lista de imagenes

  clickArrowBack(scrollName: string): void {
    const whidth: number = document.querySelectorAll('.movie')[0].scrollWidth;
    const scroll: any = document.getElementById(scrollName);

    scroll.scrollLeft -= whidth;
    this.buttonForward = true;

    if (scroll.scrollLeft < whidth + 16) this.buttonBack = false;
    else this.buttonBack = true;
  }

  clickArrowForward(scrollName: string): void {
    const whidth: number = document.querySelectorAll('.movie')[0].scrollWidth;
    const scroll: any = document.getElementById(scrollName);

    scroll.scrollLeft += whidth;
    this.buttonBack = true;

    const reigth: number =
      scroll.scrollWidth - scroll.offsetWidth - scroll.scrollLeft;
    console.log('derecho', reigth);
    if (reigth < whidth + 16) this.buttonForward = false;
    else this.buttonForward = true;
  }
}
